import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { getCategory } from '../api/getDaily'
import { DailyCategory } from '../components/DailyCategory'
import { CategoryList } from '../components/CategoryList'

export const CategoryView = () => {

    const initialState = {
        date: '',
    }

    const [category, setCategory] = useState(initialState)
    const [loading, setLoading] = useState(true)
    const { cat } = useParams();


    useEffect(()=>{
        getCategory(cat)
        .then(c =>{
            setCategory(c)
            setLoading(false)
        })
        .catch(e => {
            throw new Error(e)
        })
    },[cat])

    let title;

    if (cat === "study") {
        title = "やったこと";
    } else if (cat === "summary") {
        title = "気付き";
    } else {
        title = "その他・備考";
    }

    return(
        <div className="category-view">
        <CategoryList />
        {
            loading ?
            <h1 className="loading">loading....</h1>
            :
            <div className="category-view-container">
                <h1 className="category-view-title">{title}</h1>
                { category.map(c => <DailyCategory {...c}  />) }
            </div>
            }
            <div className="daily-top-back"><Link className="daily-top-btn" to='/daily'>戻る</Link></div>
        </div>
    )
}