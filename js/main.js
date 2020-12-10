'use strict'

let createHeader = (claves) => {
  let theadEl = document.createElement("thead");
  let trEl = document.createElement("tr");
  for (let i = 0; i < claves.length; i++) {
    let thEl = document.createElement("th");
    thEl.innerHTML = claves[i];
    trEl.appendChild(thEl);
}
  theadEl.appendChild(trEl);
  tableEl.appendChild(theadEl);
};