import React from 'react';
import './Widget.scss';

function Widget({name, icon, bgColor, value, revenue}) {
    return (
        <div className="Card p-2">
            <div className="relative">
                <div className={"iconProvider " + bgColor}>
                    {icon}
                </div>
                <div className="desc">
                    <p className='descParagraph'>{name}</p>
                    <h3 className='descHeader'>{value}</h3>
                </div>
            </div>
            <hr className='Horizontal' />
            <p className='Revenue'><span>{revenue}</span> than lask week</p>
        </div>
    )
}

export default Widget