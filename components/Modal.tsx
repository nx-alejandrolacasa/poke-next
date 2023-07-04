'use client'

import { useCallback, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

interface ModalProps {
  children: React.ReactNode
}

export function Modal({ children }: ModalProps) {
  const router = useRouter()
  const overlay = useRef<HTMLDivElement>(null)
  const wrapper = useRef<HTMLDivElement>(null)

  const onDismiss = useCallback(() => {
    router.back()
  }, [router])

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) {
          onDismiss()
        }
      }
    },
    [overlay, wrapper, onDismiss]
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
    <div
      ref={overlay}
      className="fixed inset-0 z-10 mx-auto bg-black/60"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-10"
      >
        {children}
      </div>
    </div>
  )
}
