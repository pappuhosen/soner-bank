document.getElementById("button-deposit").addEventListener('click', function(){
    const depositIput = document.getElementById('deposit-input');
    const depositIputNumber= parseFloat(depositIput.value);
    
    const totalDeposit = document.getElementById('total-deposit')
    const depositTotal =  parseFloat(totalDeposit.innerText);
    
    totalDeposit.innerText = depositIputNumber + depositTotal;
    depositIput.value= ''

    // update balance
    const totalBalance =  document.getElementById('total-balance');
    const prevBalance =  parseFloat(totalBalance.innerText)
    totalBalance.innerText =  prevBalance + parseFloat(totalDeposit.innerText)
})


document.getElementById('button-withdraw').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputNumber = parseFloat(withdrawInput.value);

    const totalWithdraw =  document.getElementById('total-withdraw');
    const withdrawTotal = parseFloat(totalWithdraw.innerText);

    totalWithdraw.innerText = withdrawTotal + withdrawInputNumber;
    withdrawInput.value = ''

     // update balance
     const totalBalance =  document.getElementById('total-balance');
     const prevBalance =  parseFloat(totalBalance.innerText)
     totalBalance.innerText =  prevBalance - parseFloat(totalWithdraw.innerText)

})


