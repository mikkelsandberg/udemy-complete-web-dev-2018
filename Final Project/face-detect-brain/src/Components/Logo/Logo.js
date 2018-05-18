import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import Icon from './brain-icon.png';

const Logo = () => {
	return (
		<div className="ma4 mt0">
			<Tilt className="Tilt br2 shadow-2" options={{ max: 50 }}>
				<div className="Tilt-inner">
					<img src={Icon} alt="brain icon" />
				</div>
			</Tilt>
		</div>
	);
};

export default Logo;
