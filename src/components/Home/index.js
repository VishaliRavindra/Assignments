import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoading: true, TeamsData: []}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    // const statusCode = await response.statusCode
    const data = await response.json()
    const {teams} = data
    const formattedData = teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      imageUrl: eachItem.team_image_url,
    }))
    this.setState({TeamsData: formattedData, isLoading: false})
  }

  render() {
    const {TeamsData, isLoading} = this.state
    return (
      <div className="ipl-container">
        <div className="logo-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo-img"
          />
          <h1 className="ipl-heading">IPL DashBoard</h1>
        </div>
        {isLoading ? (
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={50}
            width={50}
            testid="loader"
          />
        ) : (
          <ul className="team-container">
            {TeamsData.map(item => (
              <TeamCard TeamData={item} key={item.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
