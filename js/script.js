$(document).ready(function(){
    $(".dropbtn").click(function(){
        $("#myDropdown").toggle();
    });           
    $(".right").click(function(){
         alert("Great job!");
    });
    $(".wrong").click(function(){
         alert("Ops, try again!");
    });
});