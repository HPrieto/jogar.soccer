import React from 'react';
import '../../ControlStyles/BodyControlStyles/Home.css';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.scrollUp   = this.scrollUp.bind(this);
		this.scrollDown = this.scrollDown.bind(this);
	}
    componentWillMount() {
    	this.scrollUp();
    }
	render() {
		return (
			<div id="home-container">
				<div className="Home">
					<div className="jogar-globe"/>
					<p id="mission">Never go another day without playing the beautiful game.</p>
					<div id="up-arrow" onClick={this.scrollDown}/>
				</div>
			</div>
		)
	}
	scrollDown() {
		// window.scrollTo(0, document.body.scrollHeight);
		console.log('Scroll Down');
	}
	scrollUp() {
        document.body.scrollTop = 0;
    }
}

export default Home;