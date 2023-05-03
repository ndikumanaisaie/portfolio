/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Slide } from 'react-awesome-reveal';
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

		window.scrollTo({ top: 550, behavior: 'smooth' });
	};

	return (
		<Slide direction="up" fraction={1} triggerOnce={true}>
			<Box
				id="projects"
				mt="30px"
			>
				<Typography
					variant="h3"
					mb="46px"
					color="#444f5a"
				>
					Projects
				</Typography>

				<Box
					className="projects-container"
				>
					{
						currentProjects.map((project, i) => (
							<ProjectCard
								key={i}
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
								shape="rounded"
								defaultPage={1}
								count={Math.ceil(projects.length / projectPerPage)}
								page = {currentPage}
								onChange= {paginate}
								size="large"
								sx={{
									color: '#0564bd', backgroundColor: '#3d90e3', borderRadius: '10px',
								}}
							/>
						)
					}
				</Stack>
			</Box>
		</Slide>
	);
};

export default Projects;