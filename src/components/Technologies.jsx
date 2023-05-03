/* eslint-disable no-unused-vars */
import React from 'react';
import {
	Typography, Box, Stack,
} from '@mui/material';
import { Slide } from 'react-awesome-reveal';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import rails from '../images/rails.svg';
import ruby from '../images/ruby.svg';
import database from '../images/database.svg';
import mongodb from '../images/mongodb.svg';
import express from '../images/express.svg';
import next from '../images/nextjs.svg';
import node from '../images/node.svg';
import javascript from '../images/javascript.svg';
import bootstrap from '../images/bootstrap.svg';
import react from '../images/react.svg';
import mui from '../images/mui.svg';
import ant from '../images/ant.svg';
import html from '../images/html.svg';
import css from '../images/css.svg';
import git from '../images/git.svg';
import github from '../images/github.svg';
import terminal from '../images/terminal.svg';
import media from '../images/media.svg';
import team from '../images/team.svg';
import internet from '../images/internet.svg';

import '../styles/tech.css';

const Technologies = () => (
	<Slide direction="up" fraction={0} triggerOnce={true}>
		<Box id="technologies" color="#444f5a">
			<Typography
				variant="h3"
				mt="50px"
				mb="46px"
				color="#444f5a"
			>
				Technologies
			</Typography>

			<Typography
				mb="12px"
				color="#444f5a"
				textAlign="justify"
				fontSize="22px"
				sx={{ width: { lg: '80%', xs: '100%' } }}
			>
				I've worked with a range of Front-End And Back-End technologies in the web
				 development world.
				I have mastered intermediate and advanced topics in full-stack development
				(including Rails, React, NextJS, UI/UX, Git, and DS&A challenges)
				while building multiple full-stack projects both independently and
				via pair programming.
			</Typography>

			<Stack
				sx={{
					flexDirection: { lg: 'row' }, justifyContent: 'space-between', gap: { md: '15px', xs: '22px' },
				}}
			>
				<Stack
					className='technologies'
					direction="column"
					backgroundColor="#ffffff"
					borderRadius="10px"
					boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
					sx={{ width: { lg: '30%' } }}
				>
					<Typography sx={{ mt: 4, mb: 2, textAlign: { lg: 'center' } }} color="#0564bd" variant="h4" component="div">
							Front-End
					</Typography>
					<List>
						<Stack direction="row">
							<div>
								<ListItem>
									<ListItemIcon>
										<img className="rails-img" src={javascript} alt="ruby on rails"/>
									</ListItemIcon>
									<ListItemText
										primary="JavaScript"
										secondary={
											<React.Fragment>
												<Typography
													sx={{ display: 'inline' }}
													component="span"
													variant="body3"
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
										<img className="rails-img" src={react} alt="ruby on rails"/>
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
										<img className="rails-img" src={html} alt="ruby on rails"/>
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
										<img className="rails-img" src={css} alt="ruby on rails"/>
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
										<img className="rails-img" src={bootstrap} alt="ruby on rails"/>
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
										<img className="rails-img" src={mui} alt="ruby on rails"/>
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
										<img className="rails-img" src={ant} alt="ruby on rails"/>
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
				</Stack>
				<Stack
					className='technologies'
					direction="column"
					backgroundColor="#ffffff"
					borderRadius="10px"
					boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
					sx={{ width: { lg: '30%' } }}
				>
					<Typography sx={{ mt: 4, mb: 2, textAlign: { lg: 'center' } }} color="#0564bd" textAlign="center" variant="h4" component="div">
							Back-End
					</Typography>
					<List>
						<Stack direction="row">
							<div>
								<ListItem>
									<ListItemIcon>
										<img className="rails-img" src={database} alt="ruby on rails"/>
									</ListItemIcon>
									<ListItemText
										primary="Databases"
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
										<img className="rails-img" src={ruby} alt="ruby on rails"/>
									</ListItemIcon>
									<ListItemText
										primary="Ruby"
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
										<img className="rails-img" src={rails} alt="ruby on rails"/>
									</ListItemIcon>
									<ListItemText
										primary="Rails"
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
										<img className="rails-img" src={mongodb} alt="ruby on rails"/>
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
													Intermediate
												</Typography>
											</React.Fragment>
										}
									/>
								</ListItem>
							</div>
							<div>
								<ListItem>
									<ListItemIcon>
										<img className="rails-img" src={express} alt="ruby on rails"/>
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
													Advanced
												</Typography>
											</React.Fragment>
										}
									/>
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<img className="rails-img" src={next} alt="ruby on rails"/>
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
										<img className="rails-img" src={node} alt="ruby on rails"/>
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
													Experienced
												</Typography>
											</React.Fragment>
										}
									/>
								</ListItem>
							</div>
						</Stack>
					</List>
				</Stack>
				<Stack
					className='technologies'
					direction="column"
					backgroundColor="#ffffff"
					borderRadius="10px"
					boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
					sx={{ width: { lg: '30%' } }}
				>
					<Typography sx={{ mt: 4, mb: 2, textAlign: { lg: 'center' } }} color="#0564bd" textAlign="center" variant="h4" component="div">
						Other Skills
					</Typography>
					<List>
						<Stack direction="row">
							<div>
								<ListItem>
									<ListItemIcon>
										<img className="rails-img" src={git} alt="ruby on rails"/>
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
										<img className="rails-img" src={github} alt="ruby on rails"/>
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
										<img className="rails-img" src={terminal} alt="ruby on rails"/>
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
										<img className="rails-img" src={media} alt="ruby on rails"/>
									</ListItemIcon>
									<ListItemText
										primary="Media Q"
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
										<img className="rails-img" src={team} alt="ruby on rails"/>
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
										<img className="rails-img" src={internet} alt="ruby on rails"/>
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
				</Stack>
			</Stack>
		</Box>
	</Slide>
);

export default Technologies;