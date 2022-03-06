function Bigger() {
        var words=document.getElementById("big");
        words.style.fontSize = "24pt";     
}


function Change_Style() {
        var style_my_text=document.getElementById("big");
        style_my_text.style.fontWeight = "bold";
        style_my_text.style.color="blue";
        style_my_text.style.textDecoration = "underline";      
}
function unchange_style() {
        var style_my_text=document.getElementById("big");
        style_my_text.style.fontWeight = "normal";
        style_my_text.style.color="black";
        style_my_text.style.textDecoration = "none"; 
}
function Moo() {
        var style_my_text=document.getElementById("big");
        var suffix = "-Moo"
        style_my_text.style.textTransform="uppercase";
        style_my_text.value = style_my_text.value.split('.').join('') + suffix;
}