//Resizing the Banner font?
//window.onresize = resize();
//resize(); // call once at the beginning to set the initial font size
//
//function resize() {
//  if (document.getElementById('name') && document.getElementById('titles')) {
//    var banner = document.getElementById('banner');
//    var element = document.getElementById('name');
//    var element2 = document.getElementById('titles');
//    var width = banner.clientWidth;
//
//    element.style.fontSize = (width * 0.19) + 'px'; // adjust the multiplier as needed    
//    element2.style.fontSize = (width * 0.1) + 'px'; // adjust the multiplier as needed
//  }
//}
if (document.querySelector('.splash-image')) {
  //Splash Image Transition
  document.querySelector('.splash-image').addEventListener('click', function () {
    event.preventDefault();
    document.querySelector('.splash').classList.add('hiddenabove');
    document.querySelector('#splashwrapper').classList.remove('hiddenbelow');
  });
}
//All menu links will fade out the page!
var links = document.querySelectorAll('.menu a:not([target="_blank"])');

// Iterate over each link
for (var i = 0; i < links.length; i++) {
  // Add a click event listener to the link
  links[i].addEventListener('click', function (event) {
    // Prevent the default action (navigation)
    event.preventDefault();
    // Get the href from the clicked link
    var href = this.getAttribute('href');

    // Select all elements with the class "fade"
    var fadeElements = document.querySelectorAll('.fade');

    // Iterate over each fade element
    for (var j = 0; j < fadeElements.length; j++) {
      // Start the transition
      fadeElements[j].style.transition = 'opacity 0.5s ease-out';
      fadeElements[j].style.opacity = '0';
    }

    // Wait for the animation to complete, then navigate to the new page
    setTimeout(function () {
      window.location.href = href;
    }, 500); // Adjust this time to match the duration of your animation
  });
}
if (document.querySelector('.video-poster')) {
  //Video Thumbnail Interactivity?
  document.querySelector('.video-poster').addEventListener('click', function () {
    var iframe = document.querySelector('.video-iframe');
    var iframeSrc = iframe.src;
    iframe.src = iframeSrc + '&autoplay=1'; // Add autoplay param
    this.remove();
  });
}




//Youtube Full Frame automatically?
//Import Youtube API
//var tag = document.createElement('script');
//  tag.src = "https://www.youtube.com/iframe_api";
//  var firstScriptTag = document.getElementsByTagName('script')[0];
//  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//
//var player;
//  function onYouTubeIframeAPIReady() {
//    player = new YT.Player('player', {
//      height: '390',
//      width: '640',
//      videoId: 'YOUR_VIDEO_ID',
//      events: {
//        'onStateChange': onPlayerStateChange
//      }
//    });
//  }
//      
//  function onPlayerStateChange(event) {
//    if (event.data == YT.PlayerState.PLAYING) {
//      player.setSize(window.innerWidth, window.innerHeight);
//    }
//  };  
