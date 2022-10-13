import { useState } from 'react'
import { useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../../components/AnimatedLetters'
import './index.scss'

function Portfolio() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            letters={['p', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
            index={15}
          />
        </h1>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
