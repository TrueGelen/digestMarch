window.addEventListener('load', () => {

  const burger = document.querySelector('#burger')
  const menu = document.querySelector('#menu')
  const menuItems = menu.querySelectorAll('.menu__items a')
  const close = menu.querySelector('.menu__close')

  function showMenu() {
    burger.style.opacity = 0

    menu.classList.remove('hideMenu')
    menu.classList.add('showMenu')

    close.classList.remove('hideClose')
    close.classList.add('showClose')
  }

  function hideMenu() {
    burger.style.opacity = 1

    menu.classList.remove('showMenu')
    menu.classList.add('hideMenu')

    close.classList.remove('showClose')
    close.classList.add('hideClose')
  }

  burger.addEventListener('click', showMenu)

  close.addEventListener('click', hideMenu)

  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', () => {
      hideMenu()
    })
  }

})