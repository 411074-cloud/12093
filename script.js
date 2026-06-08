document.addEventListener('DOMContentLoaded', ()=>{
  const navToggle = document.getElementById('navToggle')
  const nav = document.querySelector('.nav')
  if(navToggle){
    navToggle.addEventListener('click', ()=>{
      if(nav.style.display === 'flex') nav.style.display = ''
      else nav.style.display = 'flex'
    })
  }

  const form = document.getElementById('contactForm')
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault()
      const msg = document.getElementById('msg').value.trim()
      if(!msg){
        alert('請輸入訊息後再送出。')
        return
      }
      alert('已送出，感謝您的訊息！')
      form.reset()
    })
  }
})
