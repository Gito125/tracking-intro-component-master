const menuToggler = document.querySelector('#menuToggler')
const burger = document.querySelector('#burger')
const close = document.querySelector('#close')
const mobileNav = document.querySelector('#mobileNav')

menuToggler.addEventListener('click', e => {
  console.log('clicked')
  if (!burger.classList.contains('hidden')) {
    burger.classList.add('hidden')
    close.classList.remove('hidden')
    mobileNav.classList.add('h-60')
    mobileNav.classList.remove('h-0')
  } else {
    burger.classList.remove('hidden')
    close.classList.add('hidden')
    mobileNav.classList.remove('h-60')
    mobileNav.classList.add('h-0')
  }
})