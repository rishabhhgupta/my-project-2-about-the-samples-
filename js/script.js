$(document).ready(function(){
    var toggler = "yes";
    $(".lines").click(function(){
        if (toggler=="yes"){
            $(".responsive-display").css("display","initial");
            toggler= "no"
        }
        else{
            $(".responsive-display").css("display","block");;
            toggler = "yes";
        }
    })
})