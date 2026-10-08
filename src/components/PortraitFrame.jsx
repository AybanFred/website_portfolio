import { motion, useReducedMotion } from 'framer-motion'

// Cut-out portrait on a gradient frame; the subject pops out above the frame's
// top edge. `shape` is 'rounded' (default) or 'circle'. `badges` are floating
// glass cards: [{label, Icon, pos, delay}], where `pos` is Tailwind positioning.
// Sizing is up to the caller via `className`; other props (e.g. data-aos) pass through.

// Circle shape: the circle is 80% of the component's width, so its radius is 40cqw.
// The root is an `@container`, which is what lets the mask size itself in cqw units.
const R = '40cqw';
const circleMask = {
  // Lower half: the circle. Upper half: a full-width rectangle so the head isn't clipped.
  maskImage: `radial-gradient(circle ${R} at 50% calc(100% - ${R}), #000 calc(${R} - 1px), transparent ${R}), linear-gradient(#000, #000)`,
  maskSize: `100% 100%, 100% calc(100% - ${R})`,
  maskPosition: '0 0, 0 0',
  maskRepeat: 'no-repeat',
};
const circleMaskWebkit = Object.fromEntries(
  Object.entries(circleMask).map(([key, value]) => [
    `Webkit${key[0].toUpperCase()}${key.slice(1)}`, value,
  ])
);

const dotPattern = {
  backgroundImage: 'radial-gradient(rgb(255 255 255 / 0.55) 1px, transparent 1px)',
  backgroundSize: '18px 18px',
  maskImage: 'linear-gradient(to bottom, black, transparent 70%)',
  WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 70%)',
};

const PortraitFrame = ({ src, alt, badges = [], darkMode, flip = false, shape = 'rounded', className = '', ...rest }) => {
  const reduceMotion = useReducedMotion();
  const isCircle = shape === 'circle';

  return (
    <div className={`@container relative mt-12 ${className}`} {...rest}>
      {/* Soft glow */}
      <div className={`absolute bottom-0 bg-brand-blue/40 blur-3xl z-0 ${isCircle
        ? 'left-[10%] w-[80%] aspect-square rounded-full'
        : 'inset-x-4 h-3/4 rounded-[3rem]'}`}></div>
      {/* Offset outline */}
      <div className={`absolute bottom-0 border-2 border-brand-blue/50 z-0
      ${flip ? '-translate-x-4' : 'translate-x-4'} ${isCircle
        ? 'left-[10%] w-[80%] aspect-square rounded-full translate-y-3'
        : 'inset-x-0 h-[82%] rounded-4xl translate-y-4'}`}></div>
      {/* Gradient frame */}
      <div className={`absolute bottom-0 overflow-hidden bg-linear-to-t from-brand-blue
      to-brand-sky shadow-2xl shadow-brand-navy/30 z-0 ${isCircle
        ? 'left-[10%] w-[80%] aspect-square rounded-full'
        : 'inset-x-0 h-[82%] rounded-4xl'}`}>
        <div className="absolute inset-0 opacity-60" style={dotPattern}></div>
        {isCircle ? (
          <>
            <div className="absolute inset-4 rounded-full border border-white/50"></div>
            <div className="absolute inset-10 rounded-full border border-white/30"></div>
          </>
        ) : (
          <>
            <div className={`absolute -top-16 w-56 h-56 rounded-full border border-white/50
            ${flip ? '-left-16' : '-right-16'}`}></div>
            <div className={`absolute -top-6 w-36 h-36 rounded-full border border-white/40
            ${flip ? '-left-6' : '-right-6'}`}></div>
          </>
        )}
      </div>
      {/* Portrait pops out above the frame; its bottom is clipped to the frame's shape */}
      <img
      src={src}
      alt={alt}
      className='relative block w-full h-auto z-10'
      style={isCircle
        ? { ...circleMask, ...circleMaskWebkit }
        : { clipPath: 'inset(0 round 0 0 2rem 2rem)' }} />
      {/* Floating glass badges */}
      {badges.map(({label, Icon, pos, delay = 0}) => (
        <motion.div
        key={label}
        className={`absolute z-20 flex items-center gap-2 rounded-2xl px-3 py-2
        backdrop-blur-md border shadow-xl ${pos}
        ${darkMode
          ? 'bg-brand-night/60 border-brand-blue/30 text-brand-cream'
          : 'bg-white/70 border-white/60 text-brand-ink'}`}
        animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}>
          <span className='flex items-center justify-center w-8 h-8 rounded-xl
          bg-linear-to-br from-brand-navy to-brand-blue text-white'>
            <Icon className='w-4 h-4' />
          </span>
          <span className='text-xs sm:text-sm font-semibold whitespace-nowrap'>
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

export default PortraitFrame
