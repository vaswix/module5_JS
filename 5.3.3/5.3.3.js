function f(async) {
    let xhr = new XMLHttpRequest();
    let numValue = document.getElementsByClassName("input-value")[0].value;
    if (Number(numValue) >= 1 && Number(numValue) <= 10) {
        const url = `https://picsum.photos/v2/list?limit=${numValue}`;
        xhr.open('GET', url, async);
        xhr.send();
        xhr.onload = function() {
            let result = JSON.parse(xhr.response);
            for (let i in result) {
                let el = document.createElement("img");
                el.setAttribute('src', result[i]['download_url']);
                el.setAttribute('width', 500);
                el.setAttribute('height', 350);
                let img = document.getElementsByClassName('images')[0];
                img.appendChild(el);
                console.log(result[i]['download_url']);
            }
        };

        xhr.onerror = function() {
            console.log('Ошибка запроса');
        };
    } else {
        console.log('число вне диапазона от 1 до 10');
    }
}


let sendButton = document.getElementsByClassName("btn-send")[0];
sendButton.addEventListener('click', f, true);