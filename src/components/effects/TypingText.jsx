import { useEffect, useState } from 'react'

const TypingText = ({ phrases, speed = 80, pause = 1400, className = '' }) => {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex] || ''
    const atEnd = subIndex === currentPhrase.length
    const atStart = subIndex === 0

    const timeout = setTimeout(() => {
      if (!isDeleting && atEnd) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && atStart) {
        setIsDeleting(false)
        setPhraseIndex((index) => (index + 1) % phrases.length)
        return
      }

      setSubIndex((value) => value + (isDeleting ? -1 : 1))
    }, atEnd && !isDeleting ? pause : speed)

    return () => clearTimeout(timeout)
  }, [phrases, phraseIndex, subIndex, isDeleting, pause, speed])

  return (
    <span className={`inline-flex items-center gap-2 ${className}`.trim()}>
      <span className="text-sun">{(phrases[phraseIndex] || '').slice(0, subIndex)}</span>
      <span className="inline-block h-4 w-1.5 animate-pulse bg-sun sm:h-5 sm:w-2" />
    </span>
  )
}

export default TypingText
