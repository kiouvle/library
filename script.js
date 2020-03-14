const menuGroup = document.querySelector('.menu__group_english');
const menuLinkEnglish = document.querySelector('.menu__item_english');

menuLinkEnglish.addEventListener('click', function() {
  menuGroup.classList.toggle('menu__group_hidden');
})