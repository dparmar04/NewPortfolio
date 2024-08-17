import Reacticon from '../../assets/reactjs.svg';
import Tailwindicon from '../../assets/tailwindcss.svg';
import css from '../../assets/css.svg';
import html from '../../assets/html.svg';
import js from '../../assets/js.svg';
import WebBuilder from '../../assets/WebBuilder.png';
import Helverse from '../../assets/Helverse.png';
import Gerich from '../../assets/Gerich.png';
import GPT3 from '../../assets/GPT3.png';

export const projects = [
  {
    id: 1,
    name: 'Web Builder',
    imageUrl: WebBuilder,
    subtitle: 'A powerful web-building tool',
    description: 'This project helps users create stunning websites easily.',
    icons: [html,css,js],
    link: 'https://example.com/project1'
  },
  {
    id: 2,
    name: 'Helverse',
    imageUrl: Helverse,
    subtitle: 'A futuristic platform',
    icons: [html, css, js, Reacticon],
    link: 'https://helverse.netlify.app/'
  },
  {
    id: 3,
    name: 'Gerich Restaurant',
    imageUrl: Gerich,
    subtitle: 'Delicious culinary experiences',
    description: 'An app designed for food enthusiasts to explore new dishes.',
    icons: [html, Tailwindicon, js, Reacticon],
    link:'https://gerich-restuarant-bydhruv.netlify.app/'
  },
  {
    id: 4,
    name: 'GPT 3',
    imageUrl: GPT3,
    subtitle: 'Delicious culinary experiences',
    description: 'An app designed for food enthusiasts to explore new dishes.',
    icons: [html, Tailwindicon, js, Reacticon],
    link: 'https://gpt3bydhruv.netlify.app/'
  },
];

