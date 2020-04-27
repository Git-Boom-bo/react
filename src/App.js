import React, { Component } from 'react'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'

import About from './components/about/about'
import Home from './components/home/home'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}
              {/* a标签换成NavLink或者Link       href换成to*/}
              <NavLink className="list-group-item"  to="/about">About</NavLink>
              <NavLink className="list-group-item"  to="home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 定义规则：路由和组件的对应关系 */}
                {/* switch匹配到就不往下匹配了属于一个严格模式 */}
                <Switch>
                  <Route path="/about" component={About}/>
                  <Route path="/home" component={Home}/>
                  <Redirect to="/about"/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  
    )
  }
}
