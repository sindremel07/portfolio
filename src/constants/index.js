import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    python,
    tailwind,
    nodejs,
    mysql,
    school,
    passwordmanager,
    weatherdata,
    todoapp,
    threejs,
    csharp,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: mobile,
    },
    {
      title: "Full-Stack Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  ];
  
  const experiences = [
    {
      title: "When My Interest Started",
      name: "Secondary School",
      icon: school,
      iconBg: "#bababa",
      date: "Jan 2021 - Jan 2023",
      points: [
        "It was around this time I started getting my eye for programming and how all the technical things work, like computers and the internet",
        "I started off slow by creating custom Discord bots with discord.js and discord.py"
      ],
    },
    {
      title: "Started First Year In Highschool",
      name: "Glemmen VGS",
      icon: school,
      iconBg: "#bababa",
      date: "August 2023 - July 2024",
      points: [
        "In my first year of highschool I started developing simple websites using HTML, CSS and JavaScript, but after a few months I wanted to learn more..",
        "I started learning Python and MySQL, leading to my first actual program; SpaceDuck. This was a simple 2D game I created using pygame",
        "Near the end of the first school year I decided to learn Python better and a bit of PHP"
       ],
    },
    {
      title: "During The Summerbreak",
      name: "",
      icon: school,
      iconBg: "#bababa",
      date: "July 2024 - August 2024",
      points: [
        "During the Summerbreak I wanted to learn more about PHP & MySQL, so I made a simple website with 4 pages, login/register/forgot-password/verify-account",
        "The website was not made for anything except me learning more programming and getting more experience"
      ],
    },
    {
      title: "Second Year In Highschool",
      name: "Glemmen VGS",
      icon: school,
      iconBg: "#bababa",
      date: "August 2024 - Present",
      points: [
        "So now that the Second Year had started, I wanted to learn more about Software Development with Python and how servers/databases work and communicate, so I'm making a Password Manager using Python & MySQL",
        "I also want to learn more about API's and creating my own from scratch using C#, since I have already have a few projects where I use them"
      ],
    },
  ];
  
  const projects = [
    {
      name: "Password Manager",
      description:
        "A simple Password Manager with a Flask server using end-to-end encryption",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
      ],
      image: passwordmanager,
      source_code_link: "https://github.com/",
    },
    {
      name: "WeatherData to a MySQL Database",
      description:
        "Console Application that gets current values for weather on specified location using a weather API and saves it to a MySQL Database every full hour",
      tags: [
        {
          name: "CSharp",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
      ],
      image: weatherdata,
      source_code_link: "https://github.com/sindremel07/SaveWeatherToDatabase",
    },
    {
      name: "Simple To-Do-Application",
      description:
        "A simple Windows Forms application for a To-Do app, does not store data for going in and out of app",
      tags: [
        {
          name: "CSharp",
          color: "blue-text-gradient",
        },
      ],
      image: todoapp,
      source_code_link: "https://github.com/sindremel07/To-Do-Application",
    },
  ];
  
  export { services, technologies, experiences, projects };