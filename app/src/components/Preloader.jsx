import { useEffect, useState } from 'react'

export default function Preloader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 800)
    return () => clearTimeout(timer)
  }, [])

  if (hidden) return null

  return (
    <div className="preloader preloader-deactivat">
      <div className="loader">
        <div className="shadow"></div>
        <div className="box"></div>
      </div>
    </div>
  )
}
