import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return(
        <div className="header-container">
            <ul>
                <li><Link className="header-title" to='/'>Top</Link></li>
                <li><Link className="header-title" to='/daily'>日報</Link></li>
                <li><Link className="header-title" to='/task'>タスク</Link></li>
            </ul>
        </div>
    )
}