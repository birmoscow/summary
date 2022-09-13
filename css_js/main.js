function fontsize() {
    let blockName = document.querySelector('#sp_ul'),
        blockCont = document.querySelector('#sp_ul'),
        blockTitle = document.querySelector('.title'),
        blockMain = document.querySelector('.container'),
        blockSkills = document.querySelector('.skills');

    let text = document.querySelectorAll('.text'),
        text_2 = document.querySelectorAll('.text_2'),
        text_title = document.querySelector('.title .text_title'),
        text_main = document.querySelectorAll('.main_text'),
        text_skill = document.querySelectorAll('.skill'),
        textLi = document.querySelectorAll('#ul_hr_li');

    let wName = blockName.offsetWidth;
        wCont = blockCont.offsetWidth;
        wTitle = blockTitle.offsetWidth,
        wC = blockMain.offsetWidth,
        wS = blockSkills.offsetWidth;

    text_title.style.fontSize = wTitle/10 + "px";
    for (let elem of text) {
        elem.style.fontSize = wName/6 + "px";
    }
    for (let elem of text_2) {
        elem.style.fontSize = wCont/7 + "px";
    }
    for (let elem of text_main) {
        elem.style.fontSize = wC/25 + "px";
    }
    for (let elem of text_skill ) {
        elem.style.fontSize = wS/20 + "px";
    }
    for (let elem of textLi ) {
        elem.style.fontSize = wS/20 + "px";
    }
}
window.onload = fontsize;
window.onresize = fontsize;  