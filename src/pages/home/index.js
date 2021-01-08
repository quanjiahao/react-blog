import React, { PureComponent } from 'react'
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import {actionCreators} from './store';
import{connect} from 'react-redux';
class Home extends PureComponent {
    handleScroll(){
        window.scroll(0,0);
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img'  src='https://neilpatel.com/wp-content/uploads/2018/10/blog.jpg'></img>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {this.props.showScroll?  <BackTop onClick={this.handleScroll}>
                   BackTop 
                </BackTop>: null}
               
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }

}
const mapSatate=(state)=>({
    showScroll:state.get('home').get('showScroll')
})
const mapDispatch = (dispatch)=>({
    changeHomeData(){
        const action = actionCreators.getHomeInfor();
        dispatch(action);
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop > 100){
            dispatch(actionCreators.toppleTopShow(true))
        }else{
            dispatch(actionCreators.toppleTopShow(false))
        }
    }
})
export default connect(mapSatate,mapDispatch)(Home);