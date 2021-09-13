function show_menu(){

    let menu = document.getElementById("my_menu");

    if(menu.className == "menu"){
        menu.className += " responsive";
    }else{
        menu.className = "menu";
    }
    
}