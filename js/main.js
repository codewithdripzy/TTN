function scroll(){
    let footer = document.getElementById("footer");
    let footerassets = document.getElementsByClassName("footer-asset");

    if(window.scrollY >= footer.offsetTop){
        for (let i = 0; i < footerassets.length; i++) {
            footerassets[i].style.display = "block";
        }
    }else{
        for (let i = 0; i < footerassets.length; i++) {
            footerassets[i].style.display = "none";
        }
    }
}