const chat = document.getElementById('chat');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send');
const getLocationButton = document.getElementById('getLocation');
const socket = new WebSocket('wss://echo-ws-service.herokuapp.com');

socket.onmessage = (event) => {
    const message = event.data;
    addToChat(message);
};

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        socket.send(message);
        addToChat(`Вы: ${message}`);
        messageInput.value = '';
    }
});

getLocationButton.addEventListener('click', () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const locationLink = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=15/${latitude}/${longitude}`;
            addToChat(`Геолокация: ${locationLink}`);
        });
    } else {
        addToChat('Геолокация не поддерживается в вашем браузере.');
    }
});

function addToChat(message) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    chat.appendChild(messageElement);
    chat.scrollTop = chat.scrollHeight;
}
