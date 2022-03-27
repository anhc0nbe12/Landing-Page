const toggler_tablet_nav = document.querySelector(".navbar-tablet-list")
const bar = document.querySelector(".fa-bars")


bar.addEventListener('click', () => {
   toggler_tablet_nav.classList.toggle('d-block')
})


const navbar_tablet_2 = document.querySelectorAll(".navbar-tablet-list-heading")
navbar_tablet_2.forEach((item) => {
   item.addEventListener('click', () => {
      item.nextElementSibling.classList.toggle('d-block')
      if (item.nextElementSibling.classList.contains('d-block')){
         item.childNodes[3].classList.remove('fa-plus')
         item.childNodes[3].classList.add('fa-minus')
      } else {
         item.childNodes[3].classList.remove('fa-minus')
         item.childNodes[3].classList.add('fa-plus')
      }
   })
})

const trigger_navbar_3 = document.querySelectorAll(".navbar-tablet-list-child-heading")




trigger_navbar_3.forEach((item) => {
   // xóa cộng icon nếu như k có j để mở
   if(!item.nextElementSibling){
      item.childNodes[3].style.display = 'none'
   }

   item.addEventListener('click', ()=>{
      item.nextElementSibling?.classList.toggle('d-block')
      if (item.nextElementSibling.classList.contains('d-block')){
         item.childNodes[3].classList.remove('fa-plus')
         item.childNodes[3].classList.add('fa-minus')
      } else {
         item.childNodes[3].classList.remove('fa-minus')
         item.childNodes[3].classList.add('fa-plus')
      }
   })
})
