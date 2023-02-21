export function initialLoad() {

    const contentContainer = document.querySelector('#content');
    const title = document.createElement('h1');
    title.innerText = "Bees Wonderful Menu!";
    title.classList.add('title');
    const image = document.createElement('img');
    image.setAttribute('src', '../img/food.jpg');
    image.setAttribute('alt', 'Food');
    image.classList.add('food-pic');
    const description = document.createElement('p');
    description.innerText = "This Establishment is amazing beyond comparison! The food is formed from the freshest of crops, tenderized beyond your imagination. Eat here to gain superpowers blah blah yea food establishment rules!";
    description.classList.add('desc');

    contentContainer.appendChild(title);
    contentContainer.appendChild(image);
    contentContainer.appendChild(description);
}