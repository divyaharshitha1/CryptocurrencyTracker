import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {currenciesList: [], isLoading: false}

  componentDidMount() {
    this.getCurrencyDetails()
  }

  getCurrencyDetails = async () => {
    const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'
    const response = await fetch(apiUrl)
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
    }))
    this.setState({currenciesList: updatedData, isLoading: true})
  }

  render() {
    const {currenciesList, isLoading} = this.state
    return (
      <>
        <div className="responsive-container">
          {isLoading ? (
            <>
              <h1 className="responsive-heading">Cryptocurrency Tracker</h1>
              <img
                src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
                alt="cryptocurrency"
                className="responsive-bg-img"
              />
              <div className="currency-list-container">
                <div className="currency-headline-container">
                  <p className="coin-type">Coin Type</p>
                  <p className="coin-type">USD</p>
                  <p className="coin-type">EURO</p>
                </div>
                <ul className="currency-list">
                  {currenciesList.map(eachItem => (
                    <CryptocurrencyItem
                      currencyDetails={eachItem}
                      key={eachItem.id}
                    />
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div data-testid="loader" className="loader-container">
              <Loader type="Rings" color="#ffffff" height={80} width={80} />
            </div>
          )}
        </div>
      </>
    )
  }
}

export default CryptocurrenciesList
