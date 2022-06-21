document.addEventListener('DOMContentLoaded', start());

function start(){
    menuMobile();
    statisticsHomePage();

    classificationStats();
}

// MENU MOBILE

function menuMobile(){
    let mobileBtn = document.querySelector('#mobile-btn');
let mobileMenu = document.querySelector('.header-mobile');

mobileBtn.addEventListener('click', () => {
        
    mobileMenu.classList.toggle('hidden-mobile');
    if(mobileBtn.classList.contains('fa-bars')){
        mobileBtn.classList.remove('fa-bars');
        mobileBtn.classList.add('fa-times');
    } else {
        mobileBtn.classList.add('fa-bars');
        mobileBtn.classList.remove('fa-times');
    }     
});
}


// ESTADISTIQUES INDEX //////////////////////////////////////////////////////

function statisticsHomePage(){
    let valueDisplay = document.querySelectorAll('.num');
    let interval = 3000;

valueDisplay.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    console.log(endValue);
    let duration = Math.floor( interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplay.textContent = startValue;
        if ( startValue === endValue){
            clearInterval(counter);
        }
        // options
        
    }, duration);
});
}

// ACCIO PAGE AND CLASSIFICACIO /////////////////////////////////////////////////

function classificationStats(){
    const draggable_list = document.querySelector('#draggable-list');

    // Store list Items
    const listItems = [];
    let classificationList = [];

    classificationFunction(classification);
    function classificationFunction(classification){

        classificationList = Object.entries(classification).sort((a,b)=> b[1]-a[1]);
        console.log(classificationList)

        createList();
    };

    // Afegir el llistat de persones al DOM
    function createList(){

            classificationList.forEach((person, index) => {
            const listItem = document.createElement('li');

            listItem.setAttribute('data-index', index);

            listItem.innerHTML = `
            <span class="number">${index + 1}</span>
            <div class="draggable" draggable="true">
                <p class="person-name text-dark">${person[0]}</p>
                <i class="fa-solid fa-equals"></i>
            </div>
            <span class="number">${person[1]}</span>
            `
            listItems.push(listItem);

            draggable_list.appendChild(listItem);
        });
    }
};
