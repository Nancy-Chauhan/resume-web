import React from 'react'

export default function Footer() {
  return (
    <footer>
      <p className='copyright'>
        &copy;{' '}
        <time dateTime={new Date().toISOString()}>
          {new Date().getFullYear()}
        </time>
        {' '}
        Nancy Chauhan. Content available under{' '}
        <a href='https://creativecommons.org/licenses/by/4.0/'>CC BY 4.0</a>
      </p>
      <p className='imprint'>
        Powered by Gatsby. <a href='https://github.com/Nancy-Chauhan/resume-web'>Source</a>
      </p>
    </footer>
  )
}
