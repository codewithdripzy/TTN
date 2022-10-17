window.onload = function(){
    let carousel_items = document.getElementsByClassName("carousel-item");
    let current_index = 0;

    show(current_index);

    setInterval(()=>{
        if(current_index >= (carousel_items.length - 1)){
            current_index = 0;
        }else{
            current_index++;
        }
        show(current_index);
        // console.log(current_index);
    }, 7000)

    function show(i){
        for (let index = 0; index < carousel_items.length; index++) {
            carousel_items[index].style.display = "none";  
        }
        carousel_items[i].style.display = "block";
    }
}