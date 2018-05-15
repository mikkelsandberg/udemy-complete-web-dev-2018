import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			robots: [],
			searchTerm: ''
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
	}

	onSearchChange = e => {
		this.setState({
			searchTerm: e.target.value
		});
	};

	render() {
		const { robots, searchTerm } = this.state;

		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchTerm.toLowerCase());
		});

		return (
			<div className="tc">
				<h1 className="f1">{!robots.length ? 'Loading' : 'RoboFriends'}</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}
}

export default App;
