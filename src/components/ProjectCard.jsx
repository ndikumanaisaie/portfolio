/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from 'react-reveal/Reveal';
import {
	Box, Stack, Typography,
} from '@mui/material';

const ProjectCard = ({ project, timeLineData }) => (
	<Reveal effect="fadeInUp">
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
			<Stack
				direction="column"
				gap={2}
				p={1}
			>
				<p style={{ textAlign: 'justify', color: '#444f5a' }}>
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
				color="#0564bd"
				pt={2}
				fontSize="18px"
			>Stack</Typography>

			<Stack
				direction="row"
				justifyContent="space-around"
				flexWrap="wrap"
			>
				{
					project.tags.map((tag, i) => (
						<Box pb={3} pt={2} color="#aaa0e3" key={i}>
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
					<a className="code" href={project.source} target="_blank" rel="noreferrer">source</a>
				</Box>

				<Box>
					<a className="code" href={project.visit} target="_blank" rel="noreferrer">Demo</a>
				</Box>
			</Stack>
		</Box>
	</Reveal>
);

export default ProjectCard;