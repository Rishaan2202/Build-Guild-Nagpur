document.addEventListener("mousemove", (e) => {
    const xAxis = document.getElementById("x-axis");
    const yAxis = document.getElementById("y-axis");    
    xAxis.style.top = `${e.clientY}px`;
    yAxis.style.left = `${e.clientX}px`;
});

const home = document.getElementById("Home");
home.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    home.style.padding = "10px 20px";
    home.style.backgroundColor = "#ff0000";
    home.style.borderRadius = "5px";
});