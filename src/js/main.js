// Show the selected section and hide the others when a nav link is clicked.

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.header__link, .header__link-bottom');
    const sections = document.querySelectorAll('.main__view');

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
        });
    });
});