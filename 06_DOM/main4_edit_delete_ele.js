// two ways to create a new element in the DOM  One:line 2 and   Second :line 11 
function addLanguage(langName) {

    const li = document.createElement('li');
    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li)
}
addLanguage("python")
addLanguage("typescript")

function addOptiLanguage(langName) {
    const li = document.createElement('li');
    // text append karo to li vo abhi hawa mai hi hai
    li.appendChild(document.createTextNode(langName))
    // after this append ho gaya hai list mai  using querySelector  
    document.querySelector('.language').appendChild(li)
}
addOptiLanguage('golang')

//Edit
const secondLang = document.querySelector("li:nth-child(2)")
console.log(secondLang);
//secondLang.innerHTML = "Mojo"
const newli = document.createElement('li')
newli.textContent = "Mojo"
secondLang.replaceWith(newli)

//edit
const firstLang = document.querySelector("li:first-child")
firstLang.outerHTML = '<li>TypeScript</li>'

//remove
const lastLang = document.querySelector('li:last-child')
lastLang.remove()


