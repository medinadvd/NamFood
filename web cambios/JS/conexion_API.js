const formEl = document.querySelector('.form');
import operacion from "./cookies.js";

formEl.addEventListener('submit', event => {
        event.preventDefault();

        const formData = new FormData(formEl);
        const data = new URLSearchParams(formData);

        fetch('http://localhost:8090/user/singUp', {
                method: 'POST',
                body: data

        })
        .then(res => res.json())
        .then(data => console.log(data))
        .then(operacion.setCookie(document.getElementById('.correo')))
        .then(window.alert(data)
        )
        .catch(error => console.log(error));       

        
});
