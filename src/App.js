/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';

import bg from './images/dark-background.jpg';

const App = () => (
	<Box
		sx={ { width: { xl: '1488px' } }}
		position='relative'
		m="auto"
	>
		<Navbar />
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/project/:id' element={<ProjectDetails />} />
		</Routes>
		<Footer />
	</Box>
);

export default App;
