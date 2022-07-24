/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import {
	Box, Button, Stack, Typography,
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
			color="#3d90e3"
			fontSize={30}
		>
			{project.title}
		</Typography>
		<hr />
		<Stack
			direction="column"
			gap={2}
			p={1}
		>
			<p style={{ textAlign: 'justify', color: '#ddd' }}>
				{
					project.description.length > 100
						? `${project.description.substring(0, 150)} ...`
						: project.description
				}
			</p>
			<Link
				className='more-action'
				to={`/project/${project.id}`}
			>
					See Project
			</Link>
		</Stack>

		<Typography
			color="#3da0e3"
			pt={2}
			fontSize="18px"
		>Stack</Typography>

		<Stack
			direction="row"
			justifyContent="space-around"
			flexWrap="wrap"
		>
			{
				project.tags.map((tag) => (
					<Box pb={3} pt={2} color="#aaa0e3" key={project.title}>
						<Typography>{tag}</Typography>
					</Box>
				))
			}
		</Stack>

		<Stack
			direction="row"
			justifyContent="space-between"
		>
			<Box>
				<a className="code" href={project.source}>source</a>
			</Box>

			<Box>
				<a className="code" href={project.visit}>Demo</a>
			</Box>
		</Stack>
	</Box>
);

export default ProjectCard;