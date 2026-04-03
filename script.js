/*Script for the Build Guild Nagpur website*/

/*Opening new window functionality*/
document.querySelectorAll('a').forEach(link => {
    link.setAttribute('target', '_blank');
});


/*X and Y axis following the mouse cursor*/
    const xAxis = document.getElementById("x-axis");
    const yAxis = document.getElementById("y-axis");    

document.addEventListener("mousemove", (e) => {
    xAxis.style.top = `${e.clientY}px`;
    xAxis.style.left = `${e.clientX}px`;
    yAxis.style.left = `${e.clientX}px`;
    yAxis.style.top = `${e.clientY}px`;

    xAxis.style.transform = "translateY(-50%)";
    yAxis.style.transform = "translateX(-50%)";

    xAxis.style.transition = "top 0.15s ease, left 0.1s ease";
    yAxis.style.transition = "top 0.15s ease, left 0.1s ease";
});

console.log(e.clientX, e.clientY);


/*Navbar functionality*/
function homeFunction() {

    aboutDiv = document.getElementById("about");
    aboutDiv.style.backgroundColor = "#344b6a";
    aboutDiv.style.color = "inherit";

    homeDiv = document.getElementById("home");
    homeDiv.style.backgroundColor = "#a8f0ae";
    homeDiv.style.padding = "5px 20px";
    homeDiv.style.borderRadius = "20px";
    homeDiv.style.color = "#000000";
    
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function aboutFunction() {

    aboutDiv = document.getElementById("about");
    aboutDiv.style.backgroundColor = "#a8f0ae";
    aboutDiv.style.padding = "5px 20px";
    aboutDiv.style.borderRadius = "20px";
    aboutDiv.style.color = "#000000";
    
    window.scrollTo({
        top: 620,
        behavior: "smooth"
    });
}

function scheduleFunction() {
    
    window.scrollTo({
        top: 1230,
        behavior: "smooth"
    });
}

function faqFunction() {
    
    window.scrollTo({
        top: 2040,
        behavior: "smooth"
    });
}