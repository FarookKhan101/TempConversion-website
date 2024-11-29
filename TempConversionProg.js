const myTemp=document.getElementById("myTemp");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelsius=document.getElementById("toCelsius");
const myP=document.getElementById("myP");
let temp;

function convert()
{
    if(toFahrenheit.checked)
    {
    temp=Number(myTemp.value);
    temp=temp * 9/5 + 32;
    myP.textContent=temp.toFixed(1)+`F`;
    }
    else if(toCelsius.checked)
    {
        temp=Number(myTemp.value);
        temp=(temp-32)*(5/9);
        myP.textContent=temp.toFixed(1)+"C";
    }
    else
    {
        myP.textContent +"Select a Unit";
    }

}