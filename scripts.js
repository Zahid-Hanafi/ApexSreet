    function toggleSidebar() {
      const sidebar = document.getElementById("sidebar");
      sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
    }

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }


    window.onscroll = function() {
      const scrollBtn = document.querySelector('.scroll-top');
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "flex";
      } else {
        scrollBtn.style.display = "none";
      }
    };
	
	document.addEventListener("DOMContentLoaded", function() {
  const lightboxLinks = document.querySelectorAll('.lightbox');
  const lightboxOverlay = document.createElement('div');
  lightboxOverlay.classList.add('lightbox-overlay');
  const lightboxImage = document.createElement('img');
  const closeButton = document.createElement('span');
  closeButton.classList.add('lightbox-close');
  closeButton.textContent = '×';

  lightboxOverlay.appendChild(lightboxImage);
  lightboxOverlay.appendChild(closeButton);
  document.body.appendChild(lightboxOverlay);

  lightboxLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const imgSrc = link.getAttribute('href');
      lightboxImage.src = imgSrc;
      lightboxOverlay.style.display = 'flex';
    });
  });

  closeButton.addEventListener('click', function() {
    lightboxOverlay.style.display = 'none';
  });

  lightboxOverlay.addEventListener('click', function(e) {
    if (e.target === lightboxOverlay) {
      lightboxOverlay.style.display = 'none';
    }
  });
});
	
	
const meteorShower = document.getElementById('meteor-shower');

function createMeteor() {
    const meteor = document.createElement('div');
    meteor.classList.add('meteor');

    meteor.style.left = `${Math.random() * 100}vw`;
    meteor.style.top = `${Math.random() * 100}vh`;

    const size = Math.random() * 5 + 5;
    meteor.style.width = `${size}px`;
    meteor.style.height = `${size}px`;

    const speed = Math.random() * 2 + 1;
    meteor.style.animationDuration = `${speed}s`;

    const colors = ['darkblue', 'purple', 'cyan', 'yellow'];
    meteor.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    meteorShower.appendChild(meteor);

    setTimeout(() => {
        meteor.remove();
    }, speed * 1000);
}

setInterval(createMeteor, 150);

document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlides() {
    slides.forEach((slide) => (slide.style.display = "none")); 
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1; 
    slides[slideIndex - 1].style.display = "block"; 
    setTimeout(showSlides, 3000); 
  }

  showSlides(); 
});


document.addEventListener("DOMContentLoaded", () => {
  const marquee = document.querySelector(".image-marquee");
  const items = document.querySelectorAll(".marquee-item");


  items.forEach(item => {
    marquee.appendChild(item.cloneNode(true)); 
  });
});

function toggleSound() {
  var video = document.getElementById('myVideo');
  var soundButton = document.getElementById('soundButton');
  
  if (video.muted) {
    video.muted = false;
    soundButton.textContent = 'Mute'; 
  } else {
    video.muted = true;
    soundButton.textContent = 'Unmute'; 
  }
}


	
