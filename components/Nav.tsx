'use client'

import { useState, useEffect } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <nav>
        <a href="/" className="nav-logo">
          <svg className="nav-logo-mark" viewBox="0 0 1208 1208" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path transform="translate(542,138)" d="m0 0h124l8 2 5 6 8 15 4 8 16 26 9 17 10 15 9 16 7 12 9 15 13 23 9 15 9 16 12 20 10 17 13 22 12 21 14 24 9 17 14 22 14 24 16 27 12 22 10 16 9 16 10 16 13 23 11 18 7 13 10 17 14 24 12 20 8 14 15 25 10 17 17 29 9 16 17 29 16 27 10 17 13 23 6 9 15 26 12 20 10 17 16 27 5 8 1 3v7l-10 18-17 28-11 20-14 23-10 18-4 5-2 1-346 1-8-7-7-12-8-16-7-13-10-15-9-16-8-13-12-21-7-11-10-15-5-8v-7l2-2h11l18 2 70 1h45l79-3h14l14 1h29l4-2v-6l-10-19-12-19-12-22-12-19-8-14-14-24-15-27-13-21-10-18-9-14-15-26-6-10-8-15-12-19-9-15-9-16-8-13-9-16-4-8-11-16-12-22-7-13-13-22-13-21-10-16-7-14-14-22-8-13-5-10-8-13-16-28-10-16-8-16-13-21-10-15-5-5-5 8-22 36-10 18-12 20-10 18-9 15-15 27-21 35-17 28-13 23-15 26-10 16-14 25-10 17-12 20-10 17-8 13-13 22-8 13-13 23-10 17-14 25-7 10-9 15-9 16-15 27-12 20-10 16-10 17-10 16-10 17v6l8 4 11 2h150l74-3h45l-1 4-9 16-10 16-10 18-16 27-11 20-10 17-6 10-6 11-7 11-4 4-2 1-346 1-5-5-6-9-7-16-9-13-8-14-13-23-8-13-7-14-1-8 3-10 16-27 6-10 13-21 13-23 15-24 9-16 12-20 9-14 8-15 11-17 6-10 8-17 9-15 15-26 8-13 13-23 10-15 15-27 9-16 11-18 11-19 12-20 12-19 15-28 13-21 11-21 9-13 12-20 20-34 11-19 7-11 7-14 13-21 9-15 13-23 10-18 15-25 11-21 17-26 7-12 6-11 14-24 11-20 12-21 10-17 4-5z" fill="#ffffff"/>
            <path transform="translate(1169,73)" d="m0 0h13l4 3 1 8-1 5v22l-1 42v491l2 54v106l-4-1-4-5-9-16-7-13-10-16-8-15-8-14-6-10-10-19-10-17-7-10-7-13-10-18-7-10-8-16-10-15-20-35-6-10-4-13 2-9 1-287-3-8-3-3v-2l-181-1-3-1-13-21-15-28-14-23-9-15-14-24-16-27-8-11 1-3h401l9-1z" fill="#ffffff"/>
            <path transform="translate(433,73)" d="m0 0h8l4 2-1 5-10 16-10 17-11 18-10 17-17 29-13 23-10 16-6 11-6 1-176 1-2 4v8l1 7v44l-1 18v158l1 42v22l-3 12-9 16-11 17-11 20-8 13-9 16-8 14-9 15-14 24-8 13-11 20-11 18-11 20-7 11-8 14-14 28-5 1-3-3 1-11 3-17 1-59 1-23 2-17v-137l-1-269v-136l-2-40v-15l1-1h63l199-1h128z" fill="#ffffff"/>
          </svg>
          <span className="nav-logo-text">Kairos Capital</span>
        </a>

        <ul className="nav-links">
          <li><a href="/#our-story">Our Story</a></li>
          <li><a href="/#how">Our Process</a></li>
          <li><a href="/#criteria">Investment Criteria</a></li>
          <li><a href="/founder-message">The Foundation</a></li>
          <li><a href="/#contact" className="nav-cta">Let's Talk!</a></li>
        </ul>

        <button
          className={`nav-hamburger${open ? ' is-open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {open && (
        <div className="nav-mobile-menu">
          <ul>
            <li><a href="/#our-story" onClick={close}>Our Story</a></li>
            <li><a href="/#how" onClick={close}>Our Process</a></li>
            <li><a href="/#criteria" onClick={close}>Investment Criteria</a></li>
            <li><a href="/founder-message" onClick={close}>The Foundation</a></li>
          </ul>
          <a href="/#contact" className="nav-cta nav-mobile-cta" onClick={close}>
            Let's Talk!
          </a>
        </div>
      )}
    </>
  )
}
