const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const formData = {
        name: name,
        email: email,
        subject: subject,
        message: message
    }
    
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Message sent successfully');
            name='';
            email='';
            subject='';
            message='';
        }else{
            alert('Message failed to send');
        }
    }

    xhr.send(JSON.stringify(formData));
})
