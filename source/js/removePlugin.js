window.addEventListener('load', ()=>{
  const pageWrapper = document.querySelector('#page-wrapper')
  const wrapper = document.querySelector('#wrapper')
  const pluginStyles = document.querySelectorAll('link')[0]
  const href = pluginStyles.href

  // const script = document.querySelector('#off')
  // const scriptSrc = script.src
  
  function watcher(){
    if(window.innerWidth > 768){
      pageWrapper.id = 'page-wrapper'
      wrapper.id = 'wrapper'
      pluginStyles.href = href
      // document.write ('<script src="assets/js/main.js"></script>');
      // script.src = scriptSrc
      // pageWrapper.classList.remove('myPageWrapper')
      // wrapper.classList.remove('myWrapper')
    }else{
      pageWrapper.id = ''
      wrapper.id = ''
      pluginStyles.href = ''
      // script.src = ''
      // pageWrapper.classList.add('myPageWrapper')
      // wrapper.classList.add('myWrapper')
    }
  }

  watcher()

  window.addEventListener('resize', ()=>{
    watcher()
  })
})