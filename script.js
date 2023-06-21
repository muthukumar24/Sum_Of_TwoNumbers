function myFunction()
{
    var x = Number(document.getElementById("inputone").value)
    var y = Number(document.getElementById("inputtwo").value)

    var sum = x + y;

    if(sum >= 50 && sum<=80)
    {
        document.getElementById("output").innerHTML = 65;
    }
    else
    {
        document.getElementById("output").innerHTML = 80;
    }
}