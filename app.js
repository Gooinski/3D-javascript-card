//movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//items
const title = document.querySelector('.title');
const book = document.querySelector('.book img');
const newsletter = document.querySelector('.newsletter button');
const info = document.querySelector('.info h3');
const select = document.querySelector('.select');

//movement animation event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /25;
    let yAxis = (window.innerHeight / 2 - e.pageY) /25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});

//animate in
container.addEventListener("mouseenter", (e) => {
    card.style.transition = 'none';
    //popout
    title.style.transform = 'translateZ(150px)';
    book.style.transform = 'translateZ(200px) rotateZ(-90deg)';
    newsletter.style.transform = 'translateZ(50px)';
    info.style.transform = 'translateZ(100px)';
    select.style.transform = 'translateZ(75px)';
});

//animate out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popin
    title.style.transform = 'translateZ(0px)';
    book.style.transform = 'translateZ(0px) rotateZ(0deg)';
    newsletter.style.transform = 'translateZ(0px)';
    info.style.transform = 'translateZ(0px)';
    select.style.transform = 'translateZ(0px)';
});