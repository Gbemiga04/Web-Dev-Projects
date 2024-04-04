function subscribe() {
    const subscribeElement = document.querySelector('.post-button-1');
          if (subscribeElement.innerHTML === 'Subscribe') {
            subscribeElement.innerHTML = 'Subscribed';
            subscribeElement.classList.add('active-subscribe');
          } else {
            subscribeElement.innerHTML = 'Subscribe'
            subscribeElement.classList.remove('active-subscribe');
          }
  }
  function subscribed() {
    const subscribeElement = document.querySelector('.follow-button');
          if (subscribeElement.innerHTML === 'Follow') {
            subscribeElement.innerHTML = 'Following';
            subscribeElement.classList.add('active-subscribe');
          } else {
            subscribeElement.innerHTML = 'Follow'
            subscribeElement.classList.remove('active-subscribe');
          }
  }
  function subscribed1() {
    const subscribeElements = document.querySelector('.follow-button-1');
          if (subscribeElements.innerHTML === 'Follow') {
            subscribeElements.innerHTML = 'Following';
            subscribeElements.classList.add('active-subscribe');
          } else {
            subscribeElements.innerHTML = 'Follow'
            subscribeElements.classList.remove('active-subscribe');
          }
  }
  function subscribed2() {
    const subscribeElementss = document.querySelector('.follow-button-2');
          if (subscribeElementss.innerHTML === 'Follow') {
            subscribeElementss.innerHTML = 'Following';
            subscribeElementss.classList.add('active-subscribe');
          } else {
            subscribeElementss.innerHTML = 'Follow'
            subscribeElementss.classList.remove('active-subscribe');
          }
  }