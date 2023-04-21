import {Component} from 'react'
import NavBar from '../NavBar'
import MatchCard from '../MatchCard'
import TabItem from '../TabItem'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class MatchGame extends Component {
  constructor(props) {
    super(props)
    const {tabsList} = this.props

    this.state = {
      activeTabId: tabsList[0].tabId,
      score: 0,
      counter: 60,
      isGameInProgress: true,
      clickedMatchesList: [],
      ri: 0,
    }
  }

  componentDidMount() {
    this.counterId = setInterval(this.tick, 1000)
  }

  tick = () => {
    this.setState(prevState => ({counter: prevState.counter - 1}))
  }

  resetGame = () => {
    const {tabsList} = this.props
    this.setState({
      activeTabId: tabsList[0].tabId,
      clickedMatchesList: [],
      isGameInProgress: true,
      counter: 60,
      score: 0,
      ri: 0,
    })
  }

  renderScoreCard = () => {
    const {score} = this.state

    return <WinOrLoseCard onClickPlayAgain={this.resetGame} score={score} />
  }

  setActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  getActiveTabApps = imagesList => {
    const {activeTabId} = this.state
    const filteredList = imagesList.filter(
      eachImage => eachImage.category === activeTabId,
    )

    return filteredList
  }

  //   finishGameAndSetTopScore = currentScore => {
  //     const {score} = this.state
  //     let newTopScore = score

  //     if (currentScore > score) {
  //       newTopScore = currentScore
  //     }
  //     this.setState({score: newTopScore, isGameInProgress: false})
  //   }

  clickMatch = id => {
    const {imagesList} = this.props
    const {clickedMatchesList, counter, ri} = this.state
    const isMatchCardPresent = clickedMatchesList.includes(id)
    const clickedMatchesLength = clickedMatchesList.length

    if (isMatchCardPresent) {
      this.setState({isGameInProgress: false})
    } else {
      if (imagesList.length - 1 === clickedMatchesLength) {
        this.setState({isGameInProgress: false})
      }
      if (counter === 0) {
        this.setState({isGameInProgress: false})
      }
      if (imagesList[ri].id !== id) {
        this.setState({isGameInProgress: false})
        this.setState({
          clickedMatchesList: [],
        })
      }

      this.setState(previousState => ({
        clickedMatchesList: [...previousState.clickedMatchesList, id],
      }))
      this.setState({
        ri: Math.ceil(Math.random() * imagesList.length),
        score: clickedMatchesList.length,
      })
    }
  }

  componentDidUnMount() {
    clearInterval(this.counterId)
  }

  renderMatchList = () => {
    const {activeTabId, ri, counter} = this.state
    const {tabsList, imagesList} = this.props
    const filteredList = this.getActiveTabApps(imagesList)
    if (counter === 0) {
      this.setState({isGameInProgress: false})
      this.componentDidUnMount()
    }

    return (
      <div className="individual-images">
        <img src={imagesList[ri].imageUrl} alt="match" className="match-img" />
        <ul className="tabs-list">
          {tabsList.map(tabDetails => (
            <TabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              setActiveTabId={this.setActiveTabId}
              isActive={activeTabId === tabDetails.tabId}
            />
          ))}
        </ul>

        <ul className="thumbnails-list-container">
          {filteredList.map(item => (
            <MatchCard
              key={item.id}
              imageDetails={item}
              clickMatch={this.clickMatch}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {counter, score, isGameInProgress} = this.state
    return (
      <div className="match-container">
        <ul className="nav-list">
          <NavBar
            counter={counter}
            score={score}
            isGameInProgress={isGameInProgress}
          />
        </ul>

        <div className="match-game-body">
          {isGameInProgress ? this.renderMatchList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default MatchGame
