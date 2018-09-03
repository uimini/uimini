// Sidebar
var sidebar = document.querySelector('.sidebar');
var sidebarBtn = document.querySelector('.sidebar-open-buttom .button-burger');

if(sidebarBtn){
  sidebarBtn.onclick = function(){
    this.classList.toggle('active');
    sidebar.classList.toggle('full');
    if(this.classList.contains('active')){
      sidebar.style='left: 0;';
    }else{
      sidebar.style='left: -240px;';
    }
  }
}

// Navbar
var navbarListMobile = document.querySelector('.navbar-list--mobile');
var navbarMenuMobileBtn = document.querySelector('.navbar-menu--mobile .button-burger');

if(navbarMenuMobileBtn){
  navbarMenuMobileBtn.onclick = function(){
    this.classList.toggle('active');
    if(this.classList.contains('active')){
      navbarListMobile.style='display: flex;'
    }else{
      navbarListMobile.style='display: none;'
    }
  }
}

// Alert
var alertUi = document.querySelectorAll('.ui-alert');
var alertBtnClose = document.querySelectorAll('.ui-alert .button-close');

if(alertUi){
  for (var i = 0; i < alertBtnClose.length; i++) {
    alertBtnClose[i].onclick = function(){
      this.parentNode.parentNode.removeChild(this.parentNode);
    }
  }

}
