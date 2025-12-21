const notificarBtn = document.querySelector('#notificar');
notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(resultado => {
            console.log(`El resultado es: ${resultado}`);
        })
});

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted') {
        const notificacion = new Notification('Tienes una notificacion', {
            icon: 'img/ccj.png',
            body: 'Aprendiendo Notification en JS'
        });

        notificacion.onclick = () => {
            window.open('https://www.google.com')
        }
    }
})