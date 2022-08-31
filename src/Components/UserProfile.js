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
          <button className={status === 'dailyActive' ? 'dailyActive' : ''}
           onClick={()=>statusHandler('dailyActive')}>Daily</button>
          <button className={status === 'monthlyActive' ? 'monthlyActive' : ''}
          onClick={()=>statusHandler('monthlyActive')}>Monthly</button>
          <button className={status === 'weeklyActive' ? 'weeklyActive' : ''}
          onClick={()=>statusHandler('weeklyActive')}>Weekly</button>
        </div>
        </div>
     );
}
 
export default UserProfile;