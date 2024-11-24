import './src/style.css';

/* document.querySelector('#app').innerHTML = `
//  <div>
//    <button>Hello, World!</button>
//    <p>paragraph of ........<button>Hello!</button> text</p>
//  </div>
//`;
 */

// This is a single line comment
/* alert('Hello, World!'); */
// console.log('Hello, World!');

/* /////////////////////////////////////////////// */
// Footer year
const year = document.getElementById('year');
const currentYear = new Date().getFullYear();
year.setAttribute('daretime', currentYear.toString());
year.textContent = currentYear.toString();
/* /////////////////////////////////////////////////// */
