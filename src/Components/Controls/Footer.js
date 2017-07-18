import React from 'react';
import '../ControlStyles/Footer.css';

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open:false,
			directory:0,
			footerBtns:[]
		}
		this.createFooterButtons = this.createFooterButtons.bind(this);
		this.footerButtonClicked = this.footerButtonClicked.bind(this);
	}
	componentWillMount() {
		this.setState({footerBtns:this.createFooterButtons(this.state.directory)});
	}
	render() {
		return (
			<div id="footer">
        		<nav className="navbar" role="navigation">
            		<div className="collapsed navbar-collapse" id="footer-collapse">
                		<ul className="nav navbar-nav">
                			{this.state.footerBtns}
                		</ul>
                	</div>
        		</nav>
    		</div>
		)
	}
	/* Handle Footer Button Click Event */
	footerButtonClicked(index) {
		this.props.setAppDirectory(index);
	}
	/* Dynamically Creates Footer Buttons and Sets them in State */
	createFooterButtons(index) {
		return this.props.buttons.map((button) =>
			<button key={button.name} className={(this.props.buttons[index].name.toUpperCase() === button.name.toUpperCase())?"btn FooterButton home-footer-btn":"btn FooterButton nav-footer-btn"}
					onClick={() => this.footerButtonClicked(button.index)}>
				{button.name}
			</button>
		);
	}
}

export default Footer;