"use strict";

const list = document.querySelector("#categories");
console.log(`Number of categories: ${list.children.length}`);

const listItem = document.querySelectorAll(".item");

const test = Array.from(listItem).forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);

  const childrenElements = element.firstElementChild.nextElementSibling;
  console.log(`Elements: ${childrenElements.children.length}`);
});
