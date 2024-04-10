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
  function enterKey(event) {
    if (event.key === "Enter") {
      post()
    }
  }

  function post(){
    const postValue = document.querySelector(".text-box").value
    const postContent = document.querySelector(".blank-template")
    if(postValue != ""){
      let userInteractions = {
        like : 0,
        comments : 0,
        reposts : 0,
        views : 0
      }
      const identityPic = "channel-20"
      const nameOfUser = "DrSimp"
      const nameOfUserName = "DrSimp119"
      
      
      document.querySelector(".blank-template").innerHTML = `<div class="tweet-containers"><div class="profile-pic-container"><img src="profile-pics/${identityPic}.jpg" alt="" /></div><div class="post-body-container"><div class="post-header"><div class="name-and-tag"><div class="username">${nameOfUser}</div><div class="tags">@${nameOfUserName}</div></div><div class="more-button"><img src="icons/more (1).png" alt="" /></div></div><div class="post-text"><p>${postValue}</p></div><div class="reactions-bar"><div class="icons-bar"><div class="comment-bar"><button class="comment-button"><div class="comment-container"><img src="icons/comment.svg" alt="" /></div></button><div class="tags">${userInteractions.comments}</div></div><div class="comment-bar"><button class="repost-button"><div class="comment-container"><img src="icons/music.png" alt="" /></div></button><div class="tags">${userInteractions.reposts}</div></div><div class="comment-bar"><button class="like-button"><div class="comment-container"><img src="icons/like.png" alt="" /></div></button><div class="tags">${userInteractions.like}</div></div><div class="comment-bar"><button class="views-button"><div class="comment-container"><img src="icons/vertical-bar-graph.png" alt="" /></div></button><div class="tags">${userInteractions.views}</div></div></div><div class="bookmark-share"><button class="bookmark-button"><div class="bookmark-container"><img src="icons/save-instagram.png" alt="" /></div></button><button class="bookmark-button"><div class="bookmark-container"><img src="icons/upload.png" alt="" /></div></button></div></div></div></div>`
      document.querySelector(".text-box").value = ""
  }
  }
  