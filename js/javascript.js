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
  

document.addEventListener('DOMContentLoaded', function() {
  const certifikatLink1 = document.getElementById('certifikat-link-1');
  const certifikatLink2 = document.getElementById('certifikat-link-2');
  const certifikatLink3 = document.getElementById('certifikat-link-3');
  const certifikatLink4 = document.getElementById('certifikat-link-4');
  const certifikatLink5 = document.getElementById('certifikat-link-5');
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const closeBtn = document.querySelector('.close');

  certifikatLink1.addEventListener('click', function() {
      showImageModal('assets/img/certifikat/revoU.png');
  });

  certifikatLink2.addEventListener('click', function() {
      showImageModal('assets/img/certifikat/Telkom.png');
  });

  certifikatLink3.addEventListener('click', function() {
      showImageModal('assets/img/certifikat/dinasKerjaan.png');
  });

  certifikatLink4.addEventListener('click', function() {
      showImageModal('assets/img/certifikat/codepolitanAjax.png');
  });

  certifikatLink5.addEventListener('click', function() {
    showImageModal('assets/Cv.png');
  });

  closeBtn.addEventListener('click', function() {
      closeModal();
  });

  function showImageModal(imageUrl) {
      modalImage.src = imageUrl;
      modal.style.display = 'block';

    }

  function closeModal() {
      modal.style.display = 'none';
  }
});