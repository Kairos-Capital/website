export default function Nav() {
  return (
    <nav>
      <a href="/" className="nav-logo">
        <svg className="nav-logo-mark" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="84" height="84" rx="0" stroke="#f4be47" strokeWidth="10" fill="none" />
          <polygon points="50,18 82,80 18,80" fill="#f4be47" />
          <polygon points="50,38 68,72 32,72" fill="#0c0c0b" />
        </svg>
        <span className="nav-logo-text">Kairos Capital</span>
      </a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#how">How We Buy</a></li>
        <li><a href="#criteria">Criteria</a></li>
        <li><a href="#contact" className="nav-cta">Start a Conversation</a></li>
      </ul>
    </nav>
  )
}
