/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { Box } from '@mui/material';

import Technologies from '../components/Technologies.jsx';
import Projects from '../components/Projects.jsx';
import HeroBanner from '../components/HeroBanner.jsx';
import Achievements from '../components/Achievements.jsx';
import HorizontalRule from '../components/HorizontalRule.jsx';
import Timeline from '../components/Timeline.jsx';
import About from '../components/About.jsx';

const Home = () => {
	const [bodyPart, setBodyPart] = useState('all');
	const [exercises, setExercises] = useState([]);

	return (
		<Box>
			<HeroBanner />
			<HorizontalRule />
			<Projects />
			<HorizontalRule />
			<Technologies />
			<HorizontalRule />
			<About />
			<Timeline />
			<HorizontalRule />
			<Achievements />
		</Box>
	);
};

export default Home;