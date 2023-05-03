/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';
import {
	Box, Stack, Typography,
} from '@mui/material';

const ProjectCard = ({ project, timeLineData }) => (
	<Box
		className="project-card"
	>
		<img
			src={project.image}
			alt={project.title}
		/>
		<Typography
			color="#0564bd"
			fontSize={30}
		>
			{project.title}
		</Typography>
		<hr />
		<Typography style={{ textAlign: 'justify', color: '#444f5a' }}>
			{
				project.description.length > 100
					? `${project.description.substring(0, 100)} ...`
					: project.description
			}
		</Typography>

		<Typography
			color="#0564bd"
			fontSize="18px"
		>Stack</Typography>

		<Stack
			direction="row"
			justifyContent="space-around"
			flexWrap="wrap"
			gap="4px"
		>
			{
				project.tags.map((tag, i) => (
					<Box className="language" key={i}>
						<Typography>{tag}</Typography>
					</Box>
				))
			}
		</Stack>

		<Link
			className='more-action'
			to={`/project/${project.id}`}
		>
						See Project
		</Link>

		{/* <Stack
				direction="row"
				justifyContent="space-between"
			>
				<Box>
					<a className="code" href={project.source} target="_blank" rel="noreferrer">source</a>
				</Box>

				<Box>
					<a className="code" href={project.visit} target="_blank" rel="noreferrer">Demo</a>
				</Box>
			</Stack> */}
	</Box>
);

export default ProjectCard;