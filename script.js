var mytext = document.getElementById("mytext")
var textcount = document.getElementById("textcount")
var error = document.getElementById("error")
var maxchars = 200;
textcount.textContent=0 + "/" + maxchars;

mytext.addEventListener('input', function () {
    var messageLength = mytext.value.length;
    textcount.textContent = messageLength + "/" + maxchars;

    if(messageLength > maxchars){
        textcount.textContent="You have reached your limit.!";
        mytext.style.borderColor="red";
        textcount.style.color="red";
        
    }
    else{
        mytext.style.borderColor="black";
        textcount.style.color="black";
    }
});

