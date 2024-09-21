const whatsappWidget = document.getElementById('whatsapp-widget');
const phoneOptions = document.getElementById('phone-options');

whatsappWidget.addEventListener('click', () => {
    phoneOptions.classList.remove('hidden');
});

const options = document.querySelectorAll('#phone-options .option');
options.forEach(option => {
    option.addEventListener('click', () => {
        const phone = option.getAttribute('data-phone');
        window.open(`https://wa.me/${phone}`, '_blank');
        phoneOptions.classList.add('hidden');
    });
});
