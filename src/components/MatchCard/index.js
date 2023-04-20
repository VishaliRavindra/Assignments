import './index.css'

const MatchCard = props => {
  const {imageDetails, clickMatch} = props
  const {id, thumbnailUrl} = imageDetails

  const onClickMatchCard = () => {
    clickMatch(id)
  }

  return (
    <li className="match-item">
      <button type="button" className="match-btn" onClick={onClickMatchCard}>
        <img className="match-icon" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default MatchCard
