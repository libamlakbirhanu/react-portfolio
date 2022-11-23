import { useState } from 'react'
import { useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../../components/AnimatedLetters'
import portfolioData from '../../data/portfolio.json'
import './index.scss'

function Portfolio() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const renderPortfolio = () => {
    return (
      <div className="images-container">
        {portfolioData.portfolio.map((portfolio, i) => {
          return (
            <div className="image-box" key={i}>
              <img
                src={portfolio.cover}
                alt="cover"
                className="portfolio-image"
              />
              <div className="content">
                <p className="title">{portfolio.title}</p>
                <h4 className="description">{portfolio.description}</h4>
                <button
                  className="btn"
                  onClick={() => window.open(portfolio.url)}
                >
                  visit
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

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
        <div>{renderPortfolio()}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
