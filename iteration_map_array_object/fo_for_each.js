const myCoding = [
    { name: 'JavaScript', type: 'dynamic' },
    { name: 'Python', type: 'dynamic' },
    { name: 'Java', type: 'static' },
    { name: 'C++', type: 'static' },
    { name: 'Go', type: 'dynamic' }
]


myCoding.forEach((item, index) => {
    console.log(`index ${index} : ${item.name} is a ${item.type} language`);
})

