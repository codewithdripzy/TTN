window.onload = function(){
    if(document.readyState == 'complete'){
        setInterval(()=>{
            let event_list = document.getElementById('event-list');
            event_list.scrollLeft += 100;
        }, 3000)
    }
}

function scrollToDirection(direction){
    let event_list = document.getElementById('event-list');
    if(direction == 'Left'){
        event_list.scrollLeft -= 100;
    }
    else if(direction == 'Right'){
        event_list.scrollLeft += 100;
    }
}