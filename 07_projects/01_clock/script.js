const curr = document.querySelector(".currtime");



setInterval(() => {
    const date = new Date();

    curr.innerText = date.toLocaleTimeString()
}, 1000)




