const toJson = async (res) => {
    const json = await res.json();
    if(res.ok){
        return json;
    }else{
        throw new Error(json.message);
    }
}

//日報一覧を取得
export const getDaily = async () =>{
    const res = await fetch('https://dailyreportapp.herokuapp.com/daily/', {
        method: 'GET',
    })
    return await toJson(res);
}

//1日の詳細を取得
export const getDailyDetail = async (id) => {
    const res = await fetch(`https://dailyreportapp.herokuapp.com/daily/${id}`, {
        method : 'GET',
    })
    return await toJson(res);
}

//カテゴリ別一覧を取得
export const getCategory = async (cat) => {
    const res = await fetch(`https://dailyreportapp.herokuapp.com/daily/${cat}`, {
        method: 'GET',
    })
    return await toJson(res)
}


