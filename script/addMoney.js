document.getElementById('add-money-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    
    const addAmount = document.getElementById('add-ammount').value;
    const addAmountFloat = parseFloat(addAmount);
    const pinNumber = document.getElementById('pin-number').value;
    const pinNumberInt = parseInt(pinNumber);
    const mainAmount = document.getElementById('main-ammount').innerText;
    const mainAmountFloat = parseFloat(mainAmount);


    if(addAmount){
        if(pinNumberInt === 1234){
        const sum = mainAmountFloat + addAmountFloat;
        document.getElementById('main-ammount').innerText=sum;
        alert("Money Added Successfully!");
    }
    else{
        alert(
            "Please enter correct PIN number"
        )
    }
    }
    else{
        alert("Please enter Amount!");
    }
});

document.getElementById('log-out')
.addEventListener('click', function(){
    window.location.href="./index.html"
})