/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { accomplishment } from '../constants/projectsData.js';

const Achievements = () => (
	<Stack
		direction="row"
		justifyContent="space-between"
		color="#ddd"
	>
		{
			accomplishment.map((acc, index) => (
				<Stack direction="column">
					<Typography>
						{`${acc.number}+`}
					</Typography>
					<Typography>
						{`${acc.text}`}
					</Typography>
				</Stack>
			))
		}
	</Stack>
);

export default Achievements;