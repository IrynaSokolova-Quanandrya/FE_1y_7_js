/*
 * Спливання подій
 * event.target - цільовий (початковий) елемент
 * event.currentTarget - поточний елемент, на слухачі якого зловили подію
 */

const refs = {
    parent: document.querySelector('#parent'),
    child: document.querySelector('#child'),
    innerChild: document.querySelector('#inner-child'),
  };
  
  refs.parent.addEventListener('click', onParentClick);
  refs.child.addEventListener('click', onChildClick);
  refs.innerChild.addEventListener('click', onInnerChildClick);
  
  function onParentClick(evt) {
    
  }
  
  function onChildClick(evt) {
    
  }
  
  function onInnerChildClick(evt) {
    
  }