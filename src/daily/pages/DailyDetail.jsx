import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getDailyDetail } from '../api/getDaily';
import marked from 'marked';
import { CategoryList } from '../components/CategoryList'


export const DailyDetail = () => {
    const initialState = {
        date: '',
        study: '',
        summary: '',
        other: '',
    }

    const [detail, setDetail] = useState(initialState)
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(()=>{
        getDailyDetail(id)
        .then(d => {
            setDetail(d)
            setLoading(false)
        })
        .catch(e => {
            throw new Error(e)
        })
    },[])

    return(
        <div className="daily-detail">
            {
                loading ?
                <h1 className="loading">loading....</h1>
                :
                <div className="daily-detail-container">
                    <h1 className="daily-detail-date">{detail.date}</h1>
                    <h1 className="daily-detail-category">やったこと</h1>
                    <div dangerouslySetInnerHTML={{ __html: `${marked(`${detail.study}`)}` }} className="daily-detail-content"></div>
                    <h1 className="daily-detail-category">気付き</h1>
                    <div dangerouslySetInnerHTML={{ __html: `${marked(`${detail.summary}`)}` }} className="daily-detail-content"></div>
                    <h1 className="daily-detail-category">その他・備考</h1>
                    <div dangerouslySetInnerHTML={{ __html: `${marked(`${detail.other}`)}` }} className="daily-detail-content"></div>
                </div>
            }
            <div className="daily-top-back"><Link className="daily-top-btn" to='/daily'>戻る</Link></div>
        </div>
    )

}