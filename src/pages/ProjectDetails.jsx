/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
import { Stack, Typography, Box } from '@mui/material';
import { projects } from '../constants/projectsData.js';
import '../styles/projects.css';

const ProjectDetails = () => {
	const { id } = useParams();
	const data = projects.find((project) => project.id === parseInt(id, 10));
	return (
		<Box
			display="flex"
			flexDirection="row"
			mt="6%"
			p="12px"
			gap="12px"
			color="#444f5a"
			justifyContent="space-between"
			sx={{
				flexDirection: { md: 'row', xs: 'column' }, mt: { md: '7%', xs: '18%' },
			}}
		>
			<img
				className="details-img"
				src={data.image}
				alt={data.title}
			/>
			<Stack direction="column" gap="12px" alignItems="start">
				<Typography
					mb="12px"
					fontSize={30}
					color="#0564bd"
				>
					{data.title}
				</Typography>

				<Typography
					color="#444f5a"
					textAlign="justify"
				>
					{data.description}
				</Typography>

				<Typography
					color="#0564bd"
					pt={2}
					fontSize="18px"
				>
					Stack
				</Typography>

				<Typography
					color="#444f5a"
				>
					This project was built using Below Technologies
				</Typography>

				<Stack
					direction="row"
					justifyContent="space-around"
					flexWrap="wrap"
					gap="4px"
				>
					{
						data.tags.map((tag, i) => (
							<Box className="language" key={i}>
								<Typography>{tag}</Typography>
							</Box>
						))
					}
				</Stack>

				<Box
					display="flex"
					direction="row"
					justifyContent="space-between"
					gap="50%"
					mt="1.2rem"
				>
					<a className="code" href={data.source} target="_blank" rel="noreferrer">source</a>
					<a className="code" href={data.visit} target="_blank" rel="noreferrer">Demo</a>
				</Box>
			</Stack>
		</Box>
	);
};

export default ProjectDetails;