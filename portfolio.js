import emoji from "react-easy-emoji";

export const greetings = {
	name: "Innovynce Labs",
	title: "Welcome to Innovynce Labs",
	description:
		"We're an axciting and diverse firm that works with organizations across the globe to create amazing technology solutions.",
	resumeLink:
		"",
};

export const openSource = {
	githubUserName: "",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com",
	instagram: "https://www.instagram.com",
	twitter: "https://twitter.com",
};

export const skillsSection = {
	title: "What We do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Web Design & Web Development",
			lottieAnimationFile: "/lottie/skills/lap.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"Design and Develop Creative Wordpress Websites"
				),
				emoji(
					"Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("Building responsive static websites using Next.js"),
				
			],
			softwareSkills: [
				
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Wordpress",
					fontAwesomeClassname: "ic:baseline-wordpress",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},

				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		{
			title: "Mobile Application Development",
			lottieAnimationFile: "/lottie/skills/mobile.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("Design and Build Modern Apps"),
				emoji(
					"Building IOS/Andriod Apps"
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "Flutter",
					fontAwesomeClassname: "vscode-icons:file-type-flutter",
				},
				{
					skillName: "Android Studio",
					fontAwesomeClassname: "mdi:android-studio",
				},
				{
					skillName: "Firebase",
					fontAwesomeClassname: "vscode-icons:file-type-firebase",
				},
				
			],
		},
		{
			title: "Graphic Design",
			lottieAnimationFile: "/lottie/skills/graphic.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"Designing UI/UX using Figma"
				),
				emoji(
					"Digital brand design for any business"
				)
			],
			softwareSkills: [
				{
					skillName: "Figma",
					fontAwesomeClassname: "logos:figma",
				},
				{
					skillName: "Photo Shop",
					fontAwesomeClassname: "vscode-icons:file-type-photoshop",
				},
				{
					skillName: "Adobe XD",
					fontAwesomeClassname: "logos:adobe-xd",
				},
				{
					skillName: "Adobe Illustrator",
					fontAwesomeClassname: "logos:adobe-illustrator",
				},
				
				
			],
		},
		{
			title: "Individual Projects",
			lottieAnimationFile: "/lottie/skills/project.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"Desgin and develop individual software projects"
				),
				emoji(
					"Propersal writing and content writing"
				),
				
				
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
	],
};

export const SkillBars = [
];

export const educationInfo = [
	{
		schoolName: "Harvard University",
		subHeader: "Master of Science in Computer Science",
		duration: "September 2017 - April 2019",
		desc: "Participated in the research of XXX and published 3 papers.",
		grade: "Grade A",
		descBullets: [
			"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
];

export const experience = [
];

export const projects = [
	{
		name: "E-commerce Website",
		desc: "Nadara is a E-commerce website developed using Wordpress.",
		link: "https://nadara.ae/",
	},
	{
		name: "Sign Language detection Mobile Application ",
		desc: "This Mobile application build using Kotlin",
		github: "https://github.com/e-d-dyanfernando/PentaZen",
	},
	{
		name: "Racing App",
		desc: "",
		github: "https://github.com/prabhasha1115/Racing-app/tree/main/racingApp",
	},
];

export const feedbacks = [
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Innovynce Labs",
	description:
		"We're an axciting and diverse firm that works with organizations across the globe to create amazing technology solutions.",
	author: "",
	image: "",
	url: "",
	keywords: [
		"Innovynce Labs"
	],
}
