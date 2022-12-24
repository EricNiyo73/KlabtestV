const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const text = document.getElementById('text');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const textValue = text.value.trim();
    const messageValue = message.value.trim();

    if(usernameValue === '') {
        setError(username, 'please!! Enter your name here');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(textValue === '') {
        setError(text, 'Title is required');
    } else if (textValue.length > 15) {
        setError(text, 'Title must be only 15 character.')
    } else {
        setSuccess(text);
    }

    if(messageValue === '') {
        setError(message, 'Please confirm your text');
    } else if (messageValue.length > 100) {
        setError(message, "your message must be only 100 characters");
    } else {
        setSuccess(message,'thank you');
    }

};


{/* <script>
   function sendEmail(){
    Email.send({
      Host : "smtp.gmail.com",
      Username : "ericniyokwizerwa1@gmail.com",
      message : "message",
      To : 'ericnemachine@gmail.com',
      From : document.getElementById("email").value,
      Subject : "This is the subject",
      Body : "Name:"+getElementById("username").value
      +"<br> Email:"+getElementById("email").value
      +"<br> Subject:"+getElementById("text").value
      +"<br> Message:"+getElementById("message").value
      }).then(
    message => alert("message sent successfully")
  );
  }
 </script> */}