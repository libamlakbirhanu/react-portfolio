import { useState } from 'react'
import { useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders'
import AnimatedLetters from '../../components/AnimatedLetters'
import watchers from '../../assets/images/rickandmorty.png'
import './index.scss'
import toast from 'react-hot-toast'

function Contact() {
  const [loading, setLoading] = useState(false)
  const form = useRef()
  const [letterClass, setLetterClass] = useState('text-animate')
  const anchor = document.getElementById('rickandmorty')
  const eyes = document.querySelectorAll('.eye-hole')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const notifySuccess = () => toast('Email sent successfully.')
  const notifyError = () => toast("Email couldn't be sent, please try again!")

  const sendEmail = (e) => {
    e.preventDefault()

    setLoading(true)
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setLoading(false)
          notifySuccess()
        },
        (error) => {
          setLoading(false)
          notifyError()
        }
      )
  }

  const handleMouseMove = (x, y) => {
    const rekt = anchor?.getBoundingClientRect()
    const anchorX = rekt?.left + rekt.width / 2
    const anchorY = rekt?.top + rekt.height / 2

    const angleDeg = angle(x, y, anchorX, anchorY)

    eyes.forEach((eye) => {
      eye.style.transform = `rotate(${angleDeg - 20}deg)`
      // anchor.style.filter = `hue-rotate(${angleDeg}deg)`
    })
  }

  const angle = (cx, cy, ex, ey) => {
    const dy = ey - cy
    const dx = ex - cx

    const rad = Math.atan2(dy, dx)
    const deg = (rad * 180) / Math.PI

    return deg
  }

  return (
    <>
      <div
        className="container contact-page"
        onMouseMove={(pos) => handleMouseMove(pos.clientX, pos.clientY)}
      >
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              letters={['C', 'O', 'N', 'T', 'A', 'C', 'T', ' ', 'M', 'E']}
              index={15}
            />
          </h1>
          <p>
            I am interested in taking on challenging websites as a remote
            developer. If you would like to know more about me or have any
            questions for me you can contact me using the form on this page
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <div className="half-wrapper">
                  <li className="half">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </li>
                </div>
                <li>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="the-watchers">
          <div className="eye-hole eye-left">
            <div className="eye"></div>
          </div>
          <div className="eye-hole eye-right">
            <div className="eye "></div>
          </div>
          <div className="eye-hole dark-eye-left">
            <div className="dark-eye"></div>
          </div>
          <div className="eye-hole dark-eye-right">
            <div className="dark-eye "></div>
          </div>
          <img src={watchers} alt="proximity watchers" id="rickandmorty" />
        </div>
      </div>
      {loading && <Loader type="pacman" />}
      <Loader type="pacman" />
    </>
  )
}

export default Contact
