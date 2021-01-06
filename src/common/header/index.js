import React, { Component } from 'react';
import{CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	SearchWrapper,
	SearchInfoTitle,
	SearchInfor,
	SearchInfoSwitch,
	SeachInfoItem,
	SearchInfoList
} from './style';
import  {actionCreators} from './store';


class Header extends Component {

	getListArea(){
		const pageList =[];
		const{focused,list,page,handleMouseEnter,handleMouseLeave,mouseIn,totalPage,handleChangePage} = this.props;
		const  newList = list.toJS();
		if(newList.length){
			for (let i = (page-1)*10; i < page * 10; i++) {
				pageList.push(<SeachInfoItem key={newList[i]}> {newList[i]}</SeachInfoItem>) 
				
			}
		}
		
		if (focused || mouseIn){
			return (
				<SearchInfor onMouseEnter = {handleMouseEnter} onMouseLeave={handleMouseLeave} >
							<SearchInfoTitle>
								popular search
								<SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage)}>
								<span  className="iconfont spin">&#xe606;</span>
								change
								</SearchInfoSwitch>
							</SearchInfoTitle>
							<SearchInfoList>
								{pageList}	
							</SearchInfoList>
				</SearchInfor>
			)
		}else{
			return null;
		}	
	}
	render() {
		const {focused,handleInputFocus,handleInputBlur,list} = this.props;
		return (
			<HeaderWrapper>
				<Logo href='/'/> 
				<Nav>
					<NavItem className = 'left active'>HomePage</NavItem>
					<NavItem className = 'left'>DownLoad</NavItem>
					<NavItem className = 'right'>LogIn</NavItem>
					<NavItem className = 'right'>
						<span className="iconfont">&#xe636;</span>
					</NavItem>

					<SearchWrapper>
						<CSSTransition  in={focused} timeout={200} 
						classNames="slide" >
							<NavSearch 
								placeholder='search' 
								className={focused?'focused':''}
								onFocus ={()=>handleInputFocus(list)}
								onBlur ={handleInputBlur}>
							</NavSearch>
						</CSSTransition>
						<span className={focused?'focused iconfont zoom':'iconfont zoom'}>
							&#xe77d;
						</span>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className='reg'>
						Register
					</Button>
					<Button className='writing'> 
						<span className="iconfont">&#xe67e;</span>
						NewBlog
					</Button>
				</Addition>
			</HeaderWrapper>  
			 
		)
	}


}
const mapStateToProps =(state)=>{
	 return {
		focused :state.get('header').get('focused'),
		list: state.get('header').get('list'),
		page: state.get('header').get('page'),
		mouseIn:state.get('header').get('mouseIn'),
		totalPage:state.get('header').get('totalPage'),
	 }
}
const mapDispatchToProps=(dispatch)=>{
	return {
		handleInputFocus(list){
			if(list.size ===0){
			dispatch(actionCreators.getlist());
			}
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur(){
			dispatch(actionCreators.searchBlur());		
		},
		handleMouseEnter(){
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave(){
			dispatch(actionCreators.mouseLeave())
		},
		handleChangePage(page,totalPage){
			if(page < totalPage){
				dispatch(actionCreators.changePage(page+1))	
			}else{
				dispatch(actionCreators.changePage(1))
			}
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);