// header scroll
window.onscroll = () =>{
    // scrollY to do header
    let nav = document.querySelector('#navbar');

    nav.classList.toggle('sticky',window.scrollY > 120);

    // link active 
let menuItems = document.querySelectorAll('.main-menu li a');

menuItems.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Hapus class "active" dari semua item menu
    menuItems.forEach(menuItem => {
      menuItem.classList.remove('active');
    });
    
    // Tambahkan class "active" pada item menu yang diklik
    this.classList.add('active');
    
    // Ambil ID target dari href
    let targetId = this.getAttribute('href');
    
    // Ambil elemen target berdasarkan ID
    let targetElement = document.querySelector(targetId);
    
    // Gulir ke elemen target
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// link active if arrow click
let arrow = document.getElementById('arrow');

arrow.addEventListener('click', function(e) {
  e.preventDefault();

  // Hapus class "active" dari semua item menu
  menuItems.forEach(menuItem => {
    menuItem.classList.remove('active');
  });

  // Tambahkan class "active" pada link Home
  document.querySelector('a[href="#home"]').classList.add('active');

  // Gulir ke elemen Home
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
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

}

