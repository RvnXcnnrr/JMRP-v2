import { profile } from '../../data/portfolio'

const Footer = () => {
  return (
    <footer className="border-t border-black/10 py-12 text-center text-[0.6rem] uppercase tracking-[0.4em] text-ink/60 dark:border-white/10 dark:text-pearl/60">
      {profile.footer}
    </footer>
  )
}

export default Footer
