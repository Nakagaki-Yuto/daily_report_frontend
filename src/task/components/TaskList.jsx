import React from 'react'
import { Link } from 'react-router-dom'

export const TaskList = () => {
    return(
        <div className="task-list-container">
        <ul>
            <li><Link className="task-title" to='/task'>未完了タスク</Link></li>
            <li><Link className="task-title" to='/task/finished'>完了済みタスク</Link></li>
        </ul>
        </div>
    )
}