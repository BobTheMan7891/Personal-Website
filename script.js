// Ham menu
const hamMenu = document.querySelector('.ham-menu')

const offScreenMenu = document.querySelector('.off-screen-menu')

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active')
})

// CV Download anim
const cvDownloadButton = document.querySelector('#cv-download');

if (cvDownloadButton) {
  cvDownloadButton.addEventListener('click', () => {
    cvDownloadButton.classList.add('active');
  });
}

// Snapping
const bgAbout = document.querySelector('#about-page > main')

const sections = [
    { threshold: 0,    image: 'url(images/portalsorange.jpg)' },
    { threshold: 800,  image: 'url(images/portalsnature.jpg)' },
    { threshold: 1200, image: 'url(images/underwater.jpg)' },
  ];

  function updateBackground() {
    const scrollY = window.scrollY;
    let current = sections[0];

    for (const section of sections) {
      if (scrollY >= section.threshold) {
        current = section;
      }
    }

    bgAbout.style.backgroundImage = current.image;
  }

window.addEventListener('scroll', updateBackground);
updateBackground();


const snapSections = document.querySelectorAll('.snap-section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('is-visible', entry.isIntersecting);
    });
  },
  {
    threshold: 0.3,
  }
);

snapSections.forEach((section) => observer.observe(section));

// Preloading
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none'; // Hide when everything is loaded
});

// Array of all image URLs on your page
const imagesToCache = [
  'images/portalsnature.jpg',
  'images/portalsorange.jpg',
  'images/underwater.jpg',
];

// Execution function
function bulkPreloadImages(urls) {
  urls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
}

// Run immediately when script parses
bulkPreloadImages(imagesToCache);
