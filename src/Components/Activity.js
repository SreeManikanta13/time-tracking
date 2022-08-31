import React from 'react';
import Ellipsis from '../images/icon-ellipsis.svg'

const Activity = ({trackData,  status}) => {
    return ( 
        <>
            {/* Activities info */}
            {trackData.map((track) =>{
              return <div className= {` activityWrapper ${track.title}`} key={track.title}>
                        <div className='activityImageWrapper'>
                          <div className="bgImage"></div>
                        </div>
                        <div className="activityInfo">
                          <img className="ellipsisImage" src={Ellipsis} alt={Ellipsis} />
                          <h4>{track.title}</h4>
                          <div className='activityCard'>
                            <h2>{status === 'dailyActive' ?  track.timeframes.daily.current :
                                status === 'monthlyActive' ?  track.timeframes.monthly.current :
                                status === 'weeklyActive' ?  track.timeframes.weekly.current : ''}
                             hrs</h2>
                            <p >{status === 'dailyActive' ? 'Yesterday - ' : 
                                status === 'monthlyActive' ? 'Last Week - ' : 
                                status === 'weeklyActive' ? 'Last month - ' : ''}
                               {status === 'dailyActive' ?  track.timeframes.daily.previous :
                                status === 'monthlyActive' ?  track.timeframes.monthly.previous :
                                status === 'weeklyActive' ?  track.timeframes.weekly.previous : ''} hrs</p>
                          </div>
                        </div>
                      </div>
            })}
        </>
     );
}
 
export default Activity;