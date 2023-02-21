export function contact() {
    const contentContainer = document.querySelector('#content');
    const title = document.createElement('h1');
    title.innerText = "Bees Official Contact Info";
    title.classList.add('title');

    const description = document.createElement('p');
    description.innerText = "Address: 32323 DFF Street";
    description.classList.add('desc');

    contentContainer.appendChild(title);
    contentContainer.appendChild(description);
}