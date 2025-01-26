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
    id: "coffe-Hub",
    img: git ,
    name: "JavaScript Todo App",
    stack: ["< RESTful API />", "< Tailwind CSS />", "< React.js />"],
    live: "https://coffee-hub-nine.vercel.app/",
    source: "https://github.com/kamal7k/coffeeHub",
    description:
      "Complete Responsive and Interactive website with tons of useful fetaures.This is coffeHub where users can place orders and customize according to their need.There is Admin Panel for Admin with authority to cutomize according to their needs ",
  },



];

// const InprogressProjectsData = [

//   {
//     id: "ecommerce",
//     img: landingPage,
//     name: "Shopy",
//     stack: ["< ReactJS />", "< NodeJS />"],
//     live: "",
//     source: "",
//     description:
//       "",
//   },

// ];

export default { ProjectsData, InprogressProjectsData }