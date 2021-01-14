const toJson = async (res) => {
    const json = await res.json();
    if(res.ok){
        return json;
    }else{
        throw new Error(json.message);
    }
}

//未完タスク一覧を取得
export const getTask = async () =>{
    const res = await fetch('http://dailyreportapp.herokuapp.com/task/', {
        method: 'GET',
    })
    return await toJson(res);
}

//完了タスク一覧を取得
export const getTaskFinished = async () =>{
    const res = await fetch('http://dailyreportapp.herokuapp.com/task/finished/', {
        method: 'GET',
    })
    return await toJson(res);
}