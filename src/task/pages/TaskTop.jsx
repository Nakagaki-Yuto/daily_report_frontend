import React, { useState, useEffect } from 'react'
import { getTask } from '../api/getTask'
import { TaskContent } from '../components/TaskContent'
import { TaskList } from '../components/TaskList'

export const TaskTop = () => {
    const initialState = {
        task: '',
        priority: 0,   
    }

    const[task, setTask] = useState(initialState);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        getTask()
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
                    <h1 className="task-top-title">未完了タスク</h1>
                    <div className="tasks">
                    {task.map(t => <TaskContent {...t} />)}
                    </div>
                </div>
            }
        </div>
    )

}