import React, { Component } from 'react';

class Scroll extends Component {
	render() {
		return (
			<div style={{ overflowY: 'scroll', border: '1px solid black', height: 'calc(100vh - 190px)' }}>
				{this.props.children}
			</div>
		);
	}
}

export default Scroll;
