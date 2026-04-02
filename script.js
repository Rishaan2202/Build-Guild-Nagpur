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
document.querySelectorAll('.navbar li').forEach(item => {
    item.addEventListener("click", function () {

        item.style.backgroundColor = "#344b6a";
        item.style.borderRadius = "5px";   
        item.style.padding = "5px 10px";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});