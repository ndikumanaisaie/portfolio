/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Github, Twitter, Linkedin} from "react-bootstrap-icons";

const Footer = () => (
	<Box
		className="footer"
	>
		<Stack
			justifyContent="space-between"
			sx={{ flexDirection: { lg: 'row' }, gap: { lg: '32px', xs: '22px' } }}
		>
			<Stack
				direction="row"
				gap={2}
			>
				<Stack
					gap={4}
				>
					<Typography>
				Call
					</Typography>
					<Typography>
				+23675359910
					</Typography>
				</Stack>
				<Stack
					gap={4}
				>
					<Typography>
				Email
					</Typography>
					<Typography>
				ndikumanaisaie@gmail.com
					</Typography>
				</Stack>
			</Stack>
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
					href='https://www.linkedin.com/in/ndikumana-isaie-21166273'
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
		</Stack>
		<Typography textAlign="center" mt="16px">
		@ Ndikumana Isaie portfolio. All right reserved. Design inspired by JSMastery
		</Typography>
	</Box>
);

export default Footer;