let screen =document.getElementById("screen");
function display(num){
    screen.value+=num;
}
function calculate(){
    try{
        screen.value=eval(screen.value);

    }
    catch(err)
    { 
        alert("invalid")
    }

}
function del()
{
    screen.value=screen.value.slice(0,-1);


}
function delAll()
{
    screen.value = "";


}

