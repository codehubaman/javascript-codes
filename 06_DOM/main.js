// className return the html collection so convert it into array using from
// line 20 using querySelector

// const items = document.getElementsByClassName("list-class");
// // conversion of html collection into array
// const item2 = Array.from(items);
// item2.forEach((d) => {
//     console.log(d.textContent);
//     d.style.backgroundColor = "red";
//     d.style.color = "white";
//     d.style.border = "1px solid black";
//     d.style.padding = "5px";
//     d.style.margin = "5px";
//     d.style.cursor = "pointer";
//     d.style.borderRadius = "5px";
// })

// querySelector return only one item
// querySelectorAll return all items in form of NodeList
const items = document.querySelectorAll('.list-class');

items.forEach((d) => {
    console.log(d.textContent);
    d.style.backgroundColor = "red";
    d.style.color = "white";
    d.style.border = "1px solid black";
    d.style.padding = "5px";
    d.style.margin = "5px";
    d.style.cursor = "pointer";
    d.style.borderRadius = "5px";
})

