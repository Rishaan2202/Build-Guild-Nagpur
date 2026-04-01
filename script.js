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
const home = document.getElementById("home");
document.addEventListener("click", function homeClick() {

    home.style.backgroundColor = "#ff0000";
    home.style.borderRadius = "5px";   
    home.style.padding = "10px 20px";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    
});