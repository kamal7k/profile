import landingPage from './../assets/portfolioImages/url.jpg'
import git from '../assets/git.jpg'
const ProjectsData = [
  {
    id: "1",
    img: git ,
    name: "Vyayamshala Gym",
    stack: ["< RESTful API />", "< Tailwind CSS />", "< React.js />", "< React.js />"],
    live: "https://vyayamshala-two.vercel.app/",
    source: "https://github.com/kamal7k/vyayamshala",
    description:
      "Vyayamshala is fully functional responsive gym application which features user sign-up for gym membership and admin panel to manage users and trainers detail",
  },
  {
    id: "2",
    img: git ,
    name: "Codepen Editor",
    stack: ["< RESTful API />", "< Tailwind CSS />", "< React.js />"],
    live: "https://codepen-zeta-five.vercel.app/",
    source: "https://github.com/kamal7k/codepen-clone",
    description:
      "This is the simple and functional code editing application. This editor supports HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript. This editor also includes authentication features.",
  },

  {
    id: "todo",
    img: git ,
    name: "JavaScript Todo App",
    stack: ["< JavaScript />  ", "< CSS />"],
    live: "",
    source: "https://github.com/kamal7k/ToDO",
    description:
      "Responsive JS todo app with color theme switcher. Enables users to add, delete, filter, and clear day-to-day tasks. It has user-friendly interface and navigation. I was able to practice my JavaScript and Sass skills in this project.",
  },



];

const InprogressProjectsData = [

  {
    id: "ecommerce",
    img: landingPage,
    name: "Shopy",
    stack: ["< ReactJS />", "< NodeJS />"],
    live: "",
    source: "https://github.com/kamal7k/shopy",
    description:
      "",
  },

];

export default { ProjectsData, InprogressProjectsData }