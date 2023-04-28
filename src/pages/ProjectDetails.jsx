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
		<Stack
			gap="12px"
			m="3%"
			color="#ddd"
			textAlign="center"
			sx={{
				flexDirection: { md: 'row', xs: 'column' },
			}}
		>
			<img
				className="details-img"
				src={data.image}
				alt={data.title}
			/>
			<Stack direction="column">
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
				>
					{
						data.tags.map((tag, i) => (
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
						<a className="code" href={data.source}>source</a>
					</Box>

					<Box>
						<a className="code" href={data.visit}>Demo</a>
					</Box>
				</Stack>

			</Stack>
		</Stack>
	);
};

export default ProjectDetails;