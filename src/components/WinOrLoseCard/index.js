import './index.css'

const WinOrLoseCard = props => {
  const {onClickPlayAgain, score} = props

  return (
    <div className="win-or-lose-card">
      <div className="details-section">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy-img"
        />
        <p>YOUR SCORE</p>
        <h1>{score}</h1>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          <div className="reset-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
            />
            <p>PLAY AGAIN</p>
          </div>
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
