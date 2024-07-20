// const tags = document.getElementsByClassName('tag');

// for (let i = 0; i < tags.length; i++) {
//     const element = tags[i];
//     element.addEventListener('click', function () {
//         if (!element.classList.contains('selected')) {
//             if (element.classList.contains('unselected')) {
//                 element.classList.remove('unselected');
//             }
//             element.classList.add('selected');
//         } else {
//             if (element.classList.contains('selected')) {
//                 element.classList.remove('selected');
//             }
//             element.classList.add('unselected');
//         }

//     });
// }

const tags = document.getElementsByClassName('tag');

for (let i = 0; i < tags.length; i++) {
    const element = tags[i];
    element.addEventListener('click', function () {
        const selectedTags = document.getElementsByClassName('selected');
        if (selectedTags.length < 5 || element.classList.contains('selected')) {
            if (!element.classList.contains('selected')) {
                if (element.classList.contains('unselected')) {
                    element.classList.remove('unselected');
                }
                element.classList.add('selected');
                jiggleRightSide(i+1, 'right-side-selected');
            } else {
                if (element.classList.contains('selected')) {
                    element.classList.remove('selected');
                }
                element.classList.add('unselected');
                setTimeout(() => {
                    element.classList.remove('unselected');
                }, 500);
                jiggleRightSide(i+1, 'right-side-unselected');
            }
        } else {
            element.classList.add('invalid');
            setTimeout(() => {
                element.classList.remove('invalid');
            }, 500);
        }
    });
}

function jiggleRightSide(index, animationClass) {
    let x = index + (5 - index % 5);
    if (index % 5 === 0) {
        x=0;
    }
    for (let j = index; j < tags.length && j < x; j++) {
        tags[j].classList.add(animationClass);
    }

    setTimeout(() => {
        for (let j = index; j < tags.length && j < x; j++) {
            tags[j].classList.remove(animationClass);
        }
    }, 500);
}
