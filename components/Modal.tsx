'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import {
  type MouseEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

interface ModalProps {
  children: ReactNode
}

export function Modal({ children }: ModalProps) {
  const router = useRouter()
  const overlay = useRef<HTMLDivElement>(null)
  const wrapper = useRef<HTMLDivElement>(null)

  const [show, setShow] = useState(true)

  const onDismiss = useCallback(() => {
    setShow(false)
  }, [])

  const onClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) {
          onDismiss()
        }
      }
    },
    [onDismiss]
  )

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onDismiss()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onDismiss])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          ref={overlay}
          className="fixed inset-0 z-10 mx-auto flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={onClick}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
          }}
        >
          <motion.div
            ref={wrapper}
            className="max-w-[90vw] rounded-xl bg-white p-10"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: { scale: '95%', opacity: 0, y: '80px' },
              animate: { scale: '100%', opacity: 1, y: 0 },
              exit: { scale: '95%', opacity: 0, y: '80px' },
            }}
            onAnimationComplete={(definition) => {
              if (definition === 'exit') {
                router.back()
              }
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
