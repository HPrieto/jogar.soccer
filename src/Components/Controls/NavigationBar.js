import React from 'react';
import '../ControlStyles/NavigationBar.css';

class NavigationBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: true,
			directory: 0,
			navBtns: []
		};
		this.hamburgerClicked = this.hamburgerClicked.bind(this);
		this.createNavButtons = this.createNavButtons.bind(this);
		this.navButtonClicked = this.navButtonClicked.bind(this);
		this.resetDirectory	  = this.resetDirectory.bind(this);
	}
	componentWillMount() {
		this.setState({directory:this.props.directory,navBtns:this.createNavButtons(this.props.directory,this.props.buttons)});
	}
	render() {
		return (
			<div className="navbar navbar-fixed-top jogarnav" role="navigation">
				<div className="btn-container">
					<div className="navbar-header">
		            	<div className={(this.state.open)?"navbar-toggle":"navbar-toggle open"} data-toggle="collapse"
		            		data-target="#collapse-nav" id="hamburger" onClick={this.hamburgerClicked}>
		            		<span className=""></span>
		            		<span className=""></span>
		            		<span className=""></span>
		            	</div>
	        		</div>
		        	<div className="navbar-collapse collapse"
		        		 id="collapse-nav">
						<div className="nav navbar-nav">
							{ this.state.navBtns }
						</div>
					</div>
				</div>
			</div>
		);
	}
	componentWillReceiveProps(nextProps) {
		this.resetDirectory(this.props.links[nextProps.directory].name);
	}
	/* Dynamically Creates Navigation Buttons and Sets them in State */
	createNavButtons(index) {
		return this.props.buttons.map((button) =>
			<button key={button.name} 
					className={(button.index === index)?
								"btn NavigationButton home-btn":"btn NavigationButton nav-btn"}
					onClick={() => this.navButtonClicked(button.index,button.name)}>
				{button.name}
			</button>
		);
	}
	/* Handle NavigationBar State On Navigation Button Click */
	navButtonClicked(index,name) {
		this.setState({directory:index,navBtns:this.createNavButtons(index)});
		this.props.setAppDirectory(index);
	}
	/* Set Directory according to URL Pathname */
	resetDirectory(pathName) {
		for (var i = 0; i < this.props.links.length; i++) {
			if (this.props.links[i].name.toUpperCase() === pathName.toUpperCase()) {
				this.setState({directory:i,navBtns:this.createNavButtons(i)});
				break;
			}
		}
	}
	/* Animate Mobile Navigation Hamburger Click State*/
	hamburgerClicked () {
		this.setState({open:(this.state.open)?false:true});
	}
}
export default NavigationBar;