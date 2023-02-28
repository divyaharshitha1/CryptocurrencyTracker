import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = currencyDetails

  return (
    <li className="list-item">
      <div className="logo-name">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <p className="currency-value">{usdValue}</p>
      <p className="currency-value">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
