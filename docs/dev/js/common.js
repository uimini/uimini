var sidebar = document.querySelector('.sidebar');
var contentWrapper = document.querySelector('.content-wrapper--sidebar');
var sidebarCloseBtn = document.querySelector('.button-close');
var sidebarBurgerBtn = document.querySelector('.sidebar-open .button-burger');

sidebarBurgerBtn.onclick = function(){
  console.log('help me');
  this.classList.toggle("active");
  sidebar.classList.toggle("full");
  if(this.classList.contains('active')){
    sidebar.style="left: 0;";
  }else{
    sidebar.style="left: -186px;";
  }

}