/* eslint-disable no-unused-vars */
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Github, Twitter, Linkedin } from 'react-bootstrap-icons';
import {
	Box, Stack, Typography,
} from '@mui/material';
import ndikumana from '../images/ndikumana.jpg';

const HeroBanner = () => (
	<Box
		className="hero"
		display="flex"
		flexDirection="row"
		sx={{ mt: { lg: '0', xs: '70px' } }}
		justifyContent="space-between"
	>
		<div
			data-aos="fade-right"
			data-aos-duration="1500"
			data-aos-delay="2000"
		>
			<Box
				display="flex"
				flexDirection="column"
				sx={{ mt: { lg: '0', xs: '70px' } }}
				color="#444f5a"
				textAlign="left"
				alignItems="center"
			>
				<Typography
					fontWeight={700}
					// mb="23px"
					mt="30px"
					sx={{ fontSize: { lg: '44px', xs: '40px' } }}
				>
						Hello, 👋 <br /> I am Ndikumana Isaie
				</Typography>
				<Typography
					fontSize={32}
					fontWeight={500}
					mb={4}
					color="#7cacdc"
				>
					<TypeAnimation
						sequence={[
							'Full',
							1000,
							'Full Stack',
							1000,
							'Full Stack Developer',
							1000,
							'Full Stack',
							1000,
							'Full',
							1000,
							'',
							1000,
						]}
						style={{ fontSize: '1.2em' }}
						repeat={Infinity}
					/>
				</Typography>

				<Typography
					className="intro"
					fontSize="22px"
					lineHeight="35px"
					mb={4}
				>
					I can help you build a product, feature, or website.
					Look through some of my work and experience!
					If you like what you see and have a project you need to be coded,
					do not hesitate to contact me.
				</Typography>

				<Stack
					direction="row"
					gap="40px"
					fontSize="24px"
					alignItems="flex-end"
					marginTop="0.2rem"
				>
					<a
						className="social-icon"
						href='https://github.com/ndikumanaisaie'
						target="_blank"
						rel="noreferrer"
					>
						<Github className="social" size={24} />
					</a>
					<a
						className="social-icon"
						href='https://www.linkedin.com/in/ndikumanaisaie'
						target="_blank"
						rel="noreferrer"
					>
						<Linkedin className="social" size={24} />
					</a>
					<a
						className="social-icon"
						href='https://twitter.com/Ndikuma38670724'
						target="_blank"
						rel="noreferrer"
					>
						<Twitter className="social" size={24}/>
					</a>
				</Stack>
			</Box>
		</div>
		<div class="curtain"
			data-aos="fade-left"
			data-aos-duration="1500"
			data-aos-delay="1000"
		>
			<img
				src={ndikumana}
				width="400"
				height="400"
				alt="Ndikumana Isaie"
			/>
		</div>
	</Box>
);

export default HeroBanner;