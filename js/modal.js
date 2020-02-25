var modalFeedback = document.querySelector('.modal-feedback'); //всплывающее окно
var form = modalFeedback.querySelector('form'); //форма, которую отправляем
var userNameField = document.querySelector('#user-name'); //поле имя-пользователя
var emailField = document.querySelector('#user-email'); //поле e-mail
var messageField = document.querySelector('#mess'); //поле с сообщением
var mailingBtn = document.querySelector('.map-descr .btn'); //кнопка отправить
var mdalCloseBtn = document.querySelector('.modal-close');//кнопка закрыть

var malingForm = document.querySelector('.mailing form');
var malingEmail = document.querySelector('#mailing');

var userName = '';
var email='';
var isStoreSupport = true; //поддержка localStorage

try {
  userName = localStorage.getItem('userName');
  email = localStorage.getItem('email');
} catch {
  isStoreSupport = false;
}

//форма подписки на нoвости
malingForm.addEventListener('submit', function(evt) {
  if(!malingEmail.value) {
    evt.preventDefault();
    console.log('Не заполнено поле email');
  }
})

//открытие модального окна
mailingBtn.addEventListener('click', function(evt){
  evt.preventDefault();
  modalFeedback.classList.add('modal-feedback--show');

  if (userName) {
    userNameField.value = userName;
    if (!email) {
      emailField.focus();
    } else {
      messageField.focus();
    }
  } else {
    userNameField.focus();
  };
  if (email) {
    emailField.value = email;
  };
});

//закрытие модального окна по кнопке
mdalCloseBtn.addEventListener('click', function(evt){
  evt.preventDefault();
  modalFeedback.classList.remove('modal-feedback--show');
  modalFeedback.classList.remove('modal-feedback--error');
})

//закрытие модального окна по кдавише ESC
window.addEventListener('keydown', function(evt) {
  if(evt.keyCode === 27) {
    evt.preventDefault();
    if (modalFeedback.classList.contains('modal-feedback--show')) {
      modalFeedback.classList.remove('modal-feedback--show');
      modalFeedback.classList.remove('modal-feedback--error');
    }
  }
})

//отправка формы
form.addEventListener('submit', function(evt) {
  if (!userNameField.value || !emailField.value || !messageField.value) {
    evt.preventDefault();
    modalFeedback.classList.remove('modal-feedback--error');
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add('modal-feedback--error');
  } else {
    if (isStoreSupport) {
      localStorage.setItem('userName', userNameField.value);
      localStorage.setItem('email', emailField.value);
    }
  }
})


