function  setScreenValue(value){
    document.getElementById("result").value+= value;
}

function clearScreen()
{

    document.getElementById("result").value =" ";
    const resultElement = document.getElementById("result").value;
    const resltExpression = resultElement.trim();

    if (resultExpression == '')
    {
       resultElement.value= 'Enter an Expression';
       return; 
    }
    try{
        resultElement.value = eval(resultExpression);
    } catch(error) {
        resultElement.value= "Invalid Expression";
    }
}