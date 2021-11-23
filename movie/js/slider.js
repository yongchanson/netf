const setupScrolling = () => {
    const conainter = [...document.querySelectorAll('.content')];
    const nxtBtn = [...document.querySelectorAll('.nxtbtn')];
    const preBtn = [...document.querySelectorAll('.prebtn')];

    conainter.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })

        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })
}

// var curpos2 = document.documentElement.scrolL
// let prebtn = document.querySelector('.prebtn');
// let _scrollX = document.scrollLeft();

// prebtn.addEventListener('click', pre())

// function pre() {
//     window.scrollX(-200, 0);
// }