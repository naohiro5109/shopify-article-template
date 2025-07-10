document.addEventListener('DOMContentLoaded', ()=> {
  const accordions = document.querySelectorAll('.js-accordion');
  if(accordions.length){
    accordions.forEach((accordion) => {
      const accordionHead = accordion.querySelector('.accordion-head');
      const accordionBody = accordion.querySelector('.accordion-body');
      accordionHead.addEventListener('click', ()=> {
        if(!accordion.classList.contains('is-open')){
          accordion.classList.add('is-open');
          accordionBody.style.height = accordionBody.scrollHeight + 'px'
        }else {
          accordion.classList.remove('is-open');
          accordionBody.style.height = 0
        }
      })
    })
  }
})

document.addEventListener('DOMContentLoaded', ()=> {
  const moreButtons = document.querySelectorAll('.js-more-button');
  const itemLists = document.querySelectorAll('.js-item-list');

  if (itemLists.length && moreButtons.length) {
    itemLists.forEach((itemList, index) => {
      if (index > 3) {
        itemList.classList.add('hidden');
        moreButtons.forEach((moreButton) => {
          moreButton.addEventListener('click', () => {
            if (itemList.classList.contains('hidden')) {
              itemList.classList.remove('hidden');
              moreButton.classList.add('open');
            } else {
              itemList.classList.add('hidden');
              moreButton.classList.remove('open');
            }
          });
        });
      }
    });
  };
});