/* eslint-disable no-unused-vars */
import React from 'react';
import {
	Typography, Box, Stack, Container,
} from '@mui/material';
import {
	DiCss3Full, DiReact, DiDatabase, DiJavascript, DiJsBadge, DiNodejs,
	DiBootstrap, DiGit, DiGithubBadge, DiHtml5, DiTerminal, DiMongodb,
} from 'react-icons/di';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

import '../styles/tech.css';

const Technologies = () => (
	<Box id="technologies" color="#ddd">
		<Typography
			variant="h3"
			mt="50px"
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

		<Grid container mt={4} spacing={2}>
			<Grid
				item xs={12}
				md={4}
			>
				<Typography sx={{ mt: 4, mb: 2 }} color="#3d90e3" textAlign="center" variant="h4" component="div">
            Front-End
				</Typography>
				<List>
					<Stack direction="row">
						<div>
							<ListItem>
								<ListItemIcon>
									<DiJavascript size={30} color="#ddd" />
								</ListItemIcon>
								<ListItemText
									primary="JavaScript"
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
									<DiReact size={30} color="#ddd" />
								</ListItemIcon>
								<ListItemText
									primary="React & Redux"
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
									<DiHtml5 size={30} color="#ddd" />
								</ListItemIcon>
								<ListItemText
									primary="HTML5"
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
									<DiCss3Full size={30} color="#ddd" />
								</ListItemIcon>
								<ListItemText
									primary="CSS3"
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
						</div>
						<div>
							<ListItem>
								<ListItemIcon>
									<DiBootstrap size={30} color="#ddd" />
								</ListItemIcon>
								<ListItemText
									primary="Bootstrap"
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
									<DiHtml5 size={30} color="#ddd" />
								</ListItemIcon>
								<ListItemText
									primary="Material UI"
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
									<DiHtml5 size={30} color="#ddd" />
								</ListItemIcon>
								<ListItemText
									primary="Ant Design"
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
						</div>
					</Stack>
				</List>
			</Grid>
			<Grid item xs={12} md>
				<Typography sx={{ mt: 4, mb: 2 }} color="#3d90e3" textAlign="center" variant="h4" component="div">
            Back-End
				</Typography>
				<List>
					<Stack direction="row">
						<div>
							<ListItem>
								<ListItemIcon>
									<DiDatabase size={30} color="#ddd" />
								</ListItemIcon>
								<ListItemText
									primary="Dabaseses"
									secondary={
										<React.Fragment>
											<Typography
												sx={{ display: 'inline' }}
												component="span"
												variant="body2"
												color="#aaaaba"
											>
                				Beginner
											</Typography>
										</React.Fragment>
									}
								/>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<DiMongodb size={30} color="#ddd" />
								</ListItemIcon>
								<ListItemText
									primary="MangoDb"
									secondary={
										<React.Fragment>
											<Typography
												sx={{ display: 'inline' }}
												component="span"
												variant="body2"
												color="#aaaaba"
											>
                				Beginner
											</Typography>
										</React.Fragment>
									}
								/>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<DiNodejs size={30} color="#ddd" />
								</ListItemIcon>
								<ListItemText
									primary="Express.js"
									secondary={
										<React.Fragment>
											<Typography
												sx={{ display: 'inline' }}
												component="span"
												variant="body2"
												color="#aaaaba"
											>
												Beginner
											</Typography>
										</React.Fragment>
									}
								/>
							</ListItem>
						</div>
						<div>
							<ListItem>
								<ListItemIcon>
									<DiJsBadge size={30} color="#ddd" />
								</ListItemIcon>
								<ListItemText
									primary="Next.js"
									secondary={
										<React.Fragment>
											<Typography
												sx={{ display: 'inline' }}
												component="span"
												variant="body2"
												color="#aaaaba"
											>
                				Beginner
											</Typography>
										</React.Fragment>
									}
								/>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<DiNodejs size={30} color="#ddd" />
								</ListItemIcon>
								<ListItemText
									primary="Node.js"
									secondary={
										<React.Fragment>
											<Typography
												sx={{ display: 'inline' }}
												component="span"
												variant="body2"
												color="#aaaaba"
											>
												Beginner
											</Typography>
										</React.Fragment>
									}
								/>
							</ListItem>
						</div>
					</Stack>
				</List>
			</Grid>
			<Grid item xs={12} md>
				<Typography sx={{ mt: 4, mb: 2 }} color="#3d90e3" textAlign="center" variant="h4" component="div">
           Other Skills
				</Typography>
				<List>
					<Stack direction="row">
						<div>
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
							<ListItem>
								<ListItemIcon>
									<DiTerminal size={30} color="#ddd" />
								</ListItemIcon>
								<ListItemText
									primary="Terminal"
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
						</div>
						<div>
							<ListItem>
								<ListItemIcon>
									<DiGit size={30} color="#ddd" />
								</ListItemIcon>
								<ListItemText
									primary="MobileResponsiveDev"
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
									<DiGit size={30} color="#ddd" />
								</ListItemIcon>
								<ListItemText
									primary="Team Work"
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
									<DiGit size={30} color="#ddd" />
								</ListItemIcon>
								<ListItemText
									primary="Remote pair programming"
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
						</div>
					</Stack>
				</List>
			</Grid>
		</Grid>
	</Box>
);

export default Technologies;