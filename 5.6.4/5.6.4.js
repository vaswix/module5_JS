const btnSend = document.getElementsByClassName('btn-send')[0];


btnSend.addEventListener('click', async () => {
    const inputVal1 = document.getElementsByClassName('input-value')[0].value;
    const inputVal2 = document.getElementsByClassName('input-value')[1].value;
    if (Number(inputVal1) && Number(inputVal2) >= 100 && Number(inputVal1) && Number(inputVal2) <= 300) {
        fetch(`https://picsum.photos/${inputVal1}/${inputVal2}`)
            .then(response => response)
            .then(resp => console.log(resp))
            .catch(() => console.log('error'))
    } else {
        console.log('одно из чисел вне диапазона от 100 до 300')
    }
});