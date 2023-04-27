import {Component} from 'react'
import './index.css'

class TeamMatches extends Component {
  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    // const statusCode = await response.statusCode
    const data = await response.json()
    // const updatedData = teams.map(eachItem => ({
    //   teamBannerUrl: eachItem.team_banner_url,
    //   id: eachItem.id,
    //   imageUrl: eachItem.team_image_url,
    // }))
    // this.setState({TeamsData: formattedData, isLoading: false})
  }

  render() {
    return (
      <div className="team-match-container">
        {/* <img src={imageUrl} alt={`item${id}`} className="team-math-img" /> */}
        <p>latest Matches</p>
        <ul>{}</ul>
      </div>
    )
  }
}

export default TeamMatches
