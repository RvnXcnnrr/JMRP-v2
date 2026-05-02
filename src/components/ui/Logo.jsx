const Logo = ({
  theme,
  src,
  srcLight = '/logo/JR-logo-lightmode.png',
  srcDark = '/logo/JR-logo-darkmode.png',
  alt = 'Javy Rodillon Logo',
  sizeClassName = 'h-8 sm:h-10 lg:h-12',
  className = '',
  tone = 'dark',
  glowOnDark = true,
  loading,
}) => {
  const resolvedSrc =
    src || (theme ? (theme === 'dark' ? srcDark : srcLight) : srcLight || srcDark)

  const toneClass = src
    ? tone === 'dark'
      ? 'dark:invert dark:brightness-125'
      : 'brightness-95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.2)] dark:brightness-110'
    : ''

  const glowClass = glowOnDark
    ? 'dark:drop-shadow-[0_0_10px_rgba(255,214,10,0.35)]'
    : ''

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      loading={loading}
      decoding="async"
      className={`w-auto ${sizeClassName} ${toneClass} ${glowClass} transition duration-200 ease-out group-hover:scale-105 group-hover:opacity-90 ${className}`}
    />
  )
}

export default Logo
