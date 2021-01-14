import React from 'react'
import marked from 'marked'

export const DailyCategory = (category) => {
    return(
        <div>
            <h1 className="daily-category-date">{category.date}</h1>
            <div className="daily-category-content" dangerouslySetInnerHTML={{ __html: `${marked(`${category.content}`)}` }}></div>
        </div>
    )

}