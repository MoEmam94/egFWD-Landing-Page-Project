/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const frag = new DocumentFragment(); //creates a document fragment
let sections = document.querySelectorAll('section'); //declaring a variable to hold the sections element list
const navList = document.querySelector('#navbar__list'); //declaring a variable to hold the navigations list
const newSecBtn = document.querySelector('#newSecButton'); ////declaring a variable to hold the new section button
const goToTopBtn = document.querySelector('#goToTopButton'); ////declaring a variable to hold the go to top button

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const addSection = () => { //function for the add new section button
	let newSectionHTML =`<section id="section${sections.length + 1}" data-nav="Section ${sections.length + 1}">
      <div class="landing__container">
        <h2>Section ${sections.length + 1}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
      </div>
    </section>`;
    let newSection = document.createElement('section'); //create a new section element
    document.querySelector('main').appendChild(newSection); 
    newSection.outerHTML =  newSectionHTML;
    sections = document.querySelectorAll('section');
    createAndAdd(newSection); //adding new li tags and a tags for the new section
    navList.appendChild(frag);
    const linkList = document.getElementsByTagName('a');
    for (let i = 0; i < linkList.length; i++) { //adding textContent and scrolling functionality to the new a tags for the new section
	linkList[i].textContent = `Section ${i + 1}`;
    linkList[i].addEventListener('click', (evt) => {
    sections[i].scrollIntoView({behavior: 'smooth'});
    });
  }
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
let createAndAdd = (sec) => {
	let secListItem = document.createElement('li'); //create new list items for each section
    let secLink = document.createElement('a'); //create anchor tags
    secLink.textContent = sec.getAttribute('data-nav'); //assigning data-nav values as text content for anchor tags
    secListItem.appendChild(secLink);
    secLink.addEventListener('click', (evt) => { //clicking an item now scolls to the section
    sec.scrollIntoView({behavior: 'smooth'});
    });
    frag.appendChild(secListItem); //appending li elements to the document fragment
};
// build the nav
for (let section of sections) { //loops over sections and creates and adds li tags and a tags for each section
	createAndAdd(section);
}
navList.appendChild(frag); //appending the fragment to the Navigation List

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', () => {
	for (let section of sections) {
	let rect = section.getBoundingClientRect();
    (rect.top > 0 && rect.top < 300) ? section.classList.add('your-active-class') : section.classList.remove('your-active-class');
}});
/**
 * End Main Functions
 * Begin Events
 * 
*/
newSecBtn.addEventListener('click', () => { //new section button functionality
	addSection();
}); 

goToTopBtn.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'})); //go to top button functionality


