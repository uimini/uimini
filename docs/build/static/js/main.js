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

// Message
function showMessage(message, messageBtn){
  var message = document.querySelectorAll(message),
      messageBtn = document.querySelectorAll(messageBtn),
      timeOut = 2000,
      // Becouse animation: fadeOutUp .3s
      timeOutUp = timeOut - 1700;
  console.log(messageBtn)
  // Only Message without button
  if(messageBtn.length === 0){
    for (var i = 0; i < message.length; i++) {
      var message = message[i];
      showAndHideMessage();
    }
  }


  // Message with button
  for (var i = 0; i < message.length; i++) {
    var message = message[i],
        messageBtn = messageBtn[i];

    messageBtn.onclick = function(){
      showAndHideMessage()
    }
  }

  function showAndHideMessage(){
    message.style.display = 'flex';
      
    // Animation
    message.classList.add('fadeInDown');
    message.classList.remove('fadeOutUp');
    
    setTimeout(function() {
      setTimeout(function(){
        message.style.display = 'none';
      }, timeOutUp);
      
      // Animation
      message.classList.add('fadeOutUp');
      message.classList.remove('fadeInDown');
    }, timeOut);
  }

}