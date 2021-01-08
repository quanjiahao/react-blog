import React, { PureComponent } from 'react'
import {ListItem,ListInfo,LoadMore} from '../style'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
class List extends PureComponent {
    render() {
        const {list ,getMoreList,page} = this.props;
        return (
            <div>
                {
                list.map((item,index)=>{
                    return (
                        <a key={index} href ='/detail'>
                        <ListItem key ={index}>
                            <img className='pic' src={item.get('imgUrl')}></img>
                            <ListInfo>
                                <h3 className='title'>{item.get('title')}</h3>
                                <p className='desc'>{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                         </a>
                    );
                })
                }
                <LoadMore onClick={()=>getMoreList(page)}>More Article</LoadMore>
            </div>
        )
    }
}
const mapState =(state) =>({
    list:state.get('home').get('articleList'),
    page:state.get('home').get('articlePage')
})
const mapDipatch = (dispatch)=>({ 
    getMoreList(page){
        dispatch(actionCreators.getMoreList())
    }
})
export default  connect(mapState,mapDipatch)(List);
