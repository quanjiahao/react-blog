
import React, { Component } from 'react'
import {Globalstyle} from './style.js';
import {GlobalIcon} from './static/iconfont/iconfont';
import Header from './common/header/index';
import store from './store/index'
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail'



export default class App extends Component {
  render() {
    return (
  
        <Provider store ={store}>
          <div>
            <Globalstyle/>
            <GlobalIcon/>
              <Header/>
              <BrowserRouter>
                <div>
                <Route path='/' exact  component={Home}></Route>
                <Route path='/detail'  exact component={Detail}></Route>
                </div>
              </BrowserRouter>
              
          </div>
      </Provider>   
   
    )
  }
}
