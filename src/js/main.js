// Show the selected section and hide the others when a nav link is clicked.
// Además, oculta el .main-top solo cuando se selecciona "settings", y lo muestra en cualquier otra sección.

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.header__link, .header__link-bottom');
    const sections = document.querySelectorAll('.main__view');
    const mainTop = document.querySelector('.main-top');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const sectionName = link.dataset.section;

            // Ocultar todas las secciones
            sections.forEach(section => {
                section.hidden = true;
            });

            // Mostrar la sección seleccionada
            const targetSection = document.querySelector(`.${sectionName}`);
            if (targetSection) {
                targetSection.hidden = false;
            }

            // Si es settings, ocultar el main-top; si no, mostrarlo
            if (sectionName === 'settings') {
                if (mainTop) mainTop.style.display = "none";
            } else {
                if (mainTop) mainTop.style.display = "flex";
            }
        });
    });
});