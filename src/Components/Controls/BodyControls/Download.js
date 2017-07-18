import React from 'react';
import '../../ControlStyles/BodyControlStyles/Download.css';

class Download extends React.Component {
	constructor (props) {
		super(props);
		this.scrollUp = this.scrollUp.bind(this);
	}
	scrollUp() {
        document.body.scrollTop = 0;
    }
    componentWillMount() {
    	this.scrollUp();
    }
	render () {
		return (
			<div className="container">
				<div id="Download">
					<h1>Download Page coming soon!</h1>
				</div>
			</div>
		)
	}
}
export default Download;