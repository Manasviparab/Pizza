menu_list_array = ["Veg Margherita Pizza",
                    "Veg Cheese Burst"
                    "Chickeen Afghan Pizza"
                    "Farm House Pizza"
                    "Joey Style Pizza"];

function getmenu(){
var htmldata;
<htmldata="<ol class='menu_list'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
    htmldata=html+'<li>'+ menu_list_array[i] + '</li>'
}
    htmldata=html+"</ol>"
    document.getElementById("display_menu").innerHTML= htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
    menu_list_array.sort;
    htmldata="<section class='cards>'"
    for (var i=0<menu_list_array.length;i++){

        htmldata=htmldata+'<div class="card"'>
                          +'<img src="image/pizzaImg.png"/>'
                          +menu_list_array[i] + '</div>'
    }
       htmldata=htmldata+"</section>"
       document.getElementById("display_addmenu").innerHTML= html;
}

function add_top(){
        var item=document.getElementById("add_item").value;
        menu_list_array.push(item);
        add_item();
}