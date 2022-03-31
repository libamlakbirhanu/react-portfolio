import './index.scss'
import '../../components/AnimatedLetters/index.scss'
import LogoTitle from '../../assets/images/mylogo.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../../components/AnimatedLetters'

function Home() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const name = ['i', 'b', 'a', 'm', 'l', 'a', 'k']
  const job = ["w",'e','b', ' ','d','e','v','e','l','o','p','e','r', '.']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className='container home-page'>
        <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span> 
              <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="Developer" />
            <AnimatedLetters letterClass={letterClass} letters={name} index={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} letters={job} index={22} />
            </h1>
            <h2>Frontend Developer / JavaScript Expert</h2>
            <Link to='/contact' className='flat-button'>Contact Me</Link>
        </div>
    </div>
  )
}

export default Home