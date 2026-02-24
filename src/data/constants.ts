import type { NavLinksType, TechnologiesType } from "./types";
//import { v4 as uuidV4 } from 'uuid'
//Project Images
import clothexImg from '../assets/projects/clothex.png'
import belleFullImg from '../assets/projects/Bellefull.png';
import hotelMangImg from '../assets/projects/HotelMang.png';
import ngraveImg from '../assets/projects/Ngrave.png';
import miniApp from '../assets/projects/miniapp.jpeg';

export const navLinks:NavLinksType[] = [{
  title: "Home",
  id: "home",
  svgPath: "M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"
}, {
  title: "About Frank",
  id: "about",
  svgPath: "M120-120v-66.67h720V-120H120Zm66.67-160q-27 0-46.84-19.83Q120-319.67 120-346.67v-426.66q0-27 19.83-46.84Q159.67-840 186.67-840h586.66q27 0 46.84 19.83Q840-800.33 840-773.33v426.66q0 27-19.83 46.84Q800.33-280 773.33-280H186.67Zm0-66.67h586.66v-426.66H186.67v426.66Zm0 0v-426.66 426.66Z"
}, {
  title: "Experience",
  id: "experience",
  svgPath: "M146.67-186.67v-466.66 466.66-19.5 19.5Zm0 66.67q-27 0-46.84-19.83Q80-159.67 80-186.67v-466.66q0-27 19.83-46.84Q119.67-720 146.67-720H320v-93.33q0-26.34 19.83-46.5Q359.67-880 386.67-880h186.66q27 0 46.84 20.17Q640-839.67 640-813.33V-720h173.33q27 0 46.84 19.83Q880-680.33 880-653.33v207q-15.33-11.67-31.67-20.84-16.33-9.16-35-16.83v-169.33H146.67v466.66h317q3.66 17.67 9.66 34.34 6 16.66 14.34 32.33h-341Zm240-600h186.66v-93.33H386.67V-720ZM720-44.67q-80.33 0-137.83-57.5-57.5-57.5-57.5-137.83 0-80.33 57.5-137.83 57.5-57.5 137.83-57.5 80.33 0 137.83 57.5 57.5 57.5 57.5 137.83 0 80.33-57.5 137.83-57.5 57.5-137.83 57.5ZM738-244v-120h-41.33v133.18l94.66 89.49 27.34-27.34L738-244Z"
}, {
  title: "Projects",
  id: "projects",
  svgPath: "M146.67-226.67v-506.66 540-33.34Zm0 66.67q-27 0-46.84-20.17Q80-200.33 80-226.67v-506.66q0-26.34 19.83-46.5Q119.67-800 146.67-800H414l66.67 66.67h332.66q26.34 0 46.5 20.16Q880-693 880-666.67v267.34h-66.67v-267.34H453l-66.67-66.66H146.67v506.66H410V-160H146.67ZM611.33-59.33l-134.66-134 134.66-134 46.67 47-87 87 87 87-46.67 47Zm173.34 0-46.67-47 87-87-87-87 46.67-47 134.66 134-134.66 134Z"
}, {
  title: "Contact Frank",
  id: "contact",
  svgPath: "M480-400q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400ZM320-240h320v-23q0-24-13-44t-36-30q-26-11-53.5-17t-57.5-6q-30 0-57.5 6T369-337q-23 10-36 30t-13 44v23ZM733.33-80H226.67q-27 0-46.84-19.83Q160-119.67 160-146.67v-666.66q0-27 19.83-46.84Q199.67-880 226.67-880h334L800-640.67v494q0 27-19.83 46.84Q760.33-80 733.33-80Zm0-66.67v-464.66l-202-202H226.67v666.66h506.66Zm-506.66 0v-666.66 666.66Z"
},]

export const technologies:TechnologiesType[] = [{
  id: "0",
  name: 'HTML',
  imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
}, {
  id: "1",
  name: 'CSS',
  imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
}, {
  id: "2",
  name: 'Tailwind CSS',
  imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
}, {
  id: "3",
  name: 'SASS',
  imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg'
}, {
  id: "4",
  name: 'JavaScript',
  imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
}, {
  id: "5",
  name: 'TypeScript',
  imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
}, {
  id: "6",
  name: 'ReactJs',
  imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
}, {
  id: "7",
  name: 'PHP',
  imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg'
}, {
  id: "8",
  name: 'Git',
  imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
}, {
  id: "9",
  name: 'Github',
  imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'
}, {
  id: "10",
  name: 'Figma',
  imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'
},]

export const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: 'Jan',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: 'Feb',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: 'Mar',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: 'Apr',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: 'May',
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: 'June',
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: 'July',
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: 'Aug',
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    month: 'Sept',
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 55,
    month: 'Oct',
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    seoul: 48,
    month: 'Nov',
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    seoul: 25,
    month: 'Dec',
  },
];

export function valueFormatter(value: number | null) {
  return `${value}mm`;
}

export const projects = [{
  id: 1,
  imgSrc: miniApp,
  title: 'My Mini React App',
  projectInfo: 'Clothex is a clothing brand contributing to the growth of the society by producing top notch merches',

  techStack: [{
    stack: 'React Js',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
  }, {
    stack: 'Tailwind CSS',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
  }, {
    stack: 'Netlify',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg'
  }],

  liveLink: 'https://mini-react-app-iota.vercel.app/',
  sourceCode: 'https://github.com/FrankTopzy/Mini-React-App.git'
}, {
  id: 2,
  imgSrc: clothexImg,
  title: 'Clothex Clothing Store',
  projectInfo: 'Clothex is a clothing brand contributing to the growth of the society by producing top notch merches',

  techStack: [{
    stack: 'React Js',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
  }, {
    stack: 'Tailwind CSS',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
  }, {
    stack: 'Netlify',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg'
  }],

  liveLink: 'https://clothex-mu.vercel.app/',
  sourceCode: 'https://github.com/FrankTopzy/Clothex.git'
}, {
  id: 3,
  imgSrc: belleFullImg,
  title: 'Bellefull Mini Mart',
  projectInfo: 'Clothex is a clothing brand contributing to the growth of the society by producing top notch merches',

  techStack: [{
    stack: 'HTML',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
  }, {
    stack: 'CSS',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
  }, {
    stack: 'PHP',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg'
  }, {
    stack: 'Paystack',
    imgSrc: ''
  }],

  liveLink: 'https://franksminireactapp.netlify.app/',
  sourceCode: 'https://github.com/FrankTopzy/BelleFull.git'
}, {
  id: 4,
  imgSrc: ngraveImg,
  title: 'NGRAVE Website',
  projectInfo: 'Clothex is a clothing brand contributing to the growth of the society by producing top notch merches',

  techStack: [{
    stack: 'React Js',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
  }, {
    stack: 'TypeScript',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
  }, {
    stack: 'Tailwind CSS',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
  }, {
    stack: 'Netlify',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg'
  }],

  liveLink: 'https://franksminireactapp.netlify.app/',
  sourceCode: 'https://github.com/FrankTopzy/Ngrave.git'
}, {
  id: 5,
  imgSrc: hotelMangImg,
  title: 'Hotel Management Website',
  projectInfo: 'Clothex is a clothing brand contributing to the growth of the society by producing top notch merches',

  techStack: [{
    stack: 'React Js',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
  }, {
    stack: 'TypeScript',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
  }, {
    stack: 'Tailwind CSS',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
  }, {
    stack: 'Netlify',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg'
  }],

  liveLink: 'https://hotel-mang.vercel.app/',
  sourceCode: 'https://github.com/FrankTopzy/Hostel-Management'
}]