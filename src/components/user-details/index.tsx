import React from 'react';
import './style.scss';

interface Props {
    data: any;
}
const userDetails:React.FC<Props> = ({data})=> {
    return (
        <div className="card">
            <div className="card__photo-wrap">
                <img className='card__photo' src={data.photo} alt=""/>
            </div>
            <div className='card__details-wrap'>
                <div className="card__name">
                    {data.name}
                </div>
                <div className='card__position'>
                    {data.position}
                </div>
                <div className='card__email'>
                    {data.email}
                </div>
                <div>
                    {data.phone}
                </div>
            </div>
        </div>
    );
}

export default userDetails;
