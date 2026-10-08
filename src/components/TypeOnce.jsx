import { Fragment, useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

// Types a line of text once on mount (so once per page load), then stops.
// `segments` is [{ text, style? }] so parts of the line can be styled, e.g. a
// gradient brand name. The not-yet-typed characters stay in the layout as
// invisible text, so the line never reflows or shifts the page while typing.
const TypeOnce = ({ segments, speed = 55, startDelay = 500, onDone }) => {
  const reduceMotion = useReducedMotion()
  const total = segments.reduce((n, s) => n + s.text.length, 0)
  const [count, setCount] = useState(0)
  const shown = reduceMotion ? total : count
  const finished = shown >= total

  useEffect(() => {
    if (finished) {
      onDone?.()
      return
    }
    const id = setTimeout(() => setCount((c) => c + 1), count === 0 ? startDelay : speed)
    return () => clearTimeout(id)
  }, [finished, count, speed, startDelay, onDone])

  // Character offset where each segment starts within the whole line.
  const starts = segments.map((_, i) =>
    segments.slice(0, i).reduce((n, s) => n + s.text.length, 0))
  // The caret sits after the segment holding the last typed character.
  const caretAfter = finished
    ? -1
    : Math.max(0, starts.filter((start) => start < shown).length - 1)

  return (
    <>
      <span className='sr-only'>{segments.map((s) => s.text).join('')}</span>
      <span aria-hidden='true'>
        {segments.map((seg, i) => {
          const visible = Math.max(0, Math.min(seg.text.length, shown - starts[i]))
          return (
            <Fragment key={i}>
              <span style={seg.style}>{seg.text.slice(0, visible)}</span>
              {i === caretAfter && <Caret />}
              <span className='invisible'>{seg.text.slice(visible)}</span>
            </Fragment>
          )
        })}
      </span>
    </>
  )
}

// Zero-width so the caret never changes how the line wraps.
const Caret = () => (
  <span className='relative inline-block w-0 align-baseline'>
    <span className='typewriter-cursor absolute left-0 top-0 text-brand-blue font-light'>|</span>
  </span>
)

export default TypeOnce
