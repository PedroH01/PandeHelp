var wallindex = 1;
show_wall();

function plus_walls(n){
    show_wall(wallindex += n);
}

function current_walls(n){
    show_wall(wallindex = n);
}

function show_wall(n){ 

    var i;
    var walls = document.getElementsByClassName("wall");
    var dots = document.getElementsByClassName("dot");

    if(n > walls.length){ wallindex = 1; }

    if(n < 1) { wallindex = walls.length; }
    
    for(i = 0; i < walls.length; i++){
        walls[i].style.display = "none";
    }

    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    walls[wallindex-1].style.display = "block";
    dots[wallindex-1].className += " active";

}