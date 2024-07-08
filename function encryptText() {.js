document.addEventListener("DOMContentLoaded", function() {
    // Aquí puedes agregar funcionalidades adicionales si es necesario
    const primaryButton = document.querySelector('.button.primary');
    const secondaryButton = document.querySelector('.button.secondary');

    primaryButton.addEventListener('click', function() {
        alert('Primary Button Clicked');
    });

    secondaryButton.addEventListener('click', function() {
        alert('Secondary Button Clicked');
    });
});