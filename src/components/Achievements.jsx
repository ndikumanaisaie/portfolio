/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { accomplishment } from '../constants/projectsData.js';

const Achievements = () => (
	<div data-aos="flip-left"
		data-aos-easing="ease-out-cubic"
		data-aos-duration="2000"
	>
		<Box mt={4} color="#444f5a" pb={16}>
			<Typography variant="h3">
				Personal Achievements
			</Typography>
			<Box
				mt={4}
				sx={{
					display: 'grid',
					gridTemplateColumns: { lg: 'repeat(4, 1fr)', xs: 'repeat(2, 1fr)' },
					gap: '12px',
					width: { lg: '100%', xs: '100%' },
				}}
			>
				{
					accomplishment.map((acc, index) => (
						<Stack
							className='technologies'
							direction="column"
							borderRadius={2}
							textAlign="center"
							boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
							key={index}
							p={2}
							sx={{ backgroundColor: '#ffffff' }}

						>
							<Typography variant="h4" color="#0564bd">
								{`${acc.number}+`}
							</Typography>
							<Typography fontSize="14px">
								{`${acc.text}`}
							</Typography>
						</Stack>
					))
				}
			</Box>
		</Box>
	</div>
);

export default Achievements;