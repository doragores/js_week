class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.secondButtonEl = document.querySelector('#hide-message-button');
    
    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
       
    });

    this.secondButtonEl.addEventListener('click', () => {
      this.hideMessage();
    })
  }

  displayMessage() {
    // console.log('Thanks for clicking me!');
    const message = document.querySelector('#message-input').value;

    const messageElement = document.createElement('div');
    messageElement.id = 'message';
    messageElement.innerText = message

    document.querySelector('#main-container').append(messageElement);
  }

  hideMessage() {
    document.querySelector('#message').remove();
}}

module.exports = MessageView;