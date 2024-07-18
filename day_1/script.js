const upvoteBox = document.getElementById('upvoteBox');

upvoteBox.addEventListener('click', function () {

    this.classList.toggle('active');

    const digitElements = document.querySelectorAll(".upvote-count-digit");

    let count = "";

    digitElements.forEach(digit => {
        count += digit.textContent;
    });

    let upvoteCount = parseInt(count);

    if (this.classList.contains('active')) {
        upvoteCount += 1;
        if (this.classList.contains('inactive')) {
            this.classList.remove('inactive');
        }
    } else {
        upvoteCount -= 1;
        if (!this.classList.contains('inactive')) {
            this.classList.add('inactive');
        }
    }

    const upvoteCountStr = upvoteCount.toString();
    const upvoteCountDigits = upvoteCountStr.split('');

    digitElements.forEach((digit, index) => {
        if (index < upvoteCountDigits.length) {
            let className = 'upvote-count-digit';
            if (parseInt(digit.textContent) > parseInt(upvoteCountDigits[index])) {
                className += ' digit-down';
            } else if (parseInt(digit.textContent) < parseInt(upvoteCountDigits[index])) {
                className += ' digit-up';
            }
            digit.textContent = upvoteCountDigits[index];
            digit.className = className;
        } else {
            digit.remove();
        }
    });

    if (upvoteCountDigits.length > digitElements.length) {
        const parentElement = digitElements[0].parentElement;
        for (let i = digitElements.length; i < upvoteCountDigits.length; i++) {
            const newDigit = document.createElement('span');
            newDigit.className = 'upvote-count-digit digit-up';
            newDigit.textContent = upvoteCountDigits[i];
            parentElement.appendChild(newDigit);
        }
    }
});