import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import './App.css';

import { setSearchField } from '../actions';

const mapStateToProps = state => {
	return {
		searchTerm: state.searchTerm
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: e => dispatch(setSearchField(e.target.value))
	};
};

class App extends Component {
	constructor() {
		super();

		this.state = {
			robots: []
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
	}

	render() {
		const { robots } = this.state;
		const { searchTerm, onSearchChange } = this.props;

		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchTerm.toLowerCase());
		});

		return (
			<div className="tc">
				<h1 className="f1">{!robots.length ? 'Loading' : 'RoboFriends'}</h1>
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots} />
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
