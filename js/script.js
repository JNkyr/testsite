document.getElementById('whatsapp-link').addEventListener('click', function(e) {
    e.preventDefault(); // предотвратить переход по ссылке

    // Открыть окно выбора номера (можно использовать ваш собственный метод для этого)
    const phoneNumber = prompt('Введите номер телефона (в формате +7XXXXXXXXXX):');
    
    if (phoneNumber) {
        const message = 'Здравствуйте, я хочу сделать заказ';
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        window.open(whatsappURL, '_blank');
    }
});
