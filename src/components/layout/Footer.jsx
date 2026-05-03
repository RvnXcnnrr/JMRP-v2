import { profile, contact } from '../../data/portfolio'

const Footer = () => {
  const github = contact?.socials?.find((s) => s.label === 'GitHub')?.href || '#'
  const linkedin = contact?.socials?.find((s) => s.label === 'LinkedIn')?.href || '#'

  return (
    <footer className="bg-ink text-pearl">
      <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 lg:px-8 text-center">
        <div className="border-t border-white/10 pt-6">
          <p className="text-base font-semibold">{profile.name}</p>
          <p className="mt-2 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="text-pearl/90 hover:text-sun transition duration-200 ease-in-out"
            >
              {profile.email}
            </a>
          </p>

          <div className="mt-4 flex items-center justify-center gap-4 text-sm">
            <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-sun">
              GitHub
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-sun">
              LinkedIn
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-sun">
              Facebook
            </a>
          </div>

          <p className="mt-4 text-xs text-pearl/70">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
