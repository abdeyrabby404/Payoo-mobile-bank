// step 1 : amra first e button ke dhorbo

document.getElementById('login-btn')
.addEventListener('click', function(event){
    event.preventDefault();

    const accountNumber = document.getElementById('account-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    const pinNumberInt = parseInt(pinNumber);
    // console.log(typeof accountNumber.length);

    if(accountNumber.length === 11){
        if(pinNumberInt === 1234){
            window.location.href="./main.html"
            alert('successfully Login! You got $1000 bonus!')
        }
        else{
            alert("Please give a correct Pin Number");
        }
    }
    else{
        alert("Please enter Correct Mobile Number")
    }

})