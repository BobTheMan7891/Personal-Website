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

// Change background on each snapping section
const path = window.location.pathname; 

const currentPage = path.split('/').pop(); 

if (currentPage == 'about.html'){
  const sections = [
    { threshold: 0,    id: 'snap-title' },
    { threshold: 0.3,  id: 'snap-orangebg' },
    { threshold: 0.6,  id: 'snap-naturebg' },
    { threshold: 0.9,  id: 'snap-underwater' },
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
} else if (currentPage == 'portfolio.html') {
  const sections = [
    { threshold: 0,    id: 'portfolio-title-bg' },
    { threshold: 0.25,  id: 'portfolio-nea-bg' },
    { threshold: 0.5,  id: 'portfolio-epq-bg' },
    { threshold: 0.75,  id: 'portfolio-website-bg' },
    { threshold: 0.8,  id: 'portfolio-other-bg' },
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
}


if (typeof updateBackground === 'function') {
  window.addEventListener('scroll', updateBackground);
  window.addEventListener('resize', updateBackground);
  updateBackground();
}

// Only show snap section when visible
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
function hideLoader() {
  const loader = document.getElementById('page-loader');
  if (loader) {
    loader.classList.add('hidden');
  }
}

// FIX: If the page is already loaded by the time this script runs, hide it immediately
if (document.readyState === 'complete') {
  hideLoader();
} else {
  // Otherwise, wait for the load event safely
  window.addEventListener('load', hideLoader);
}

// Intercept link clicks to show the loader before leaving the page
document.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (
    link && 
    link.href && 
    !link.hash && 
    link.target !== '_blank' && 
    link.hostname === window.location.hostname
  ) {
    e.preventDefault(); 
    const targetUrl = link.href;
    const loader = document.getElementById('page-loader');

    if (loader) {
      loader.classList.remove('hidden');
    }

    setTimeout(() => {
      window.location.href = targetUrl;
    }, 400); 
  }
});

// Fix for browser "Back/Forward" cache
window.addEventListener('pageshow', (e) => {
  if (e.persisted) {
    hideLoader();
  }
});
