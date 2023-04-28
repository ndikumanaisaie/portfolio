/* eslint-disable no-unused-vars */
import React from 'react';
import {
	Typography, Box, Stack,
} from '@mui/material';
import Reveal from 'react-reveal/Reveal';
import {
	DiCss3Full, DiReact, DiDatabase, DiJavascript, DiJsBadge, DiNodejs,
	DiBootstrap, DiGit, DiGithubBadge, DiHtml5, DiTerminal, DiMongodb,
} from 'react-icons/di';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import '../styles/tech.css';

const Technologies = () => (
	<Reveal effect="fadeInUp">
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
				I've worked with a range of Front-End And Back-End technologies in the web development world.
				I have mastered intermediate and advanced topics in full-stack development (including Rails, React, NextJS, UI/UX, Git, and DS&A challenges)
				while building multiple full-stack projects both independently and via pair programming.
			</Typography>

			<Stack
				sx={{
					flexDirection: { lg: 'row' }, justifyContent: 'space-between', gap: { md: '15px', xs: '22px' },
				}}
			>
				<Stack
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
										<DiJavascript size={30} color="#444f5a" />
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
										<DiReact size={30} color="#444f5a" />
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
										<DiHtml5 size={30} color="#444f5a" />
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
										<DiCss3Full size={30} color="#444f5a" />
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
										<DiBootstrap size={30} color="#444f5a" />
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
										<DiHtml5 size={30} color="#444f5a" />
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
										<DiHtml5 size={30} color="#444f5a" />
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
										<DiDatabase size={30} color="#444f5a" />
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
										<DiDatabase size={30} color="#444f5a" />
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
										<DiDatabase size={30} color="#444f5a" />
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
										<DiMongodb size={30} color="#444f5a" />
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
										<DiNodejs size={30} color="#444f5a" />
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
										<DiJsBadge size={30} color="#444f5a" />
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
										<DiNodejs size={30} color="#444f5a" />
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
										<DiGit size={30} color="#444f5a" />
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
										<DiGithubBadge size={30} color="#444f5a" />
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
										<DiTerminal size={30} color="#444f5a" />
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
										<DiGit size={30} color="#444f5a" />
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
										<DiGit size={30} color="#444f5a" />
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
										<DiGit size={30} color="#444f5a" />
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
	</Reveal>
);

export default Technologies;