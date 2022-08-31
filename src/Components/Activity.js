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
                            <h2>{track.timeframes[status].current}
                             hrs</h2>
                            <p >{status === 'daily' ? 'Yesterday - ' : 
                                status === 'monthly' ? 'Last Week - ' : 
                                status === 'weekly' ? 'Last Month - ' : ''}
                               {track.timeframes[status].previous} hrs</p>
                          </div>
                        </div>
                      </div>
            })}
        </>
     );
}
 
export default Activity;