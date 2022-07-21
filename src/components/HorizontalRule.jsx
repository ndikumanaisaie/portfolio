/* eslint-disable no-unused-vars */
import React from 'react';
import { Box } from '@mui/material';

const HorizontalRule = () => (
	<Box
		sx={{
			ml: {
				lg: '65px', md: '60px', sm: '60px', xs: '30px',
			},
			mr: {
				lg: '65px', md: '60px', sm: '20px', xs: '30px',
			},
		}}
		p="10px"
		borderBottom= "1px solid #dcddde"
	>
	</Box>
);

export default HorizontalRule;