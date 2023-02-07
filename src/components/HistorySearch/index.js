import {Component} from 'react'

import HistoryItem from '../HistoryItem'

import './index.css'

class HistorySearch extends Component {
  state = {
    searchInput: '',
    historyList: [],
  }

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({historyList: initialHistoryList})
  }

  filterHistoryList = () => {
    const {searchInput, historyList} = this.state
    const searchResults = historyList.filter(eachHL =>
      eachHL.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return searchResults
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteList = id => {
    console.log(id)
    const {historyList} = this.state
    const updatedHistoryList = historyList.filter(
      eachHistory => eachHistory.id !== id,
    )

    this.setState({historyList: updatedHistoryList})
  }

  render() {
    const {searchInput} = this.state
    const filteredHistoryList = this.filterHistoryList()

    return (
      <div className="app-container">
        <div className="history-search-container">
          <div className="history-nav">
            <div className="title">
              <img
                src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
                className="app-logo"
                alt="app logo"
              />
            </div>
            <div className="input-container">
              <div className="ip-inner">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search"
                  className="image"
                />
                <input
                  type="search"
                  className="search-container"
                  placeholder="Search history"
                  onChange={this.onChangeSearchInput}
                  value={searchInput}
                />
              </div>
            </div>
          </div>
          {filteredHistoryList.length === 0 ? (
            <p className="no-history">There is no history to show</p>
          ) : (
            <ul className="history-list">
              {filteredHistoryList.map(eachHistory => (
                <HistoryItem
                  onDeleteList={this.onDeleteList}
                  key={eachHistory.id}
                  historyDetails={eachHistory}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default HistorySearch
