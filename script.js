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
    console.log("enviar mensaje")
    const formData = new FormData(document.querySelector('form'));
console.log(formData)
    fetch('https://formsubmit.co/cdeorta.dev@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    .then(response =>
        {console.log(response)})
    .then(data => {
        console.log('Respuesta del servidor:', data);
    })
    .catch(error => {
        console.error('Error al enviar el formulario:', error);
    });
})


// window.onload = function() {
//     document.querySelector('.loader').style.display = 'none';
//   };