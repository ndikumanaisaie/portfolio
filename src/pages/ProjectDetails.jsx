/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
import { Stack, Typography, Box } from '@mui/material';
import { projects } from '../constants/projectsData.js';

const ProjectDetails = () => {
	const { id } = useParams();
	const data = projects.find((project) => project.id === parseInt(id, 10));
	return (
		<Stack
			direction="row"
			gap="12px"
		>
			<img
				src={data.image}
				alt={data.title}
			/>
			<Typography>
				{data.title}
			</Typography>
		</Stack>
	);
};

export default ProjectDetails;