const socket = io();

document.getElementById('chat-form1').addEventListener('submit', function(event) {
    event.preventDefault();
    const input = document.getElementById('message-input1');
    const message = `Usuario 1: ${input.value}`;
    socket.emit('chat message', message);
    input.value = '';
});

document.getElementById('chat-form2').addEventListener('submit', function(event) {
    event.preventDefault();
    const input = document.getElementById('message-input2');
    const message = `Usuario 2: ${input.value}`;
    socket.emit('chat message', message);
    input.value = '';
});

socket.on('chat message', function(msg) {
    const messages1 = document.getElementById('messages1');
    const messages2 = document.getElementById('messages2');
    const item1 = document.createElement('div');
    const item2 = document.createElement('div');
    item1.textContent = msg;
    item2.textContent = msg;
    messages1.appendChild(item1);
    messages2.appendChild(item2);
    messages1.scrollTop = messages1.scrollHeight;
    messages2.scrollTop = messages2.scrollHeight;
});
