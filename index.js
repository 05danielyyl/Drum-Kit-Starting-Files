
for(var i = 0; i< document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {

        var button = this.innerHTML;
        checksound(button);
        button_animation(button);
    });
}

document.addEventListener("keydown",function(event){
    checksound(event.key);
    button_animation(event.key);
});

function checksound(key){
    switch (key) {
        case "w":
            new Audio('sounds/crash.mp3').play();
            break;

        case "a":
            new Audio('sounds/kick-bass.mp3').play();
            break;

        case "s":
            new Audio('sounds/snare.mp3').play();
            break;

        case "d":
            new Audio('sounds/tom-1.mp3').play();
            break;

        case "j":
            new Audio('sounds/tom-2.mp3').play();
            break;

         case "k":
            new Audio('sounds/tom-3.mp3').play();
            break;

        case "l":
            new Audio('sounds/tom-4.mp3').play();
            break;
    
        default:
            break;
    }
}

function button_animation(currentkey){
    var activebutten = document.querySelector("."+currentkey);
    activebutten.classList.add("pressed");
    setTimeout(function(){activebutten.classList.remove("pressed")},100);

}