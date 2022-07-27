/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { accomplishment } from '../constants/projectsData.js';

const Achievements = () => (
	<Box mt={4} color="#ddd">
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
						direction="column"
						borderRadius={2}
						textAlign="center"
						p={2}
						sx={{ backgroundColor: '#051010' }}

					>
						<Typography variant="h4">
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

);

export default Achievements;