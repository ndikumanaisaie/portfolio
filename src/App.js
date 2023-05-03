/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';
import NavMenu from './components/NavMenu.jsx';

const App = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<Box
			sx={ { width: { xl: '1488px' } }}
			position='relative'
			m="auto"
			minHeight="100vh"
		>
			<NavMenu />
			{/* <Navbar /> */}
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/project/:id' element={<ProjectDetails />} />
			</Routes>
			<Footer />
			<ToastContainer />
		</Box>
	);
};
export default App;
