document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');

    card.addEventListener('mouseover', () => {
        card.style.transform = 'rotateY(180deg)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'rotateY(0deg)';
    });
});