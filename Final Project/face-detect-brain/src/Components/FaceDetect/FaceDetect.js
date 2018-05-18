import React from 'react';
import './FaceDetect.css';

const FaceDetect = ({ imageUrl, boundingBox }) => {
	return (
		<div className="center ma">
			<div className="absolute mt2">
				<img id="userImage" src={imageUrl} alt="" />
				<div
					className="boundingBox"
					style={{
						top: boundingBox.topRow,
						right: boundingBox.rightCol,
						bottom: boundingBox.bottomRow,
						left: boundingBox.leftCol
					}}
				/>
			</div>
		</div>
	);
};

export default FaceDetect;
