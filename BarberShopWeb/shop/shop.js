document.addEventListener('DOMContentLoaded', function () {

    const itemButtons = document.querySelectorAll('.itemButton')
    itemButtons.forEach(itemButton => {
        itemButton.addEventListener('mouseenter', function () {
            itemButton.style.backgroundColor = '#68BBE3';

        });

        itemButton.addEventListener('mouseleave', function () {
            itemButton.style.backgroundColor = '';
        });
    });

    const cardOutline = document.querySelectorAll('.store-card')
    cardOutline.forEach(cardOut => {
        cardOut.addEventListener('mouseenter', function () {
            cardOut.style.borderColor = 'rgb(175, 138, 89)';
            cardOut.style.borderWidth = '3px';

        });

        cardOut.addEventListener('mouseleave', function () {
            cardOut.style.borderColor = '';
            cardOut.style.borderWidth = '';
        });
    });


});