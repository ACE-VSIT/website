import React, { useEffect } from 'react'

const App: React.FC = () => {
  useEffect(() => {
    window.location.replace('https://vipsace.org/')
  }, [])
  return <div>MF-CRA</div>
}

export default App
