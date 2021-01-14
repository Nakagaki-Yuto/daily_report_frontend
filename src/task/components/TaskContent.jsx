import React from 'react';
import marked from 'marked';


export const TaskContent = (task) => {

    return(
        <div className="task-content">
            <h3>優先度：{task.priority}</h3>
            <div dangerouslySetInnerHTML={{ __html: `${marked(`${task.task}`)}` }} className="task-list-content"></div>
        </div>
    )
}