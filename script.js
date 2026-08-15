const hamMenu = document.querySelector('.ham-menu')

const offScreenMenu = document.querySelector('.off-screen-menu')

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active')
})


const cvDownloadButton = document.querySelector('#cv-download')

cvDownloadButton.addEventListener('click', () =>{
    cvDownloadButton.classList.add('active');
})

const bgAbout = document.querySelector('#about-page > main')

const sections = [
    { threshold: 0,    image: 'url(images/portalsorange.jpg)' },
    { threshold: 800,  image: 'url(images/portalsnature.jpg)' },
    { threshold: 1600, image: 'url(images/underwater.jpg)' },
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