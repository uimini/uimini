var sidebar = document.querySelector('.sidebar');
var contentWrapper = document.querySelector('.content-wrapper--sidebar');
var sidebarOpenBtn = document.querySelector('.sidebar__open-buttom .button-burger');
var sidebarCloseBtn = document.querySelector('.button-close');

sidebarOpenBtn.onclick = function(){
  this.classList.toggle("active");
  sidebar.classList.toggle("full");
  if(this.classList.contains('active')){
    sidebar.style="left: 0;";
  }else{
    sidebar.style="left: -240px;";
  }

}