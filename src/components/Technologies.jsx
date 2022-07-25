/* eslint-disable no-unused-vars */
import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import {
	DiCss3Full, DiReact, DiDatabase, DiJavascript,
	DiBootstrap, DiGit, DiGithubBadge, DiHtml5, DiTerminal,
} from 'react-icons/di';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';

import '../styles/tech.css';

const Technologies = () => (
	<Box id="technologies" color="#ddd">
		<Typography
			variant="h3"
			mb="46px"
			color="#ddd"
		>
      Technologies
		</Typography>

		<Typography
			mb="12px"
			color="#ddd"
			textAlign="justify"
			fontSize="22px"
			sx={{ width: { lg: '60%', xs: '100%' } }}
		>
      I've worked with a range of Front-End technologies in the web development world.
			I have 4 years of experience working with my personal project. I am currenly learning
			MERN Stack to become a Full-Stack web developer.
		</Typography>

		<Grid container spacing={2}>
			<Grid item xs={12} md={4}>
				<Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Icon with text
				</Typography>
				<List>
					<ListItem>
						<ListItemIcon>
							<DiCss3Full size={30} color="#ddd" />
						</ListItemIcon>
						<ListItemText
							primary="Single-line item"
							secondary='Secondary text'
						/>
					</ListItem>
				</List>
			</Grid>
			<Grid item xs={12} md={4}>
				<Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Icon with text
				</Typography>
				<List>
					<ListItem>
						<ListItemIcon>
							<DiCss3Full size={30} color="#ddd" />
						</ListItemIcon>
						<ListItemText
							primary="Single-line item"
							secondary='Secondary text'
						/>
					</ListItem>
				</List>
			</Grid>
			<Grid item xs={12} md={4}>
				<Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Other skills
				</Typography>
				<List>
					<ListItem>
						<ListItemIcon>
							<DiGit size={30} color="#ddd" />
						</ListItemIcon>
						<ListItemText
							primary="Git"
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: 'inline' }}
										component="span"
										variant="body2"
										color="#aaaaba"
									>
                		Experienced
									</Typography>
								</React.Fragment>
							}
						/>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<DiGithubBadge size={30} color="#ddd" />
						</ListItemIcon>
						<ListItemText
							primary="GitHub"
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: 'inline' }}
										component="span"
										variant="body2"
										color="#aaaaba"
									>
                		Experienced
									</Typography>
								</React.Fragment>
							}
						/>
					</ListItem>		

				</List>
			</Grid>
		</Grid>
	</Box>
);

export default Technologies;