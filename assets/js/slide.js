const btns = document.querySelectorAll('.btn')
const bobSlide = document.querySelectorAll('.bob')
const bg = document.querySelectorAll('.bg')
const content = document.querySelectorAll('.content')

var  slideNav = function(manual) {
 btns.forEach((btn) => {
    btn.classList.remove('active')
 })

 bobSlide.forEach((btn) => {
    btn.classList.remove('active')
 })

 bg.forEach((btn) => {
    btn.classList.remove('active')
 })

 content.forEach((btn) => {
    btn.classList.remove('active')
 })

 btns[manual].classList.add('active')
 bobSlide[manual].classList.add('active')
 bg[manual].classList.add('active')


}

btns.forEach((btn,i) => {
btn.addEventListener('click',() => {
    slideNav(i)
})
})
