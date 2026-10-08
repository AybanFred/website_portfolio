import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { DownloadIcon, ExternalLink, FileText, X } from 'lucide-react'

// Full-screen PDF viewer with a Download button. Closes with the X button, the
// Esc key, or a click on the backdrop. Rendered in a portal on document.body so
// AOS transforms on ancestor sections can't break `position: fixed`.
const CVModal = ({ open, onClose, file, downloadName = 'CV.pdf', darkMode }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
        className='fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6
        bg-brand-ink/70 backdrop-blur-sm'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}>
          <motion.div
          role='dialog'
          aria-modal='true'
          aria-label='Curriculum vitae'
          className={`flex flex-col w-full max-w-4xl h-[90vh] rounded-2xl overflow-hidden
          border shadow-2xl ${darkMode
            ? 'bg-brand-night-2 border-brand-navy text-brand-cream'
            : 'bg-brand-cream border-brand-sky text-brand-ink'}`}
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.97 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}>
            <div className='flex items-center justify-between gap-3 px-4 sm:px-5 py-3 border-b
            border-brand-blue/30'>
              <div className='flex items-center gap-2 font-semibold'>
                <FileText className='w-5 h-5 text-brand-blue' />
                My CV
              </div>
              <div className='flex items-center gap-2'>
                <a href={file} download={downloadName}
                className='inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm
                font-semibold text-white bg-linear-to-r from-brand-navy to-brand-blue
                hover:shadow-[0_0_24px_rgb(96,139,193,0.7)] transition-shadow'>
                  <DownloadIcon className='w-4 h-4' />
                  Download
                </a>
                <button
                ref={closeRef}
                type='button'
                onClick={onClose}
                aria-label='Close CV'
                className={`p-2 rounded-full transition-colors ${darkMode
                  ? 'bg-brand-navy hover:bg-brand-blue'
                  : 'bg-brand-sky hover:bg-brand-blue hover:text-white'}`}>
                  <X className='w-5 h-5' />
                </button>
              </div>
            </div>
            <object
            data={`${file}#toolbar=0&navpanes=0&view=FitH`}
            type='application/pdf'
            className='flex-1 w-full bg-white'>
              {/* Shown where the browser can't display PDFs inline (many phones) */}
              <div className='h-full flex flex-col items-center justify-center gap-3 p-6 text-center
              text-brand-ink'>
                <p>Your browser can't preview PDFs here.</p>
                <a href={file} target='_blank' rel='noreferrer'
                className='inline-flex items-center gap-2 font-semibold text-brand-navy underline'>
                  <ExternalLink className='w-4 h-4' />
                  Open the CV in a new tab
                </a>
              </div>
            </object>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

export default CVModal
