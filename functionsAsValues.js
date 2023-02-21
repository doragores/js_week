const lowercaseMessage = (message) => {
  return message.toLowerCase();
}
const transform = (message, transformFunction) => {
  return transformFunction(message);
}

console.log(transform('WHY ARE YOU SHOUTING?', lowercaseMessage))

const notifyByEmail = (email) => {
  return "Email sent to: " + email
}

const notifyByText = (phoneNumber) => {
  return `Text sent to: ${phoneNumber}`
}

const notify = (notification,transformFunction) => {
  if (transformFunction === notifyByEmail){
    return notifyByEmail(notification)
  } else
    return notifyByText(notification)
}

console.log(notify('hello@makers.tech.test',notifyByEmail));
console.log(notify('+10000000000',notifyByText));