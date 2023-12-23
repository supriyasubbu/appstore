// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="apps-list-container">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="name">{appName}</p>
    </li>
  )
}
export default AppItem
