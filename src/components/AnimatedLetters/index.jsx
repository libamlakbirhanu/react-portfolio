import './index.scss'

import React from 'react'

function AnimatedLetters({letterClass, letters, index}) {
  return (
    <span>
        {
            letters.map((char, i) => (
                <span key={char + i} className={`${letterClass} _${i + index}`}>
                    {char}
                </span>
            ))
        }
    </span>
  )
}

export default AnimatedLetters