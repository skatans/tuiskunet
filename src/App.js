import './App.css';

const SidebarContent = () => {
  return (
    <ul>
      <li>
        asd
      </li>
      <li>
        asfas
      </li>
    </ul>
  )
}

const Sidebar = () => {
  return (
    <div id="sidebar">
      <h1>Tuiskun kotisivut</h1>
      <SidebarContent />
    </div>
  )
}

const MainPane = () => {
  return (
    <div id="mainpane">
      <Sidebar />
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


const MainWindow = () => {
  return (
    <div id="mainwindow">
      <HeaderPane />
      <MainPane />
    </div>
  )
}

const App = () => {
  return (
    <div className="container">
        <MainWindow />
    </div>
  )
}

export default App;
