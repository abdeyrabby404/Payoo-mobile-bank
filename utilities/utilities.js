function getIdValueFloat(id){
    const value = document.getElementById(id).value;
    const valueInFloat = parseFloat(value);
    return valueInFloat;
}

function getIdInnertext(id){
    const value = document.getElementById(id).innerText;
    const valueInFloat = parseFloat(value);
    return valueInFloat;
}

function innerTextUpdate(id,value){
    document.getElementById(id).innerText=value;
}

function handleToggole(id,status){
    document.getElementById(id).style.display=status;
}