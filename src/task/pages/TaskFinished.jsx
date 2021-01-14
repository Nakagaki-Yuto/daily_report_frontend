import React, { useState, useEffect } from 'react'
import { getTaskFinished } from '../api/getTask'
import { TaskFinishedContent } from '../components/TaskFinishedContent'
import { TaskList } from '../components/TaskList'


export const TaskFinished = () => {
    const initialState = {
        task: '',
        priority: 0,
        finished_date: '',
    }

    const[task, setTask] = useState(initialState);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        getTaskFinished()
        .then(t => {
            setTask(t)
            setLoading(false)
        })
        .catch(e => {
            throw new Error(e)
        })
    },[])

    return(
        <div className="task-top">
            <TaskList />
            {
                loading ?
                <h1 className="loading">loading...</h1>
                :
                <div className="task-view-container">
                    <h1 className="task-top-title">完了済みタスク</h1>
                    <div className="finished-tasks">
                    {task.map(t => <TaskFinishedContent {...t} />)}
                    </div>
                </div>
            }
        </div>
    )

}