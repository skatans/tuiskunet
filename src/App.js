import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import * as Content from './content/content.js'
import './App.css';

let contents = require('./content/content.json');

const Sidebar = (props) => {
  return (
    <div id="sidebar">
      {console.log(props.title)}
      <h1>{props.title}</h1>
        <ul className="sidenav">
          {contents.filter(content => content.nav === "sidebar").map(content => (
            <li className="sidenav" key={content.title}><NavLink to={content.path}>{content.title}</NavLink></li>
          ))}
      </ul>
    </div>
  )
}

const MainPane = (props) => {
  return (
    <div id="mainpane">
      <Router basename={'/tn'}>
        <Sidebar title={props.title} />
          {contents.map(content => (
            <Route exact path={content.path} component={Content[content.component]} key={content.key}/>
          ))}
      </Router>
    </div>
  )
}

const HeaderPane = () => {
  return (
    <div id="headerpane">
      <TitleBar />
      <ActionPane />
    </div>
  )
}

const TitleBar = () => {
  return (
    <div id="titlebar">
      <i id="computer" className ="navicon"></i>
      Tuiskun kotisivut
      <i id="exit" className ="navicon"></i>
      <i id="maximize" className ="navicon"></i>
      <i id="minimize" className ="navicon"></i>
    </div>
  )
}

const ActionPane = () => {
  return (
    <div id="actionpane" className="gray-white">
      <NavigationPane />
      <div id="iconrow" className="white-gray">
        <i className="white-gray"></i>
				<i id="arrows" className="actionimg" href="https://hwxu.kapsi.fi"></i>
				<i id="folder" className="actionimg" href="https://hwxu.kapsi.fi"></i>
				<i className="divider gray-white"></i>
				<i id="sax" className="actionimg" href="http://hwxu.kapsi.fi"></i>
				<i id="copy" className="actionimg"></i>
				<i id="paste" className="actionimg"></i>
				<i className="tikku divider gray-white"></i>
				<i id="back" className="actionimg"></i>
				<i className="tikku divider gray-white"></i>
				<i id="ruksi" className="actionimg"></i>
				<i id="sormi" className="actionimg"></i>
				<i className="tikku divider gray-white"></i>
				<i id="lista" className="actionimg"></i></div>
      <div id="emptyrow" className="actionrow white-gray"></div>
    </div>
  )
}

const NavigationPane = () => {
  return (
    <div id="navigationpane" className="actionrow white-gray">
      <span className="menuitems">File</span> <span className="menuitems">Edit</span>
    </div>
  )
}


const MainWindow = (props) => {
  return (
    <div id="mainwindow">
      <HeaderPane />
      <MainPane title={props.title} />
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ""};  }

  componentDidMount() {
    this.setState({ title: "Tuiskun kotisivut"})
  }

  render() {

  

    return (
      <div className="container">
          <MainWindow title={this.state.title} />
      </div>
    )
  }
}

export default App;
