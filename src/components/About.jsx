/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';
import resume from '../images/resume.pdf';

const About = () => (
	<Box id="about">
		<Typography
				variant="h3"
				mt="20px"
				mb="20px"
				color="#ddd"
			>About Me</Typography>
			<Stack
				gap="40px"
				fontSize="24px"
				alignItems="center"
				marginTop="0.2rem"
				sx={{ direction: { xl: 'row', lg: 'row', md: 'row', sm: 'column', xs: 'column' } }}
			>
				<Typography
					mb={8}
					color="#ddd"
					textAlign="justify"
					fontSize="22px"
					sx={{ width: { lg: '60%', xs: '100%' } }}
				>
					I am a solution-oriented Front-End Developer,
					lifelong learner, and adventure with a background in electronics.
					I enjoy development because of the satisfaction I get by overcoming challenges.
					I am motivated by the opportunity that web development
					provides to positively impact individual life,
					family, and the world as a whole. I am open to new opportunities.
				</Typography>
				<Link
					className="download"
					target="_blank"
					href={resume}
					type="application/octet-stream"
					download="Ndikumana Isaie resume"
					style={{ textDecoration: 'none' }}
				>
					Get my Resume
				</Link>
			</Stack>
	</Box>
);

export default About;