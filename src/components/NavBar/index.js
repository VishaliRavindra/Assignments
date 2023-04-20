import './index.css'

const NavBar = props => {
  const {counter, isGameInProgress, score} = props
  const ts = score === 0 ? '0' : score

  return (
    <nav className="nav-bar-container">
      <li className="title-with-score-container">
        <li className="logo-and-title-container">
          <img
            className="match-logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
        </li>
        {isGameInProgress && (
          <li className="scores-container">
            <p className="score">Score: {ts}</p>
            <div className="timer-counter-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer-img"
              />
              <p className="score">: {counter}sec</p>
            </div>
          </li>
        )}
      </li>
    </nav>
  )
}

export default NavBar
