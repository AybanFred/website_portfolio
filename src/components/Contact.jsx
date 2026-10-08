import { useState } from 'react'
import { CircleAlert, CircleCheck, Loader2, MessageCircle, Sparkles } from 'lucide-react'
import PortraitFrame from './PortraitFrame'
import contactImg from '../assets/contact.png'

const WEB3FORMS_URL = 'https://api.web3forms.com/submit'

const Contact = ({ darkMode }) => {
    // 'idle' | 'sending' | 'success' | 'error'
    const [status, setStatus] = useState('idle')
    const [errorText, setErrorText] = useState('')

    // Sends the message to Ivant's inbox through Web3Forms. The access key is a
    // public, send-only key (it can only deliver mail to the address it was made for).
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.currentTarget
        const data = new FormData(form)

        // Honeypot: real visitors never see or fill this field, bots do.
        if (data.get('botcheck')) {
            setStatus('success')
            form.reset()
            return
        }

        const accessKey = import.meta.env.VITE_WEB3FORMS_KEY
        if (!accessKey) {
            console.error('VITE_WEB3FORMS_KEY is not set; the contact form cannot send.')
            setErrorText("The contact form isn't set up yet. Please try again later.")
            setStatus('error')
            return
        }

        const name = `${data.get('first_name')} ${data.get('last_name')}`.trim()
        setStatus('sending')
        try {
            const res = await fetch(WEB3FORMS_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    access_key: accessKey,
                    subject: `New portfolio message from ${name}`,
                    from_name: 'Portfolio Contact Form',
                    name,
                    email: data.get('email'),
                    phone: data.get('phone'),
                    message: data.get('message'),
                }),
            })
            const result = await res.json()
            if (!result.success) throw new Error(result.message || 'Request failed')
            form.reset()
            setStatus('success')
        } catch (err) {
            console.error('Contact form failed', err)
            setErrorText('Something went wrong sending your message. Please try again.')
            setStatus('error')
        }
    }

    const badges = [
        {label: "Let's Talk", Icon: MessageCircle,
            pos: 'top-[14%] right-0 sm:-right-6', delay: 0},
        {label: 'Open to Projects', Icon: Sparkles,
            pos: 'top-[32%] right-0 sm:-right-10', delay: 0.8},
    ];

    return (
        <section id='contact'
            style={{ backgroundColor: darkMode ? "var(--color-brand-night)" : "var(--color-brand-cream)" }}
            className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-10 md:mb-12"
                    data-aos='fade-up'>
                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
                        style={{ color: darkMode ? "var(--color-brand-cream)" : "var(--color-brand-ink)" }}>
                        Get In <span
                            style={{
                                background: 'var(--gradient-brand-text)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent'
                            }}>
                            Touch
                        </span>

                    </h2>
                    <p
                        className="text-base sm:text-lg md:text-xl"
                        style={{ color: darkMode ? "var(--color-brand-sky)" : "var(--color-brand-navy)" }}>
                        Have a project to build, a process to automate, or data to make sense of?
                        Tell me about it and let's make it happen.
                    </p>

                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6
            sm:gap-8 md:gap-10 items-center">
                    <div className="flex justify-center order-2 lg:order-1"
                        data-aos='fade-right'>
                        <PortraitFrame
                            src={contactImg}
                            alt="Ivant at his desk"
                            badges={badges}
                            darkMode={darkMode}
                            flip
                            className='w-full max-w-xs sm:max-w-sm lg:max-w-md' />
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            background: darkMode ? 'linear-gradient(to right, var(--color-brand-night-2), var(--color-brand-night))'
                                : 'linear-gradient(to right, #ffffff, var(--color-brand-cream))',
                            borderColor: darkMode ? 'var(--color-brand-navy)' : 'var(--color-brand-sky)'
                        }}
                        className='rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border
                shadow-lg order-1 lg:order-2'
                        data-aos='fade-left'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4'>
                            <input type="text"
                                name='first_name'
                                placeholder='First Name'
                                style={{
                                    backgroundColor: darkMode ? "var(--color-brand-navy)" : "#ffffff",
                                    borderColor: darkMode ? 'var(--color-brand-blue)' : 'var(--color-brand-sky)',
                                    color: darkMode ? 'var(--color-brand-cream)' : 'var(--color-brand-ink)'
                                }}
                                className='w-full px-3 sm:px-4 py-2 sm:py-3
                         rounded-lg text-sm sm:text-base focus:border-brand-blue
                         focus-ring-2 focus-ring-brand-blue/20 transition-all'
                                required />

                            <input type="text"
                                name='last_name'
                                placeholder='Last Name'
                                style={{
                                    backgroundColor: darkMode ? "var(--color-brand-navy)" : "#ffffff",
                                    borderColor: darkMode ? 'var(--color-brand-blue)' : 'var(--color-brand-sky)',
                                    color: darkMode ? 'var(--color-brand-cream)' : 'var(--color-brand-ink)'
                                }}
                                className='w-full px-3 sm:px-4 py-2 sm:py-3
                         rounded-lg text-sm sm:text-base focus:border-brand-blue
                         focus-ring-2 focus-ring-brand-blue/20 transition-all'
                                required />

                            <input type="email"
                                name='email'
                                placeholder='Email Address'
                                style={{
                                    backgroundColor: darkMode ? "var(--color-brand-navy)" : "#ffffff",
                                    borderColor: darkMode ? 'var(--color-brand-blue)' : 'var(--color-brand-sky)',
                                    color: darkMode ? 'var(--color-brand-cream)' : 'var(--color-brand-ink)'
                                }}
                                className='w-full px-3 sm:px-4 py-2 sm:py-3 sm:col-span-2
                         rounded-lg text-sm sm:text-base focus:border-brand-blue
                         focus-ring-2 focus-ring-brand-blue/20 transition-all'
                                required />

                            <input type="tel"
                                name='phone'
                                placeholder='Phone Number (optional)'
                                style={{
                                    backgroundColor: darkMode ? "var(--color-brand-navy)" : "#ffffff",
                                    borderColor: darkMode ? 'var(--color-brand-blue)' : 'var(--color-brand-sky)',
                                    color: darkMode ? 'var(--color-brand-cream)' : 'var(--color-brand-ink)'
                                }}
                                className='w-full px-3 sm:px-4 py-2 sm:py-3 sm:col-span-2
                         rounded-lg text-sm sm:text-base focus:border-brand-blue
                         focus-ring-2 focus-ring-brand-blue/20 transition-all' />

                            {/* Honeypot: hidden from people, filled in by spam bots */}
                            <input type='checkbox' name='botcheck' tabIndex={-1}
                                autoComplete='off' aria-hidden='true'
                                className='hidden' />

                            <textarea rows='4'
                                name='message'
                                placeholder='Your Message'
                                style={{
                                    backgroundColor: darkMode ? "var(--color-brand-navy)" : "#ffffff",
                                    borderColor: darkMode ? 'var(--color-brand-blue)' : 'var(--color-brand-sky)',
                                    color: darkMode ? 'var(--color-brand-cream)' : 'var(--color-brand-ink)'
                                }}
                                className='w-full px-3 sm:px-4 py-2 sm:py-3 sm:col-span-2
                         rounded-lg text-sm sm:text-base focus:border-brand-blue
                         focus-ring-2 focus-ring-brand-blue/20 transition-all mb-4 sm:mb-6
                         resize-none'
                                required />

                            <button
                                type='submit'
                                disabled={status === 'sending'}
                                style={{
                                    background: 'var(--gradient-brand)'
                                }}
                                className='w-full py-2 sm:py-3 text-white sm:col-span-2 font-semibold rounded-lg
                    text-sm sm:text-base hover:shadow-brand-blue/25 inline-flex items-center
                    justify-center gap-2 hover:scale-[1.02] transition-all
                    disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed'>
                                {status === 'sending' && <Loader2 className='w-4 h-4 animate-spin' />}
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>

                            <div role='status' aria-live='polite' className='sm:col-span-2'>
                                {status === 'success' && (
                                    <p className='mt-3 flex items-start gap-2 text-sm sm:text-base text-green-500'>
                                        <CircleCheck className='w-5 h-5 shrink-0' />
                                        Thanks! Your message is on its way. I'll get back to you by email soon.
                                    </p>
                                )}
                                {status === 'error' && (
                                    <p className='mt-3 flex items-start gap-2 text-sm sm:text-base text-red-500'>
                                        <CircleAlert className='w-5 h-5 shrink-0' />
                                        {errorText}
                                    </p>
                                )}
                            </div>

                        </div>

                    </form>

                </div>

            </div>

        </section>
    );
};

export default Contact