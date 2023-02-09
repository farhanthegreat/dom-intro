console.log('first file')

const allTitles = document.getElementsByClassName('section-title');
console.log(allTitles);

const secondSection = document.getElementById('second-section');
secondSection.style.color = 'violet';
secondSection.style.backgroundColor = 'gray';


//query
//document.querySelector
//document.querySelectorAll
//parentNode, childNode

const secondList = document.getElementById('second-list');
const li = document.createElement('li');
li.innerText = 'My dynamic item';
secondList.appendChild(li);

const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
<h1> My dynamic section </h1>
<p> Extra text </p>
`

main.appendChild(section);
