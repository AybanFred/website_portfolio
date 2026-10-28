import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ProjectSlideshow = ({ images, title, interval = 4000 }) => {
    const [current, setCurrent] = useState(0)
    const [paused, setPaused] = useState(false)

    useEffect(() => {
        if (paused || images.length < 2) return
        const timer = setInterval(() => setCurrent((c) => (c + 1) % images.length), interval)
        return () => clearInterval(timer)
    }, [paused, images.length, interval])

    const go = (step) => setCurrent((c) => (c + step + images.length) % images.length)

    return (
        <div
            className='relative aspect-square overflow-hidden rounded-t-xl'
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}>
            {images.map((src, idx) => (
                <img
                    key={src}
                    src={src}
                    alt={`${title} screenshot ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
                    ${idx === current ? 'opacity-100' : 'opacity-0'}`} />
            ))}

            <button
                type='button'
                aria-label='Previous slide'
                onClick={() => go(-1)}
                className='absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40
                text-white opacity-0 group-hover:opacity-100 hover:bg-black/60 transition-all'>
                <ChevronLeft className='w-4 h-4' />
            </button>
            <button
                type='button'
                aria-label='Next slide'
                onClick={() => go(1)}
                className='absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40
                text-white opacity-0 group-hover:opacity-100 hover:bg-black/60 transition-all'>
                <ChevronRight className='w-4 h-4' />
            </button>

            <div className='absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5'>
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        type='button'
                        aria-label={`Go to slide ${idx + 1}`}
                        onClick={() => setCurrent(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300
                        ${idx === current ? 'w-5 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'}`} />
                ))}
            </div>
        </div>
    )
}

export default ProjectSlideshow
