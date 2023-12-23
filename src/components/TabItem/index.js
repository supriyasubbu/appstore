// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const activeClassName = isActive ? 'tab-btn active' : 'tab-btn'

  const onClickTab = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="list-tab-container">
      <button className={activeClassName} type="button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
