import awesome from '../images/awosome.png';
import crypto from '../images/crypto.png';
import ndikumana from '../images/ndikumana.png';
import eac from '../images/eac.png';
import feetness from '../images/feetness.png';
import filmpire from '../images/filmpire.png';
import tvmaze from '../images/tvmaze.png';
import leaderboard from '../images/leaderboard.png';
import porto1 from '../images/porto1.png';
import todolist from '../images/todolist.png';

export const projects = [
	{
		title: 'Cryptoverse',
		description: 'Designed entirely in react using Ant Design. It is a cryptocurrency website that display the latest statistics of most popular cryptocurrencies. Users can view the top 10 cryptocurrencies their exchanges rate and all the news related to them. This application is powered by RAPID API.',
		image: crypto,
		tags: ['Javascript', 'React & Redux', 'Ant Design', 'RapidApi'],
		source: 'https://github.com/ndikumanaisaie/cryptoproject.git/',
		visit: 'https://ndikumana-cryptocurrency.netlify.app/',
		id: 0,
	},
	{
		title: 'EAC Developer Summit',
		description: `This project is about East African Developer Summit that is held each year in East African
										community. I designed this website to invite people in East africa and around the world to 
										participate in the summit in order to advance software development in the Horn of africa.`,
		image: eac,
		tags: ['Javascript', 'HTML5', 'Media Queries'],
		source: 'https://github.com/ndikumanaisaie/Capstone1_EADS.git',
		visit: 'https://ndikumanaisaie.github.io/Capstone1_EADS/',
		id: 1,
	},
	{
		title: 'TV Show',
		description: 'A web application which is based on external API TVmaze. This amazing website let users enjoy TV series and movies. Users can also like and comment on each movie or show and the number of comments and likes will be displayed and increased accordingly',
		image: tvmaze,
		tags: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'TVMaze Api'],
		source: 'https://github.com/ndikumanaisaie/JS_capstone_TVshows.git',
		visit: 'https://ndikumanaisaie.github.io/JS_capstone_TVshows/dist/',
		id: 2,
	},
	{
		title: 'Feetness',
		description: 'This website is designed entirely in react using material UI. It is a feetness application that lets users search for different exercises based on body parts. It also show similar exercises and display their youtude videos..',
		image: feetness,
		tags: ['React', 'JavaScript', 'Material UI', 'ExerciseDB Api'],
		source: 'https://github.com/ndikumanaisaie/feetness_app.git',
		visit: 'https://feetness.netlify.app/',
		id: 3,
	},
	{
		title: 'Ndikumana Isaie Portfolio',
		description: 'This is my portofolio. A complete mobolie first website that features all my projects, skills and ambitions. It is completely written in modern react using functional component along with Material UI and Styled component.',
		image: ndikumana,
		tags: ['React', 'JavaScript', 'Material UI', 'Styled Component'],
		source: 'https://github.com/ndikumanaisaie/portfolio.git',
		visit: 'https://ndikumanaisaie.netlify.app/',
		id: 9,
	},
	{
		title: 'To-do List',
		description: 'About"To-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
		image: todolist,
		tags: ['JavaScript', 'HTML5', 'CSS3', 'webpack'],
		source: 'https://github.com/ndikumanaisaie/To-do-list.git',
		visit: 'https://ndikumanaisaie.github.io/To-do-list/dist/',
		id: 5,
	},
	{
		title: 'Filmpire',
		description: 'This website is a film collection app, It lets user fetch a disired film and it will display it in a nice grid container. It is using an api and fetch the data using react',
		image: filmpire,
		tags: ['React', 'omdbApi', 'HTML5', 'CSS3'],
		source: 'https://github.com/ndikumanaisaie/react_course.git',
		visit: 'https://ndikumanaisaie.github.io/react_course/dist/',
		id: 4,
	},
	{
		title: 'Awesome Books',
		description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
		image: awesome,
		tags: ['JavaScript', 'HTML5', 'CSS3', 'webpack'],
		source: 'https://github.com/ndikumanaisaie/awesome-books.git',
		visit: 'https://ndikumanaisaie.github.io/awesome-books/',
		id: 6,
	},
	{
		title: 'Portfolio',
		description: 'Hi! My name is NDIKUMANA ISAIE, I am a front end developper. I have experience in HTML5, CSS3 and JAVASCRIPT. Curently > a full-time student at microverse to become a FullStack Web developper. This is my portfolio website which includes all my experience and projects that i have done before',
		image: porto1,
		tags: ['JavaScript', 'HTML5', 'CSS3'],
		source: 'https://github.com/ndikumanaisaie/portfolio_ndikumana.git',
		visit: 'https://ndikumanaisaie.github.io/portfolio_ndikumana/',
		id: 7,
	},
	{
		title: 'Leaderboard',
		description: 'The leaderboard website displays scores submitted by different players. It also allows you to submit your score',
		image: leaderboard,
		tags: ['JavaScript', 'HTML5', 'CSS3', 'Leaderboard API'],
		source: 'https://github.com/ndikumanaisaie/Leaderboard.git',
		visit: 'https://ndikumanaisaie.github.io/Leaderboard/dist/',
		id: 8,
	},
];

export const timeLineData = [
	{ year: 2012, text: 'Introduction to programming' },
	{ year: '2012-2016', text: 'College + Programming for fun' },
	{ year: 2017, text: 'Start building static websites with html and css' },
	{ year: '2018-2020', text: 'Building mobile apps using java and Android Studio code' },
	{ year: 2021, text: 'Started building dynamic website using javascript' },
	{ year: 2022, text: 'Started learning at Microverse a remote collaboration based programming school' },
];

export const accomplishment = [
	{ number: 27, text: 'Repositories' },
	{ number: 528, text: 'Contributions' },
	{ number: 45, text: 'Github Followers' },
	{ number: 124, text: 'Github Stars' },
];