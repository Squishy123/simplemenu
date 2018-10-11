//Sample init
let pages = new Array(10).fill(undefined).map((e, i) => new Page(`Page ${i}`, "#"))
console.log(pages);
let menu = new SimpleMenu(document.querySelector("#simplemenu"), "assets/logo-vectr.png", pages, "basic");