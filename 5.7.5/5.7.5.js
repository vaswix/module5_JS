const btnSend = document.getElementsByClassName('btn-send')[0];


btnSend.addEventListener('click', () => {
    const inputPage = Number(document.getElementsByClassName('input-page-number')[0].value);
    const inputLimit = Number(document.getElementsByClassName('input-limit')[0].value);
    if (inputPage >= 1 && inputPage <= 10 || inputLimit >= 1 && inputLimit <= 10) {
        if (inputPage >= 1 && inputPage <= 10) {
            if (inputLimit >= 1 && inputLimit <= 10) {
                fetch(`https://picsum.photos/v2/list?page=${inputPage}&limit=${inputLimit}`)
                    .then(response => response.json())
                    .then(json => console.log(json))
                    .catch(() => console.log('error'));
            } else {
                console.log('Лимит вне диапазона от 1 до 10');
            }
        } else {
            console.log('Номер страницы вне диапазона от 1 до 10');
        }
    } else {
        console.log('Номер страницы и лимит вне диапазона от 1 до 10');
    }
});