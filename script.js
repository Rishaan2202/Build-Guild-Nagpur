document.addEventListener("mousemove", (e) => {
    const xAxis = document.getElementById("x-axis");
    const yAxis = document.getElementById("y-axis");    
    xAxis.style.top = `${e.clientY}px`;
    xAxis.style.left = `${e.clientX}px`;
    yAxis.style.bottom = `${e.clientY}px`;
    yAxis.style.right = `${e.clientX}px`;
});

const home = document.getElementById("home");
document.addEventListener("onclick", function homeClick() {

    home.style.backgroundColor = "#ff0000";
    home.style.borderRadius = "5px";   
    home.style.padding = "10px 20px";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    
});