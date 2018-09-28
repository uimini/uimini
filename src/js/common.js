// TODO: Global es6

//
// Sidebar
//
var uiSidebar = document.querySelector('.sidebar');
var uiSidebarBtn = document.querySelector('.sidebar-open-button .button-burger');

if(uiSidebarBtn){
  uiSidebarBtn.addEventListener('click', function(){
    this.classList.toggle('active');
    uiSidebar.classList.toggle('full');
    if(this.classList.contains('active')){
      uiSidebar.style='left: 0;';
    }else{
      uiSidebar.style='left: -240px;';
    }
  });
}

//
// Navbar
//
var uiNavbarListMobile = document.querySelector('.navbar-list--mobile');
var uiNavbarMenuMobileBtn = document.querySelector('.navbar-menu--mobile .button-burger');

if(uiNavbarMenuMobileBtn){
  uiNavbarMenuMobileBtn.addEventListener('click', function(){
    this.classList.toggle('active');
    uiNavbarListMobile.classList.toggle('active');
  });
}

//
// Alert
//
var uiAlert = document.querySelectorAll('.ui-alert');
var uiAlertBtnClose = document.querySelectorAll('.ui-alert .button-close');

if(uiAlert){
  for (var i = 0; i < uiAlertBtnClose.length; i++) {
    uiAlertBtnClose[i].onclick = function(){
      this.parentNode.parentNode.removeChild(this.parentNode);
    };
  }
}

//
// Tag
//
var uiTag = document.querySelectorAll('.ui-tag');
var uiTagBtnClose = document.querySelectorAll('.ui-tag .button-close');

if(uiTag){
  for (var i = 0; i < uiTagBtnClose.length; i++) {
    uiTagBtnClose[i].onclick = function(){
      this.parentNode.parentNode.removeChild(this.parentNode);
    };
  }
}

// TODO: Global FIX func


//
// Message
//
function showMessage(message, messageBtn){
  var uiMessage = document.querySelectorAll(message),
      uiMessageBtn = document.querySelectorAll(messageBtn),
      timeOut = 2000,
      // Becouse animation: fadeOutUp .3s
      timeOutUp = timeOut - 1700;
  // console.log(uiMessageBtn)

  // Only Message without button
  if(uiMessageBtn.length === 0){
    for (var i = 0; i < uiMessage.length; i++) {
      var uiMessage = uiMessage[i];
      showAndHideMessage();
    }
  }

  // Message with button
  for (var i = 0; i < uiMessage.length; i++) {
    var uiMessage = uiMessage[i],
        uiMessageBtn = uiMessageBtn[i];

    uiMessageBtn.onclick = function(){
      showAndHideMessage();
    };
  }

  function showAndHideMessage(){
    uiMessage.style.display = 'flex';

    // Animation
    uiMessage.classList.add('fadeInDown');
    uiMessage.classList.remove('fadeOutUp');

    setTimeout(function() {
      setTimeout(function(){
        uiMessage.style.display = 'none';
      }, timeOutUp);

      // Animation
      uiMessage.classList.add('fadeOutUp');
      uiMessage.classList.remove('fadeInDown');
    }, timeOut);
  }

}

//
// Message Dialog
//

function uiMessage(){
  // [i] for forEach
  // var messageDialog = document.getElementsByClassName('ui-messageBox__wrapper');
  var uiMessageDialogBtnShow = document.getElementsByClassName('ui-messageBox-show');
  var uiMessageDialogBtnOk = document.getElementsByClassName('ui-messageBox-ok');
  var uiMessageDialogBtnCancel = document.getElementsByClassName('ui-messageBox-cancel');
  var uiMessageDialogBtnClose = document.getElementsByClassName('ui-messageBox-close');
  // Event for Show
  [].forEach.call(uiMessageDialogBtnShow, function(element, i) {
    element.addEventListener('click', function(){
      showMessageDialog(i);
    });
  });

  // Event for Close
  [].forEach.call(uiMessageDialogBtnClose, function(element, i) {
    element.addEventListener('click', function(){
      closeMessageDialog(i);
    });

    // Close click to window
    window.addEventListener('click', function(e){
      // Becouse [i]
      messageDialog = document.getElementsByClassName('ui-messageBox__wrapper')[i];
      if(e.target == messageDialog){
        messageDialog.style.display = "none";
      }
    });

  });

  // Event for Close Cancel
  // TODO: bug
  // Если кенцел отсутвует на 1 модалке и есть на второq в i отправляется 0.
  // закрывается 1. вторая без изменений
  // решение - новая функция+класс для окна с кенцел
  [].forEach.call(uiMessageDialogBtnCancel, function(element, i) {
    element.addEventListener('click', function(){
      //Exit
      closeMessageDialog(i);
      // Ok func
      messageDialogItCancel();
    });
  });


  // Event for Close OK
  [].forEach.call(uiMessageDialogBtnOk, function(element, i) {
    element.addEventListener('click', function(){
      //Exit
      closeMessageDialog(i);
      // Ok func
      messageDialogItOk();
    });
  });

  function showMessageDialog(i){
    // Becouse [i]
    var messageDialog = document.getElementsByClassName('ui-messageBox__wrapper')[i];
    messageDialog.style.display = "flex";
  }

  function closeMessageDialog(i){
    // Becouse [i]
    var messageDialog = document.getElementsByClassName('ui-messageBox__wrapper')[i];
    messageDialog.style.display = "none";
  }

} // end message
function messageDialogItCancel(){
  return true;
}
function messageDialogItOk(){
  return true;
}