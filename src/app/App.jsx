import CursorGlow from '../components/effects/CursorGlow'
import Home from '../pages/Home'
import useTheme from '../hooks/useTheme'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="relative min-h-screen bg-mesh">
      <CursorGlow theme={theme} />
      <Home theme={theme} onToggleTheme={toggleTheme} />
    </div>
  )
}

export default App
