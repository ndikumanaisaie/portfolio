/* eslint-disable no-unused-vars */
import React from 'react';
import Bounce from 'react-reveal/Bounce';
import { TypeAnimation } from 'react-type-animation';

import {
	Box, Stack, Typography,
} from '@mui/material';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

const HeroBanner = () => (
	<Bounce right>
		<Box
			display="flex"
			flexDirection="column"
			sx={{ mt: { lg: '0', xs: '70px' } }}
			color="#ddd"
			textAlign="center"
			alignItems="center"
		>
			<Typography
				fontWeight={700}
				// mb="23px"
				mt="30px"
				sx={{ fontSize: { lg: '44px', xs: '40px' } }}
			>
					Hi,👋 <br /> I am Ndikumana Isaie
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
					I can help you build a product , feature or website.
					Look through some of my work and experience!
					If you like what you see and have a project you need coded,
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
					<AiFillGithub size="2rem" />
				</a>
				<a
					className="social-icon"
					href='https://www.linkedin.com/in/ndikumanaisaie'
					target="_blank"
					rel="noreferrer"
				>
					<AiFillLinkedin size="2rem" />
				</a>
				<a
					className="social-icon"
					href='https://twitter.com/Ndikuma38670724'
					target="_blank"
					rel="noreferrer"
				>
					<AiFillTwitterCircle size="2rem"/>
				</a>
			</Stack>
		</Box>
	</Bounce>
);

export default HeroBanner;