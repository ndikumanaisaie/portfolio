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
		description: 'Designed entirely in react using Ant Design. It is a cryptocurrency website that displays the latest statistics of the most popular cryptocurrencies. Users can view the top 10 cryptocurrencies their exchanges rate and all the news related to them. This application is powered by RAPID API.',
		image: crypto,
		tags: ['Javascript', 'React & Redux', 'Ant Design', 'RapidApi'],
		source: 'https://github.com/ndikumanaisaie/cryptoproject.git/',
		visit: 'https://ndikumana-cryptocurrency.netlify.app/',
		id: 1,
	},
	{
		title: 'EAC Developer Summit',
		description: `This project is about East African Developer Summit that is held each year in East African
		community. I designed this website to invite people in East Africa and around the world to 
		participate in the summit to advance software development in the Horn of Africa.`,
		image: eac,
		tags: ['Javascript', 'HTML5', 'Media Queries'],
		source: 'https://github.com/ndikumanaisaie/Capstone1_EADS.git',
		visit: 'https://ndikumanaisaie.github.io/Capstone1_EADS/',
		id: 2,
	},
	{
		title: 'TV Show',
		description: 'A web application that is based on external API TVmaze. This website lets users enjoy TV series and movies. Users can also like and comment on each movie or show and the number of comments and likes will be displayed and increased accordingly.',
		image: tvmaze,
		tags: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'TVMaze Api'],
		source: 'https://github.com/ndikumanaisaie/JS_capstone_TVshows.git',
		visit: 'https://ndikumanaisaie.github.io/JS_capstone_TVshows/dist/',
		id: 3,
	},
	{
		title: 'Feetness',
		description: 'This website is designed entirely in React using material UI. The fitness application lets users search for different exercises based on body parts. It also shows similar exercises and displays their YouTube videos.',
		image: feetness,
		tags: ['React', 'JavaScript', 'Material UI', 'ExerciseDB Api'],
		source: 'https://github.com/ndikumanaisaie/feetness_app.git',
		visit: 'https://feetness.netlify.app/',
		id: 4,
	},
	{
		title: 'Ndikumana Isaie',
		description: 'This is my portfolio. A complete mobile-first website that features all my projects, skills, and ambitions. It is written in modern React using functional components, Material UI, and Styled components.',
		image: ndikumana,
		tags: ['React', 'JavaScript', 'Material UI', 'Styled Component'],
		source: 'https://github.com/ndikumanaisaie/portfolio.git',
		visit: 'https://ndikumanaisaie.netlify.app/',
		id: 5,
	},
	{
		title: 'To-do List',
		description: 'About "To-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
		image: todolist,
		tags: ['JavaScript', 'HTML5', 'CSS3', 'webpack'],
		source: 'https://github.com/ndikumanaisaie/To-do-list.git',
		visit: 'https://ndikumanaisaie.github.io/To-do-list/dist/',
		id: 6,
	},
	{
		title: 'Filmpire',
		description: 'This website is a film collection app, it lets users fetch a desired film and it will display it in a nice grid container. It is using an API and fetch the data using react',
		image: filmpire,
		tags: ['React', 'omdbApi', 'HTML5', 'CSS3'],
		source: 'https://github.com/ndikumanaisaie/react_course.git',
		visit: 'https://ndikumanaisaie.github.io/react_course/dist/',
		id: 7,
	},
	{
		title: 'Awesome Books',
		description: "This is a book collection website that let users pick a book from a collection of books.",
		image: awesome,
		tags: ['JavaScript', 'HTML5', 'CSS3', 'webpack'],
		source: 'https://github.com/ndikumanaisaie/awesome-books.git',
		visit: 'https://ndikumanaisaie.github.io/awesome-books/',
		id: 8,
	},
	{
		title: 'Portfolio',
		description: 'Hi! My name is NDIKUMANA ISAIE, I am a front-end developer. I have experience in HTML5, CSS3, and JAVASCRIPT. Currently> a full-time student at Microverse to become a Full Stack Web developer. This is my portfolio website which includes all my experience and projects that I have done before',
		image: porto1,
		tags: ['JavaScript', 'HTML5', 'CSS3'],
		source: 'https://github.com/ndikumanaisaie/portfolio_ndikumana.git',
		visit: 'https://ndikumanaisaie.github.io/portfolio_ndikumana/',
		id: 9,
	},
	{
		title: 'Leaderboard',
		description: 'The leaderboard website displays scores submitted by different players. It also allows you to submit your score.',
		image: leaderboard,
		tags: ['JavaScript', 'HTML5', 'CSS3', 'Leaderboard API'],
		source: 'https://github.com/ndikumanaisaie/Leaderboard.git',
		visit: 'https://ndikumanaisaie.github.io/Leaderboard/dist/',
		id: 10,
	},
];

export const timeLineData = [
	{ year: 2012, text: 'Introduction to programming' },
	{ year: '2012-2016', text: 'College + Building c, c++ command line applications' },
	{ year: 2017, text: 'Started building dynamic websites with html and css and JavaScript' },
	{ year: '2018-2020', text: 'Building mobile apps using java and Android Studio' },
	{ year: '2021-Present', text: 'Full Stack JavaScript, React, Ruby and Rails Developer' },
];

export const accomplishment = [
	{ number: 52, text: 'Repositories' },
	{ number: 1576, text: 'Contributions' },
	{ number: 71, text: 'Github Followers' },
	{ number: 395, text: 'Github Stars' },
];