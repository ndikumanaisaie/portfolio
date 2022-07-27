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
		title: 'East African Developer Summit',
		description: `This project is about East African Developer Summit that is held each year in East African
										community. I designed this website to invite people in East africa and around the world to 
										participate in the summit in order to advance software development in the Horn of africa.`,
		image: eac,
		tags: ['Javascript', 'HTML5', 'Media Queries'],
		source: 'https://github.com/ndikumanaisaie/Capstone1_EADS.git',
		visit: 'https://ndikumanaisaie.github.io/Capstone-Project1/',
		id: 1,
	},
	{
		title: 'TV Show',
		description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
		image: tvmaze,
		tags: ['React', 'WebRTC'],
		source: 'https://google.com',
		visit: 'https://google.com',
		id: 2,
	},
	{
		title: 'Feetness',
		description: 'This website is designed entirely in react using material UI. It is a feetness application that lets users search for different exercises based on body parts. It also show similar exercises and display their youtude videos..',
		image: feetness,
		tags: ['React', 'ChatEngine', 'Firebase'],
		source: 'https://github.com/ndikumanaisaie/feetness_app.git',
		visit: 'https://ndikumanaisaie.github.io/feetness_app/dist',
		id: 3,
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
		title: 'To-do List',
		description: 'About"To-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
		image: todolist,
		tags: ['JavaScript', 'HTML5', 'CSS3', 'webpack'],
		source: 'https://github.com/ndikumanaisaie/To-do-list.git',
		visit: 'https://ndikumanaisaie.github.io/To-do-list/dist/',
		id: 5,
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
	{
		title: 'Ndikumana Isaie Portfolio',
		description: "While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
		image: '/images/2.png',
		tags: ['React', 'JavaScript'],
		source: 'https://google.com',
		visit: 'https://google.com',
		id: 9,
	},
];

export const timeLineData = [
	{ year: 2012, text: 'Introduction to programming' },
	{ year: '2012-2016', text: 'College + Programming for fun' },
	{ year: 2017, text: 'start building static websites with html and css' },
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