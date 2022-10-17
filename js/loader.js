window.addEventListener('load', ()=>{
    let loader = document.getElementById("loader");

    loader.style.display = "flex";
    loader.style.flexDirection = "column";

    setTimeout(()=>{
        loader.style.display = "none";
    }, 1500);
})