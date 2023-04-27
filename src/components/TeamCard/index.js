import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {TeamData} = props
  const {name, imageUrl, id} = TeamData

  return (
    <Link to={`/home/${id}`} className="item-link">
      <div className="item-container">
        <img src={imageUrl} className="item-image" alt={`item${id}`} />
        <p className="item-heading">{name}</p>
      </div>
    </Link>
  )
}

export default TeamCard
