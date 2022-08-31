import userImage from '../images/image-jeremy.png';

const UserProfile = ({ status, statusHandler}) => {
  
    return ( 
        <div className="userProfile">
           <div className="userInfo">
            <img src={userImage} alt="user-profile" />
            <div className="userInfo-text">
              <p>Report for</p>
              <h1>Jeremy Robinson</h1>
            </div>
        </div>
        <div className="userActivity"> {/* user activity */}
          <button className={status === 'daily' ? 'daily' : ''}
           onClick={()=>statusHandler('daily')}>Daily</button>
          <button className={status === 'monthly' ? 'monthly' : ''}
          onClick={()=>statusHandler('monthly')}>Monthly</button>
          <button className={status === 'weekly' ? 'weekly' : ''}
          onClick={()=>statusHandler('weekly')}>Weekly</button>
        </div>
        </div>
     );
}
 
export default UserProfile;