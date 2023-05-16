// header scroll
window.onscroll = () =>{
    // scrollY to do header
    let nav = document.querySelector('#navbar');

    nav.classList.toggle('sticky',window.scrollY > 100);

    // link active 
    let Section = document.querySelectorAll('section');
    let navLink = document.querySelectorAll('ul li a');

      Section.forEach(sec => {
        let Top = window.scrollY;
        let Offset = sec.offsetTop - 300;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(Top >= Offset && Top < Offset + height){
          // act link
          navLink.forEach(act =>{
            act.classList.remove('active');
            document.querySelector('.navbar .main-menu li a[href*='+ id +']').classList.add('active');
          });
          sec.classList.add('show-animated');
        }else{
          sec.classList.remove('show-animated');
        }
      });

    // hamburger menu
    let toggleIcon = document.getElementById('toggle-menu');
    let menuList = document.querySelector('.main-menu');
    let bgNav = document.querySelector('.navbar');

    toggleIcon.onclick = () => {
      toggleIcon.classList.toggle('bx-x');
      bgNav.classList.toggle('hamburger');
      menuList.classList.toggle('active');
    }
    
    // remove class if click link
    toggleIcon.classList.remove('bx-x');
    bgNav.classList.remove('hamburger');
    menuList.classList.remove('active');

    let Footer = document.querySelector('.footer');

    Footer.classList.toggle('show-animated', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
    

}

