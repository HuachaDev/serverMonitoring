
const btnshow = document.getElementById("show");
const label_right = document.getElementById("label_right");
const svg_show_id = document.getElementById("show_id");
const svg_hidden_id = document.getElementById("hidden");
const inputPassword = document.getElementById("password");
const labelText = document.getElementById("text");

btnshow.addEventListener('click' , function(e){
    e.preventDefault();
    if(labelText.textContent == "Show"){
        label_right.style.marginLeft="288px";
        labelText.innerHTML="Hidden";
        svg_show_id.style.display="none";
        svg_hidden_id.style.display="block";
        inputPassword.type="text";
        return ;

    }
        label_right.style.marginLeft="300px";
        labelText.innerHTML="Show";
        svg_show_id.style.display="block";
        svg_hidden_id.style.display="none";
        inputPassword.type="password";        
});