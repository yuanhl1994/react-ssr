import React from 'react';
// 从 react-router-dom 引入基础组件
import { NavLink, Switch, Route } from 'react-router-dom';

// 引入皇冠赌场的页面
import Home from './Home.jsx';
import Zhuapai from './Zhuapai.jsx';
import Kanpai from './Kanpai.jsx';
import Xipai from './Xipai.jsx';
import Mapai from './Mapai.jsx';
import Header from './Header.jsx';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ssr-show">
        <h1>欢迎来到澳门皇冠赌场</h1>

        {/* <NavLink to="/">首页</NavLink>
        <NavLink to="/Zhuapai">抓牌</NavLink>
        <NavLink to="/Kanpai">看牌</NavLink>
        <NavLink to="/Xipai">洗牌</NavLink>
        <NavLink to="/Mapai">码牌</NavLink> */}
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Zhuapai" exact component={Zhuapai} />
          <Route path="/Kanpai" exact component={Kanpai} />
          <Route path="/Xipai" exact component={Xipai} />
          <Route path="/Mapai" exact component={Mapai} />
        </Switch>
      </div>
    );
  }
}
