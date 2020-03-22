// Import stylesheets
import './style.css';

// Write Javascript code!

const hello = name => `Hello ${name}!`;
const welcome = hello('Adam');

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>${welcome}</h1>`;