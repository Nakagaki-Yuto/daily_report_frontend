import React from 'react';
import marked from 'marked';


export const TaskFinishedContent = (task) => {

    return(
        <div className="task-content">
            <h3>完了日：{task.finished_date}</h3>
            <div dangerouslySetInnerHTML={{ __html: `${marked(`${task.task}`)}` }} className="task-list-content"></div>
        </div>
    )
}