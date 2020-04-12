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
const resourcesIWBList = document.querySelector('.resources_links-iwb');
const menuLinkDiscovery = document.querySelector('.menu__item_discovery');
const resourcesDiscovery = document.querySelector('.resources_discovery');
const menuLinkRussian = document.querySelector('.menu__item_russian');
const resourcesRussian = document.querySelector('.resources_russian');
const menuLinkPsychology = document.querySelector('.menu__item_psychology');
const resourcesPsychology = document.querySelector('.resources_psychology');
const menuLinkService = document.querySelector('.menu__item_service');
const resourcesService = document.querySelector('.resources_service');

menuLinkEnglish.addEventListener('click', function() {
  console.log('menuGroupLinks', 'clicked');
  menuGroupEnglish.classList.toggle('menu__group_hidden');
  menuGroupLinks.classList.add('menu__group_hidden');
});

menuLinkBooks.addEventListener('click', function() {
  console.log('resourcesBookList', 'clicked');
  informationPage.classList.add('information_hidden');
  resourcesWorksheetList.classList.add('resources_hidden');
  resourcesIWBList.classList.add('resources_hidden');
  resourcesDiscovery.classList.add('resources_hidden');
  resourcesRussian.classList.add('resources_hidden');
  resourcesPsychology.classList.add('resources_hidden');
  resourcesService.classList.add('resources_hidden');
  resourcesBookList.classList.remove('resources_hidden');
})

menuLinkLinks.addEventListener('click', function() {
  console.log('menuGroupLinks', 'clicked');
  menuGroupLinks.classList.toggle('menu__group_hidden');
});

menuLinkWorksheets.addEventListener('click', function() {
  console.log('resourcesWorksheetList', 'clicked');
  informationPage.classList.add('information_hidden');
  resourcesIWBList.classList.add('resources_hidden');
  resourcesBookList.classList.add('resources_hidden');
  resourcesDiscovery.classList.add('resources_hidden');
  resourcesRussian.classList.add('resources_hidden');
  resourcesPsychology.classList.add('resources_hidden');
  resourcesService.classList.add('resources_hidden');
  resourcesWorksheetList.classList.remove('resources_hidden');
})

menuLinkIWB.addEventListener('click', function() {
  console.log('resourcesIWBList', 'clicked');
  informationPage.classList.add('information_hidden');
  resourcesBookList.classList.add('resources_hidden');
  resourcesWorksheetList.classList.add('resources_hidden');
  resourcesDiscovery.classList.add('resources_hidden');
  resourcesRussian.classList.add('resources_hidden');
  resourcesPsychology.classList.add('resources_hidden');
  resourcesService.classList.add('resources_hidden');
  resourcesIWBList.classList.remove('resources_hidden');
})

menuLinkDiscovery.addEventListener('click', function() {
  console.log('resourcesIWBList', 'clicked');
  informationPage.classList.add('information_hidden');
  resourcesBookList.classList.add('resources_hidden');
  resourcesWorksheetList.classList.add('resources_hidden');
  resourcesIWBList.classList.add('resources_hidden');
  resourcesRussian.classList.add('resources_hidden');
  resourcesPsychology.classList.add('resources_hidden');
  resourcesService.classList.add('resources_hidden');
  resourcesDiscovery.classList.remove('resources_hidden');

})

menuLinkRussian.addEventListener('click', function() {
  console.log('resourcesIWBList', 'clicked');
  informationPage.classList.add('information_hidden');
  resourcesBookList.classList.add('resources_hidden');
  resourcesWorksheetList.classList.add('resources_hidden');
  resourcesIWBList.classList.add('resources_hidden');
  resourcesDiscovery.classList.add('resources_hidden');
  resourcesPsychology.classList.add('resources_hidden');
  resourcesService.classList.add('resources_hidden');
  resourcesRussian.classList.remove('resources_hidden');
})

menuLinkPsychology.addEventListener('click', function() {
  console.log('resourcesIWBList', 'clicked');
  informationPage.classList.add('information_hidden');
  resourcesBookList.classList.add('resources_hidden');
  resourcesWorksheetList.classList.add('resources_hidden');
  resourcesIWBList.classList.add('resources_hidden');
  resourcesDiscovery.classList.add('resources_hidden');
  resourcesRussian.classList.add('resources_hidden');
  resourcesService.classList.add('resources_hidden');
  resourcesPsychology.classList.remove('resources_hidden');

})

menuLinkService.addEventListener('click', function() {
  console.log('resourcesIWBList', 'clicked');
  informationPage.classList.add('information_hidden');
  resourcesBookList.classList.add('resources_hidden');
  resourcesWorksheetList.classList.add('resources_hidden');
  resourcesIWBList.classList.add('resources_hidden');
  resourcesDiscovery.classList.add('resources_hidden');
  resourcesRussian.classList.add('resources_hidden');
  resourcesPsychology.classList.add('resources_hidden');
  resourcesService.classList.remove('resources_hidden');

})