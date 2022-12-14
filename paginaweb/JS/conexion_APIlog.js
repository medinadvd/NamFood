import { store, storeShow } from "./localStorage.js";

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {

        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("con", "application/json");
        myHeaders.append("Content-Type", "application/json");
        
        const correo = document.getElementById('correo').value;
        const password = document.getElementById('password').value;
        console.log(correo + " - " + password);

        var raw = JSON.stringify({
                "correo": correo,
                "password": password
        });

        var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
        };

        fetch("http://localhost:8090/user/logIn", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result)) 
                .catch(error => console.log('error', error));

       
        store(correo);
        window.location="ActionPage.html";
       
});
        
        
        
        
