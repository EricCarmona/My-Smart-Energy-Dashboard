// ---------------------------------------------
// MAIN DASHBOARD LOGIC / LÓGICA PRINCIPAL DEL PANEL
//
// This script handles navigation between dashboard sections and populates date/time selectors
// Este script gestiona la navegación entre secciones del panel y llena los selectores de fecha/hora
// ---------------------------------------------

// Show the selected section and hide the others when a nav link is clicked.
// Muestra la sección seleccionada y oculta las demás al hacer clic en un enlace de navegación.
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.header__link, .header__link-bottom');
    const sections = document.querySelectorAll('.main__view');
    const mainTop = document.querySelector('.main-top');

    // Navigation logic / Lógica de navegación
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const sectionName = link.dataset.section;

            // Hide all sections / Oculta todas las secciones
            sections.forEach(section => {
                section.hidden = true;
            });

            // Show the selected section / Muestra la sección seleccionada
            const targetSection = document.querySelector(`.${sectionName}`);
            if (targetSection) {
                targetSection.hidden = false;
            }

            // Hide top controls in settings / Oculta controles superiores en configuración
            if (sectionName === 'settings') {
                if (mainTop) mainTop.style.display = "none";
            } else {
                if (mainTop) mainTop.style.display = "flex";
            }
        });
    });

    // Fetch unique dates for the date selector / Obtiene fechas únicas para el selector de fechas
    fetch('php/getData.php')
        .then(response => response.json())
        .then(data => {
            // Get unique dates / Obtener fechas únicas
            const fechas = [...new Set(data.map(item => item.date))];

            // Select the datalist / Seleccionar el datalist
            const datalist = document.getElementById('date-options');

            // Clear datalist (in case called multiple times) / Limpiar datalist (por si se llama varias veces)
            datalist.innerHTML = '';

            // Add dates as options / Agregar fechas como opciones
            fechas.forEach(fecha => {
                const option = document.createElement('option');
                option.value = fecha;
                datalist.appendChild(option);
            });
        });

    // Fetch unique dates and times for selectors / Obtiene fechas y horas únicas para los selectores
    fetch('php/getData.php')
        .then(response => response.json())
        .then(data => {
            // Get unique dates / Obtener fechas únicas
            const fechas = [...new Set(data.map(item => item.date))];
            const datalistFechas = document.getElementById('date-options');
            datalistFechas.innerHTML = '';
            fechas.forEach(fecha => {
                const option = document.createElement('option');
                option.value = fecha;
                datalistFechas.appendChild(option);
            });

            // Get unique times / Obtener horas únicas
            const horas = [...new Set(data.map(item => item.time))];
            const datalistHoras = document.getElementById('time-options');
            datalistHoras.innerHTML = '';
            horas.forEach(hora => {
                const option = document.createElement('option');
                option.value = hora;
                datalistHoras.appendChild(option);
            });
        });

    // Theme mode switcher / Cambiador de modo de tema
    const modeRadios = document.querySelectorAll('input[name="mode"]');
    modeRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.nextElementSibling.classList.contains('settings__radio-circle--light')) {
                document.body.classList.add('light-mode');
            } else if (radio.nextElementSibling.classList.contains('settings__radio-circle--dark')) {
                document.body.classList.remove('light-mode');
            }
        });
    });

    // Font size changer / Cambiador de tamaño de fuente
    const fontSizeInput = document.querySelector('.settings__fontsize-input');
    fontSizeInput.addEventListener('input', () => {
        let size = fontSizeInput.value.toLowerCase();
        let html = document.documentElement;
        if (size === 'small') {
            html.style.fontSize = '55%'; // ~8.8px
        } else if (size === 'medium') {
            html.style.fontSize = '62.5%'; // 10px (default)
        } else if (size === 'large') {
            html.style.fontSize = '75%'; // 12px
        }
    });

    // Logout button functionality / Funcionalidad del botón de cerrar sesión
    const logoutBtn = document.querySelector('.settings__logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            // Opcional: aquí podrías hacer una petición AJAX a un PHP para destruir la sesión
            window.location.href = 'index.html'; // Cambia 'login.html' si tu archivo de login tiene otro nombre
        });
    }

});