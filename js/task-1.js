const li = document.querySelectorAll("ul .item");
console.log(`Number of categories: ${li.length}`);

for (const value of li) {
    console.log(`Category: ${value.firstElementChild.textContent}`);
    console.log(`Elements: ${value.lastElementChild.children.length}`);
}