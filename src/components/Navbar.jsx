/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Stack, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { MdDehaze } from 'react-icons/md';
import Burger from './burger-menu/Burger.jsx';
import StyledMenu from './burger-menu/StyledMenu.js';

const Navbar = () => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [screenSize, setScreenSize] = useState(null);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (screenSize < 768) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize]);

	return (
		<Box
			className="menu"
		>
			<Link to="/" style={{ textDecoration: 'none', color: '#164e87' }}>
				<Box
					sx={{
						display: 'flex',
						direction: 'row',
						alignItems: 'center',
						color: '#164e87',
						fontSize: '24px',
						textDecoration: 'none',
					}}
				>
					<DiCssdeck size="3rem" /> <span>Portfolio</span>
				</Box>
			</Link>
			<div
				className="menu-control-container"
			>
				<Burger open={open} setOpen={setOpen} />
				{/* <MdDehaze /> */}
			</div>
			{
				activeMenu ? (
					<Box className='menu-item-container'>
						<Box
							className="portfolio-container"
							marginTop="0.8rem"
						>
							<Link
								to="/"
								className='menu-item'
								style={{ textDecoration: 'none', color: '#164e87', borderBottom: '3px solid #3d90e3' }}
							>
          			Projects
							</Link>
							<a
								href='#exercises'
								className='menu-item'
								style={{ textDecoration: 'none', color: '#3d90e3' }}
							>
          			Technologies
							</a>
							<a
								href='#about'
								className='menu-item'
								style={{ textDecoration: 'none', color: '#3d90e3' }}
							>
          			About
							</a>
						</Box>

						<Stack
							direction="row"
							gap="40px"
							fontSize="24px"
							alignItems="flex-end"
							marginTop="0.2rem"
						>
							<a
								className="social-icon"
								href='#exercises'
							>
								<AiFillGithub size="2rem" />
							</a>
							<a
								className="social-icon"
								href='#exercises'
							>
								<AiFillLinkedin size="2rem" />
							</a>
							<a
								className="social-icon"
								href='#about'
							>
								<AiFillInstagram size="2rem"/>
							</a>
						</Stack>
					</Box>
				) : (
					<StyledMenu open={open}>
						<Box>
							<Box
								className="portfolio-container"
								marginTop="0.8rem"
							>
								<Link
									to="/"
									className='menu-item'
									style={{ textDecoration: 'none', color: '#164e87', borderBottom: '3px solid #3d90e3' }}
								>
          			Projects
								</Link>
								<a
									href='#exercises'
									className='menu-item'
									style={{ textDecoration: 'none', color: '#3d90e3' }}
								>
          			Technologies
								</a>
								<a
									href='#about'
									className='menu-item'
									style={{ textDecoration: 'none', color: '#3d90e3' }}
								>
          			About
								</a>
							</Box>

							<Stack
								direction="row"
								gap="40px"
								fontSize="24px"
								alignItems="flex-end"
								marginTop="0.2rem"
							>
								<a
									className="social-icon"
									href='#exercises'
								>
									<AiFillGithub size="2rem" />
								</a>
								<a
									className="social-icon"
									href='#exercises'
								>
									<AiFillLinkedin size="2rem" />
								</a>
								<a
									className="social-icon"
									href='#about'
								>
									<AiFillInstagram size="2rem"/>
								</a>
							</Stack>
						</Box>
					</StyledMenu>
				)
			}
		</Box>
	);
};

export default Navbar;