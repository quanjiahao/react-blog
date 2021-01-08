import axios from 'axios'
import * as constants from './constants';
import {fromJS} from 'immutable'; 


const changeHomeData =(result)=>({
    type:constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList:result.articleList,
    recommendList:result.recommendList 
})
const addHomeList = (list,nextpage)=>({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextpage :nextpage
})
export const toppleTopShow=(show)=>({
    type:constants.TOGGLE_SCROLL_TOP, 
    show
} )

export const getHomeInfor = (page)=>{
    return (dispatch)=>{
        axios.get('/api/home.json?page='+page).then((res) =>{
            const result = res.data.data;
            const action=changeHomeData(result,page+1);
            dispatch(action);
        })
    }
}
export const getMoreList=()=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json').then((res) =>{
            const result = res.data.data;
            dispatch(addHomeList(result));
        })
    }
}

