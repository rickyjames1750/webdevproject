function redirectToPermissions() {
  location.href = 'permission.html';
}

function redirectToContent() {
  location.href = 'content.html';
}

function redirectToChat() {
  localStorage.setItem('displayName', document.getElementById('displayName').value);
  location.href = 'chat.html';
}

function sendMessage() {
  // Check if the user is on the chat page before sending the message
  if (window.location.pathname.endsWith('chat.html')) {
    let message = document.getElementById('message').value;
    let displayName = localStorage.getItem('displayName');
    let messagesDiv = document.getElementById('messages');
    let messageElement = document.createElement('p');
    messageElement.textContent = `${displayName}: ${message}`;
    messagesDiv.appendChild(messageElement);
    document.getElementById('message').value = '';
  }
}
