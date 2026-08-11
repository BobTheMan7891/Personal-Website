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