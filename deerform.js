$(document).ready(function(){
    $(".turn").on("click", function(){
        $(".cardrotate").addClass("rotate");
    })
    $(".loginturn").on("click", function(){
        $(".cardrotate").removeClass("rotate");
    })
})