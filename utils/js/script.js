const nav_list = document.querySelectorAll('.list');
const sub_list = document.querySelectorAll('.sub_list');
const openBtn = document.querySelector('.humberger');
const navigationBox = document.querySelector('.nav_one');

nav_list.forEach((list) => {
    list.addEventListener('mouseenter', (e) => {
        const listIcon = list.querySelector('.fas');
        listIcon.classList.remove('fa-chevron-down');
        listIcon.classList.add('fa-chevron-up');
        const requiredList = list.lastElementChild;
        if(requiredList.classList.contains('sub_list')) {
            requiredList.style.display = 'flex';
        }
    })
});
nav_list.forEach((list) => {
    list.addEventListener('mouseleave', () => {
        const listIcon = list.querySelector('.fas');
        listIcon.classList.remove('fa-chevron-up');
        listIcon.classList.add('fa-chevron-down');
        const requiredList = list.lastElementChild;
        if(requiredList.classList.contains('sub_list')) {
            requiredList.style.display = 'none';
        }
    })
});

openBtn.addEventListener('click', (e) => {
    if(e.target.classList.contains('humberger')) {
        navigationBox.style.display = 'grid';
        openBtn.src = './utils/images/icon-close.svg';
        openBtn.classList.add('opened');
        e.target.addEventListener('click', (e) => {
            if(e.target.classList.contains('opened')) {
                navigationBox.style.display = 'none';
                openBtn.src = './utils/images/icon-hamburger.svg';
                openBtn.classList.remove('opened');
            } else {
                navigationBox.style.display = 'grid';
                openBtn.src = './utils/images/icon-close.svg';
                openBtn.classList.add('opened');
            }
        })
    }
});

