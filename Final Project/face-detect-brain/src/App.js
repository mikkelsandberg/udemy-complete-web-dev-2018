import React, { Component } from 'react';
import Particles from 'react-particles-js';
import ParticleSettings from './Util/ParticleSettings';
import Navigation from './Components/Navigation/Navigation';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import FaceDetect from './Components/FaceDetect/FaceDetect';
import './App.css';

const initialState = {
	input: '',
	imageUrl: '',
	boundingBox: {},
	route: 'signIn',
	isSignedIn: false,
	user: {
		id: '',
		name: '',
		email: '',
		entries: 0,
		joined: ''
	}
};

class App extends Component {
	constructor() {
		super();

		this.state = initialState;
	}

	onInputChange = e => {
		this.setState({
			input: e.target.value
		});
	};

	loadUser = data => {
		this.setState({
			user: {
				id: data.id,
				name: data.name,
				email: data.email,
				entries: data.entries,
				joined: data.joined
			}
		});
	};

	calcFaceLocation = data => {
		console.log(data);
		const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById('userImage');
		const width = Number(image.width);
		const height = Number(image.height);

		return {
			leftCol: clarifaiFace.left_col * width,
			topRow: clarifaiFace.top_row * height,
			rightCol: width - clarifaiFace.right_col * width,
			bottomRow: height - clarifaiFace.bottom_row * height
		};
	};

	displayFaceBox = boundingBox => {
		this.setState({
			boundingBox: boundingBox
		});
	};

	onPictureSubmit = e => {
		e.preventDefault();

		this.setState({
			imageUrl: this.state.input
		});

		fetch('http://localhost:4000/imageUrl', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				input: this.state.input
			})
		})
			.then(response => response.json())
			.then(response => {
				if (response) {
					fetch('http://localhost:4000/image', {
						method: 'put',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							id: this.state.user.id
						})
					})
						.then(response => response.json())
						.then(count => {
							this.setState({
								user: {
									...this.state.user,
									entries: count
								}
							});
						})
						.catch(console.log);
				}
				this.displayFaceBox(this.calcFaceLocation(response));
			})
			.catch(err => console.log(err));
	};

	onRouteChange = route => {
		if (route === 'signOut') {
			this.setState(initialState);
		} else if (route === 'home') {
			this.setState({
				isSignedIn: true
			});
		}
		this.setState({
			route: route
		});
	};

	render() {
		const { isSignedIn, imageUrl, route, boundingBox } = this.state;
		return (
			<div className="App">
				<Particles className="particles" params={ParticleSettings} />
				<Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
				{route === 'home' ? (
					<div>
						<Logo />
						<Rank name={this.state.user.name} entries={this.state.user.entries} />
						<ImageLinkForm onInputChange={this.onInputChange} onPictureSubmit={this.onPictureSubmit} />
						<FaceDetect boundingBox={boundingBox} imageUrl={imageUrl} />
					</div>
				) : route === 'signIn' || route === 'signOut' ? (
					<SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
				) : (
					<Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
				)}
			</div>
		);
	}
}

export default App;
