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

  //------------------------------------------

  const nectarinLogo = document.querySelector('#logonectarin')

  function buildLogoAndBurger() {
    if (window.innerWidth > 768) {
      burger.classList.remove('hideMenuOnMobile')
      nectarinLogo.classList.remove('hideMenuOnMobile')
    }
  }

  let curPosY = 0
  function menuWatcher() {
    if (window.innerWidth <= 768) {
      if (curPosY < window.pageYOffset) {
        burger.classList.add('hideMenuOnMobile')
        nectarinLogo.classList.add('hideMenuOnMobile')
        curPosY = window.pageYOffset
      } else {
        burger.classList.remove('hideMenuOnMobile')
        nectarinLogo.classList.remove('hideMenuOnMobile')
        curPosY = window.pageYOffset
      }
    }
  }

  // buildLogoAndBurger()
  window.addEventListener('resize', () => {
    // buildLogoAndBurger()
    buildLogoAndBurger()
  })

  window.addEventListener('scroll', () => {
    menuWatcher()
  })

})