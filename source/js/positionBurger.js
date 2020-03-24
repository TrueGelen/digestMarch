window.addEventListener('load', ()=>{
  const burger = document.querySelector('.burger')
  const wrapper = document.querySelector('#page-wrapper #wrapper')

  function position(){
    if(window.innerWidth > 1450){
      let y = wrapper.getBoundingClientRect().height / 2 - 48 - 15
      burger.style.transform = `translateY(${-y}px)`
    }else if (window.innerWidth <= 1450 && window.innerWidth > 1200){
      let y = wrapper.getBoundingClientRect().height / 2 - 48
      burger.style.transform = `translateY(${-y}px)`
    }else if (window.innerWidth <= 1200 && window.innerWidth > 1050){
      let y = wrapper.getBoundingClientRect().height / 2 - 60
      burger.style.transform = `translateY(${-y}px)`
    }else if (window.innerWidth <= 1050 && window.innerWidth > 768){
      let y = wrapper.getBoundingClientRect().height / 2 - 70
      burger.style.transform = `translateY(${-y}px)`
    }else{
      burger.style.transform = ``
    }
  }

  position()

  window.addEventListener('resize', ()=>{
    position()
    console.log(window.innerWidth)
  })
})