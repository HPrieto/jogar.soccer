import React from 'react';
import './App.css';
import NavigationBar from './Components/Controls/NavigationBar.js';
import Footer from './Components/Controls/Footer.js';
import Home from './Components/Controls/BodyControls/Home.js';
import News from './Components/Controls/BodyControls/News.js';
import Privacy from './Components/Controls/BodyControls/Privacy.js';
import Terms from './Components/Controls/BodyControls/Terms.js';
import Download from './Components/Controls/BodyControls/Download.js';

const navButtons = [
	{name: 'Home',
	 index: 0},
	{name: 'News',
	 index: 1},
	{name: 'Privacy Policy',
	 index: 2},
	{name: 'Terms of Service',
	 index: 3},
	{name: 'Download',
	 index: 4}];

const footerButtons = [
	{name: 'News',
	 index: 1},
	{name: 'Privacy Policy',
	 index: 2},
	{name: 'Terms of Service',
	 index: 3},
	{name: 'Download',
	 index: 4}];

const buttonLinks = [
	{name: '/Home'},
	{name: '/News'},
	{name: '/Privacy'},
	{name: '/Terms'},
	{name: '/Download'}];

const footerLinks = [
	{name: '/News'},
	{name: '/Privacy'},
	{name: '/Terms'},
	{name: '/Download'}];

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			directory: 0,
			body:<Home/>,
			navBar:undefined
		}
		this.setAppDirectory = this.setAppDirectory.bind(this);
		this.getDirectory	 = this.getDirectory.bind(this);
	}
	componentWillMount() {
	}
	render() {
		return (
			<div className="App">
				{this.state.body}
				{this.state.navBar}
			</div>
		);
	}
	componentDidMount() {
		this.setAppDirectory(this.getDirectory(this.props.location.pathname));
	}
	/* Returns Directory index value, if none matched, returns -1 */
	getDirectory(pathname) {
		for (var i = 0; i < buttonLinks.length; i++) {
			if (buttonLinks[i].name.toUpperCase() == pathname.toUpperCase()) {
				return i;
			}
		}
		return 0;
	}
	setAppDirectory(index) {
		this.setState({directory:index,body:(index===1)?<News />:
											(index===2)?<Privacy/>:
											(index===3)?<Terms/>:
											(index===4)?<Download/>:<Home/>});
		this.setState({navBar:(index===0) ?	<Footer directory={index} 
													links={footerLinks} 
													buttons={footerButtons} 
													setAppDirectory={this.setAppDirectory}/>:
											<NavigationBar directory={index} 
													links={buttonLinks} 
													buttons={navButtons} 
													setAppDirectory={this.setAppDirectory}/>})
		this.props.history.push(buttonLinks[index].name);
	}
}
export default App;

/*
Things to note:
	- React-Router
	- PureRenderMixin
	- WebPack
*/