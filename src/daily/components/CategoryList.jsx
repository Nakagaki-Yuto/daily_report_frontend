import React from 'react'
import { Link } from 'react-router-dom'

export const CategoryList = () => {
    return(
        <div className="category-list-container">
        <ul>
            <li><Link className="category-title" to='/daily/category/study'>やったこと</Link></li>
            <li><Link className="category-title" to='/daily/category/summary'>気づき</Link></li>
            <li><Link className="category-title" to='/daily/category/other'>その他・備考</Link></li>
        </ul>
        </div>
    )
}