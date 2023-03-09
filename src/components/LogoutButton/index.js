// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = () => {
  const onClickLogout = props => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="btn">
      <button className="button" type="button" onClick={onClickLogout}>
        Logout
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)
