import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

// Types each word, holds it, deletes it, then moves on to the next (looping).
// Screen readers get the full list once via aria-label instead of the
// character-by-character animation; reduced-motion users get a static list.
const Typewriter = ({ words, start = true, typeMs = 70, deleteMs = 35, holdMs = 1600, className = '', style }) => {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduceMotion || !start) return
    const word = words[index]
    let delay
    let next

    if (!deleting && count < word.length) {
      delay = typeMs
      next = () => setCount(count + 1)
    } else if (!deleting) {
      delay = holdMs
      next = () => setDeleting(true)
    } else if (count > 0) {
      delay = deleteMs
      next = () => setCount(count - 1)
    } else {
      delay = 300
      next = () => {
        setDeleting(false)
        setIndex((index + 1) % words.length)
      }
    }

    const id = setTimeout(next, delay)
    return () => clearTimeout(id)
  }, [reduceMotion, start, words, index, count, deleting, typeMs, deleteMs, holdMs])

  if (reduceMotion) {
    return <span className={className} style={style}>{words.join(' · ')}</span>
  }

  return (
    <span aria-label={words.join(', ')} className='whitespace-nowrap'>
      <span aria-hidden='true'>
        <span className={className} style={style}>{words[index].slice(0, count)}</span>
        {start && <span className='typewriter-cursor text-brand-blue font-light'>|</span>}
      </span>
    </span>
  )
}

export default Typewriter
