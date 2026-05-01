const ThemeToggle = ({ theme, onToggle }) => {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isDark}
      aria-label="Toggle color theme"
      className="group inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-3 py-2 text-[0.6rem] uppercase tracking-[0.3em] text-ink transition hover:border-sun/70 hover:text-ink dark:border-white/10 dark:bg-white/5 dark:text-pearl"
    >
      <span className="hidden sm:inline">{isDark ? 'Dark' : 'Light'}</span>
      <span className="relative h-6 w-11 rounded-full bg-ink/10 transition dark:bg-pearl/15">
        <span
          className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-ink transition duration-300 ${
            isDark ? 'translate-x-4 bg-sun' : ''
          }`}
        />
      </span>
    </button>
  )
}

export default ThemeToggle
