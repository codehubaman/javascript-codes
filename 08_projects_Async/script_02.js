// setTimeout is a meyhod which take handler  and also take time interval and parameters also parameter is optional 
// setTimeout return the TimerID of the timer
// setTimeout(changeText, 2000); // 2 second later this function will execute

const changeText = function (text) {
    document.querySelector('h1').innerHTML = text;
};
const text = document.querySelector('h1').innerHTML;
let changeMe;

document.querySelector('#start').addEventListener('click', function () {
    // ek baar chalega function set time out  isme hm function ko execute kara rahe hai isme immediatelyexecute ho  jayega bina 2 second wait kare
    // changeMe = setTimeout(changeText(`best Js Series`), 2000);
    // ek baar chalega function set time out isme ham reference de rahe hai changeText function ka
    changeMe = setTimeout(changeText, 2000, "best JS series");
    console.log("Started");
});

document.querySelector('#stop').addEventListener('click', function () {
    clearTimeout(changeMe);
    changeText(text); // Reset to original text
    console.log("Stopped and Reset");
});
