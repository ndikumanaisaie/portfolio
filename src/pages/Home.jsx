/* eslint-disable no-unused-vars */
import React from 'react';

import { Box } from '@mui/material';

import Technologies from '../components/Technologies.jsx';
import Projects from '../components/Projects.jsx';
import HeroBanner from '../components/HeroBanner.jsx';
import Achievements from '../components/Achievements.jsx';
import HorizontalRule from '../components/HorizontalRule.jsx';
import Timeline from '../components/Timeline.jsx';
import About from '../components/About.jsx';
import BgAnimation from '../constants/animation.js';
import ContactForm from '../components/ContactForm.jsx';

const Home = () => (
	<Box className="home-container" id="home">
		<HeroBanner />
		<BgAnimation />
		<HorizontalRule />
		<Projects />
		<HorizontalRule />
		<Technologies />
		<HorizontalRule />
		<About />
		<Timeline />
		<Achievements />
		<HorizontalRule />
		<ContactForm />
	</Box>
);

export default Home;