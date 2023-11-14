import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const useResize = (myRef, windowWidth) => {
	const [width, setWidth] = useState(windowWidth);

	useEffect(() => {
		const handleResize = () => {
			setWidth(myRef.current.offsetWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [myRef]);

	return { width };
};

useResize.propTypes = {
	myRef: PropTypes.object,
	windowWidth: PropTypes.number
};
