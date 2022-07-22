/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { projects, timeLineData } from '../constants/projectsData.js';
import ProjectCard from './ProjectCard.jsx';
import '../styles/projects.css';

const Projects = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const projectPerPage = 4;

	const indexOfLastExercise = currentPage * projectPerPage;
	const indexOfFirstExercise = indexOfLastExercise - projectPerPage;
	const currentProjects = projects.slice(indexOfFirstExercise, indexOfLastExercise);

	const paginate = (e, value) => {
		setCurrentPage(value);

		window.scrollTo({ top: 1800, behavior: 'smooth' });
	};

	return (

		<Box
			id="projects"
			sx={{
				ml: {
					lg: '65px', md: '60px', sm: '60px', xs: '30px',
				},
				mr: {
					lg: '65px', md: '60px', sm: '20px', xs: '30px',
				},
			}}
			mt="50px"
			border="2px solid blue"
		>
			<Typography
				variant="h3"
				mb="46px"
			>
        Projects
			</Typography>

			<Box
				className="projects-container"
			>
				{
					currentProjects.map((project) => (
						<ProjectCard
							key={project.id}
							project={project}
							timeLineData={timeLineData}
						/>
					))
				}
			</Box>
			<Stack
				mt="100px"
				alignItems="center"
			>
				{
					projects.length > 4 && (
						<Pagination
							color="primary"
							shape="rounded"
							defaultPage={1}
							count={Math.ceil(projects.length / projectPerPage)}
							page = {currentPage}
							onChange= {paginate}
							size="large"
						/>
					)
				}
			</Stack>
		</Box>
	);
};

export default Projects;