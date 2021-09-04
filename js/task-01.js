const ulEl = document.querySelectorAll('.item');
console.log(ulEl);
console.log(`В списке ${ulEl.length} категрии`);

for (let i = 0; i < ulEl.length; i++) {
    let item = ulEl[i];
    console.log(`Категория:`, item.firstElementChild.textContent);
    console.log(`Количество элементов:`, item.lastElementChild.children.length);
}
/* document.querySelectorAll(".item h2")
    .forEach(elem => console.log
    (`Категория: ${elem.textContent},
     Количество элементов: ${elem.nextElementSibling.children.length}`)
) */