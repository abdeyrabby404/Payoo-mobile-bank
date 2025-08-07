document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const accountNumberr = document.getElementById('account-number').value;

        const addAmount = document.getElementById('add-ammount').value;
        const addAmountFloat = parseFloat(addAmount);
        const pinNumber = document.getElementById('pin-number').value;
        const pinNumberInt = parseInt(pinNumber);
        const mainAmount = document.getElementById('main-ammount').innerText;
        // console.log(mainAmount);
        const mainAmountFloat = parseFloat(mainAmount);
        if(accountNumberr.length === 11){
            if (addAmount) {
            if (pinNumberInt === 1234) {
                const sum = mainAmountFloat + addAmountFloat;
                document.getElementById('main-ammount').innerText = sum;
                alert(addAmountFloat+ " "+"Money Added Successfully!");
            }
            else {
                alert(
                    "Please enter correct PIN number"
                )
            }
        }
        else {
            alert("Please enter Amount!");
        }
        }
        else{
        alert('Enter valid phone Number');
    }
    });

document.getElementById('log-out')
    .addEventListener('click', function () {
        window.location.href = "./index.html"
    })