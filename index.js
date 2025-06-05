const signin = document.querySelector('.signin');
signin.addEventListener('click', ()=> {
  alert('are you sure')
  if(signin.textContent === 'Sign In')
  signin.textContent= 'Sign Out';
  else 
  signin.textContent = 'Sign In';
})

const membership = document.querySelectorAll('.membership')
const modal = document.querySelector('.modal');
membership.forEach((e)=> {
  e.addEventListener('click', () => {
  modal.style.display='flex';
})

})
const cross = document.querySelector('.cross');
cross.addEventListener('click', () => {
  modal.style.display='none';
})

const accordions = document.querySelectorAll('.accordion');
accordions.forEach((accordion)=> {
  accordion.addEventListener('click',()=> {
    let x = true;
    if(document.querySelector(`#accordion-${accordion.id}`).style.display === 'block'){
      x= false;
    }
    accordions.forEach(acc => {
      document.querySelector(`#accordion-${acc.id}`).style.display = 'none'
          document.querySelector(`#symbol-${acc.id}`).innerHTML='+'
    })
    if(x) document.querySelector(`#accordion-${accordion.id}`).style.display = 'block'
    if(x) document.querySelector(`#symbol-${accordion.id}`).innerHTML='&times;'
  })
})

window.addEventListener('click', (e)=> {
  if(e.target.classList.contains('modal'))
    modal.style.display = 'none'
})