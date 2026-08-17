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
const sections = [
  { threshold: 0,    id: 'snap-orangebg' },
  { threshold: 0.4,  id: 'snap-naturebg' },   // 40% down the page
  { threshold: 0.7,  id: 'snap-underwater' }, // 70% down the page
];

function updateBackground() {
  const scrollY = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = maxScroll > 0 ? scrollY / maxScroll : 0;

  let current = sections[0];

  for (const section of sections) {
    if (scrollPercent >= section.threshold) {
      current = section;
    }
  }

  for (const section of sections) {
    const el = document.getElementById(section.id);
    if (el) {
      el.classList.toggle('active', section.id === current.id);
    }
  }
}

window.addEventListener('scroll', updateBackground);
window.addEventListener('resize', updateBackground);
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
