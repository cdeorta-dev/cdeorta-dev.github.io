document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        // Toggle nav
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});


let buton = document.querySelector(".btn-submit")
buton.addEventListener("click",(event)=>{
    event.preventDefault();
    const formData = new FormData(document.querySelector('form'));
    
    fetch('https://formsubmit.co/cdeorta.dev@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    .then(response => {
        if (response.ok) {
            // Crear y mostrar la notificación
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <span>¡Mensaje enviado con éxito!</span>
            `;
            document.body.appendChild(notification);
            
            // Mostrar la notificación
            setTimeout(() => notification.classList.add('show'), 100);
            
            // Eliminar la notificación después de 3 segundos
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => notification.remove(), 500);
            }, 3000);
            buton.disabled = true;
            // Limpiar el formulario
            document.querySelector('form').reset();
        }
    })
    .catch(error => {
        console.error('Error al enviar el formulario:', error);
    });
})


// window.onload = function() {
//     document.querySelector('.loader').style.display = 'none';
//   };
