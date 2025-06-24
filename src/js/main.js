// Show the selected section and hide the others when a nav link is clicked.

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.header__link, .header__link-bottom');
    const sections = document.querySelectorAll('.main__view');
    const mainTop = document.querySelector('.main-top');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const sectionName = link.dataset.section;

            sections.forEach(section => {
                section.hidden = true;
            });

            const targetSection = document.querySelector(`.${sectionName}`);
            if (targetSection) {
                targetSection.hidden = false;
            }

            if (sectionName === 'settings') {
                if (mainTop) mainTop.style.display = "none";
            } else {
                if (mainTop) mainTop.style.display = "flex";
            }
        });
    });
});

fetch('http://localhost/lessen/repositorioProyecto2/My-Smart-Energy-Dashboard/src/php/readCSV.php')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error('Error:', error));
