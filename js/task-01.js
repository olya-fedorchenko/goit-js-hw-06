const listEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${listEl.length}`);

listEl.forEach(category => {
    const categoryName = category.firstElementChild.textContent;
    const categoryElementsCount = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElementsCount}`);
  });