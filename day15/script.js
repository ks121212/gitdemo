function performCaculation(operation){
    const num1=parseFloat(document.getElementById('num1').value);
    const num2=parseFloat(document.getElementById('num2').value);
    let result;
    switch (operation){
        case "Add":
        result = num1+num2;
        break;
        case 'Subtract':
        result = num1-num2;
        break;
        case 'Multiply':
        result = num1*num2;
        break;
        case 'Divide':
        result = num1/num2;
        break;
        default:
            result='Invalid operations'
    }
    document.getElementById('finalresult').textContent=result;
}