const menuGroupEnglish = document.querySelector('.menu__group_english');
const menuLinkEnglish = document.querySelector('.menu__item_english');
const informationPage = document.querySelector('.information');
const resourcesBookList = document.querySelector('.resources_books');
const menuLinkBooks = document.querySelector('.menu__item_books');
const menuLinkLinks = document.querySelector('.menu__item_links');
const menuGroupLinks = document.querySelector('.menu__group_links');
const menuLinkWorksheets = document.querySelector('.menu__item_worksheets');
const resourcesWorksheetList = document.querySelector('.resources_links');
const menuLinkIWB = document.querySelector('.menu__item_iwb');
const resourcesIWBList = document.querySelector('.resources__links-iwb');


menuLinkEnglish.addEventListener('click', function() {
  menuGroupEnglish.classList.toggle('menu__group_hidden');
  menuGroupLinks.classList.add('menu__group_hidden');
});

menuLinkBooks.addEventListener('click', function() {
  informationPage.classList.add('information_hidden');
  resourcesWorksheetList.classList.add('resources_hidden');
  resourcesIWBList.classList.add('resources_hidden');
  resourcesBookList.classList.remove('resources_hidden');
})

menuLinkLinks.addEventListener('click', function() {
  menuGroupLinks.classList.toggle('menu__group_hidden');
});

menuLinkWorksheets.addEventListener('click', function() {
  informationPage.classList.add('information_hidden');
  resourcesIWBList.classList.add('resources_hidden');
  resourcesBookList.classList.add('resources_hidden');
  resourcesWorksheetList.classList.remove('resources_hidden');
})

menuLinkIWB.addEventListener('click', function() {
  informationPage.classList.add('information_hidden');
  resourcesBookList.classList.add('resources_hidden');
  resourcesWorksheetList.classList.add('resources_hidden');
  resourcesIWBList.classList.remove('resources_hidden');
})