function passnum(val)
{
    console.log(val)
    document.getElementById("opscreen").value+=val
}
function clearvalo(){
    document.getElementById("opscreen").value=""

}
function equaltoo(){
    var text=document.getElementById("opscreen").value
    var ans=eval(text)
    document.getElementById("opscreen").value=ans
}
