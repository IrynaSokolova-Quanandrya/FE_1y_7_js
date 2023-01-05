/*
 * Спливання подій
 * event.target - цільовий (початковий) елемент
 * event.currentTarget - поточний елемент, на слухачі якого зловили подію
 */
// const parentRef = document.querySelector('#parent')

const refs = {
    parent: document.querySelector('#parent'),
    child: document.querySelector('#child'),
    innerChild: document.querySelector('#inner-child'),
  };
  
  refs.parent.addEventListener('click', onParentClick);
  // refs.child.addEventListener('click', onChildClick);
  // refs.innerChild.addEventListener('click', onInnerChildClick);
  
  function onParentClick(event) {
    console.log('Parent');
    console.log(event.currentTarget);
    console.log(event.target);
  }
  
  // function onChildClick(event) {
  //   console.log('Child');
  //   console.log(event.currentTarget);
  //   console.log(event.target);
  // }
  
  // function onInnerChildClick(event) {
  //   console.log('innerChild');
  //   console.log(event.currentTarget);
  //   console.log(event.target);
  // }