import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteList} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails
  const onDelete = () => {
    onDeleteList(id)
  }

  return (
    <div className="history-item-container">
      <li className="history-item">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="history-image" />
        <p className="name">{title}</p>
        <p className="name">{domainUrl}</p>
        <button
          type="button"
          className="delete-button"
          data-testid="delete"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </li>
    </div>
  )
}

export default HistoryItem
