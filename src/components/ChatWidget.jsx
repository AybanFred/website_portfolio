import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Bot, MessageCircle, Send, X } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

const GREETING = "Hi! I'm Ivant's assistant. Ask me about his skills, services or projects."
const SUGGESTIONS = [
  'What are your skills?',
  'What services do you offer?',
  'Tell me about your projects',
]

// Markdown elements styled to fit the chat bubble. react-markdown does not
// render raw HTML, so model output can't inject markup.
const mdComponents = {
  p: (props) => <p className='my-1 first:mt-0 last:mb-0' {...props} />,
  ul: (props) => <ul className='my-1 pl-5 list-disc space-y-0.5' {...props} />,
  ol: (props) => <ol className='my-1 pl-5 list-decimal space-y-0.5' {...props} />,
  strong: (props) => <strong className='font-semibold' {...props} />,
  h1: (props) => <h3 className='mt-2 mb-1 font-bold' {...props} />,
  h2: (props) => <h3 className='mt-2 mb-1 font-bold' {...props} />,
  h3: (props) => <h3 className='mt-2 mb-1 font-semibold' {...props} />,
  a: (props) => (
    <a target='_blank' rel='noreferrer noopener' className='underline text-brand-blue' {...props} />
  ),
  code: (props) => (
    <code className='px-1 py-0.5 rounded bg-brand-blue/20 text-[0.85em] break-all' {...props} />
  ),
  pre: (props) => (
    <pre className='my-1 p-2 rounded-lg bg-brand-blue/15 overflow-x-auto text-xs' {...props} />
  ),
}

// Floating chat assistant. Rendered in a portal on document.body so AOS
// transforms on ancestor sections can't break `position: fixed`.
const ChatWidget = ({ darkMode }) => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const endRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading, error, open])

  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()
    const onKeyDown = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  const send = async (text) => {
    const content = text.trim()
    if (!content || loading) return

    const next = [...messages, { role: 'user', content }]
    setMessages(next)
    setInput('')
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })
      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      // Read the plain-text stream and grow the assistant bubble as tokens arrive.
      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let reply = ''
      for (;;) {
        const { done, value } = await reader.read()
        if (done) break
        reply += decoder.decode(value, { stream: true })
        setMessages([...next, { role: 'assistant', content: reply }])
      }
      reply += decoder.decode()
      if (!reply.trim()) throw new Error('Something went wrong. Please try again.')
      setMessages([...next, { role: 'assistant', content: reply }])
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    send(input)
  }

  const bubbleBot = darkMode
    ? 'bg-brand-night text-brand-cream border border-brand-navy'
    : 'bg-white text-brand-ink border border-brand-sky'

  return createPortal(
    <div className='fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[90] flex flex-col items-end gap-3'>
      <AnimatePresence>
        {open && (
          <motion.div
            role='dialog'
            aria-label='Chat assistant'
            className={`flex flex-col w-[calc(100vw-2rem)] sm:w-96 h-[32rem] max-h-[calc(100vh-7rem)]
            rounded-2xl overflow-hidden border shadow-2xl ${darkMode
              ? 'bg-brand-night-2 border-brand-navy text-brand-cream'
              : 'bg-brand-cream border-brand-sky text-brand-ink'}`}
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}>
            <div className='flex items-center justify-between gap-3 px-4 py-3 text-white
            bg-linear-to-r from-brand-navy to-brand-blue'>
              <div className='flex items-center gap-2 font-semibold'>
                <Bot className='w-5 h-5' />
                Ask about Ivant
              </div>
              <button type='button' onClick={() => setOpen(false)} aria-label='Close chat'
                className='p-1.5 rounded-full hover:bg-white/20 transition-colors'>
                <X className='w-5 h-5' />
              </button>
            </div>

            <div className='flex-1 overflow-y-auto px-4 py-4 space-y-3' aria-live='polite'>
              <div className={`max-w-[85%] px-3 py-2 rounded-2xl rounded-tl-sm text-sm ${bubbleBot}`}>
                {GREETING}
              </div>

              {messages.length === 0 && (
                <div className='flex flex-wrap gap-2'>
                  {SUGGESTIONS.map((s) => (
                    <button key={s} type='button' onClick={() => send(s)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${darkMode
                        ? 'border-brand-blue text-brand-sky hover:bg-brand-navy'
                        : 'border-brand-navy text-brand-navy hover:bg-brand-sky'}`}>
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-3 py-2 text-sm wrap-break-word ${m.role === 'user'
                    ? 'whitespace-pre-wrap rounded-2xl rounded-tr-sm text-white bg-linear-to-r from-brand-navy to-brand-blue'
                    : `rounded-2xl rounded-tl-sm ${bubbleBot}`}`}>
                    {m.role === 'user'
                      ? m.content
                      : <ReactMarkdown components={mdComponents}>{m.content}</ReactMarkdown>}
                  </div>
                </div>
              ))}

              {loading && messages[messages.length - 1]?.role === 'user' && (
                <div className={`inline-flex gap-1 px-3 py-3 rounded-2xl rounded-tl-sm ${bubbleBot}`}
                  aria-label='Assistant is typing'>
                  {[0, 1, 2].map((d) => (
                    <span key={d} className='w-1.5 h-1.5 rounded-full bg-brand-blue animate-bounce'
                      style={{ animationDelay: `${d * 0.15}s` }} />
                  ))}
                </div>
              )}

              {error && (
                <div role='alert' className='px-3 py-2 rounded-2xl text-sm bg-red-500/15 text-red-400
                border border-red-500/40'>
                  {error}
                </div>
              )}
              <div ref={endRef} />
            </div>

            <form onSubmit={onSubmit} className={`flex items-center gap-2 p-3 border-t ${darkMode
              ? 'border-brand-navy' : 'border-brand-sky'}`}>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                maxLength={500}
                disabled={loading}
                placeholder='Type your question...'
                aria-label='Your message'
                className={`flex-1 min-w-0 px-3 py-2 rounded-full text-sm outline-none border
                focus:ring-2 focus:ring-brand-blue/40 disabled:opacity-60 ${darkMode
                  ? 'bg-brand-night border-brand-navy text-brand-cream placeholder:text-brand-sky/50'
                  : 'bg-white border-brand-sky text-brand-ink placeholder:text-brand-ink/40'}`} />
              <button type='submit' disabled={loading || !input.trim()} aria-label='Send message'
                className='p-2.5 rounded-full text-white bg-linear-to-r from-brand-navy to-brand-blue
                disabled:opacity-50 disabled:cursor-not-allowed transition-opacity'>
                <Send className='w-4 h-4' />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button type='button' onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'} aria-expanded={open}
        className='p-4 rounded-full text-white bg-linear-to-r from-brand-navy to-brand-blue shadow-xl
        hover:shadow-[0_0_24px_rgb(96,139,193,0.7)] transition-shadow'>
        {open ? <X className='w-6 h-6' /> : <MessageCircle className='w-6 h-6' />}
      </button>
    </div>,
    document.body
  )
}

export default ChatWidget
