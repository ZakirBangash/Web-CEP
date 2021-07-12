import React from 'react'
import notFound from './404.svg';

function NotFound() {
    return (
        <div className="not-found">
         <img className="img-404" src={notFound} alt="" />
        </div>
    )
}

export default NotFound;
