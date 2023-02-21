export function menu() {
    const contentContainer = document.querySelector('#content');
    const title = document.createElement('h1');
    title.innerText = "Bees Official Menu";
    title.classList.add('title');

    const description = document.createElement('p');
    description.innerText = "Food Food Food";
    description.classList.add('desc');

    contentContainer.appendChild(title);
    contentContainer.appendChild(description);
}