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
          {contents.filter(content => content.nav === "sidebar" && content.visible).map(content => (
            <li className="sidenav" key={content.title}><NavLink to={content.path}>{content.title}</NavLink></li>
          ))}
      </ul>
    </div>
  )
}

const MainPane = (props) => {
  return (
    <div id="mainpane">
        <div className="d-none d-md-block">
          <Sidebar title={props.title} />
        </div>
          {contents.filter(content => content.visible).map(content => (
            <Route exact path={content.path} component={Content[content.component]} key={content.key}/>
          ))}
    </div>
  )
}

const HeaderPane = () => {
  return (
    <div id="headerpane" style={{width: "100%", paddingLeft: "1px", paddingRight: "1px"}}>
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
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div id="navigationpane" className="actionrow white-gray">
      <div className="d-none d-md-none">
        <span className="menuitems">File</span> <span className="menuitems">Edit</span>
      </div>
      <div className="d-block d-md-block text-dark">
      {contents.filter(content => content.nav === "sidebar" && content.visible).map(content => (
            <span className="menuitems" key={content.title}><NavLink to={content.path}>{capitalizeFirstLetter(content.title)}</NavLink></span>
          ))}
      </div>
    </div>
  )
}


const MainWindow = (props) => {
  return (
    <div id="mainwindow" className='m-2' style={{maxWidth: '100%', position: "relative", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>  
    <Router basename={'/tn'}>
      <HeaderPane />
      <MainPane title={props.title} />
      </Router>
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
      <div className="container" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', height: '100vh', overflow: 'visible', position: 'relative' }}>
        <MainWindow title={this.state.title} />
      </div>
    )
  }
}

export default App;
