// template_sgafzrp
// service_lo59kw2
// hDCgqlu9cChmWH-zT

let contrastToggle = false;
let isModalOpen = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
    }
}

function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_lo59kw2',
            'template_sgafzrp',
            event.target,
            'hDCgqlu9cChmWH-zT'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at garrettjrh@live.com"
            )
        })
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        console.log('toggle on');
        return document.body.classList += " dark-theme";
    }
    else {
        console.log('toggle off');
        return document.body.classList.remove("dark-theme");
    }
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}

// Get all the elements with the class name "project"
const projectElements = document.querySelectorAll('.project');

// Loop through all the project elements
projectElements.forEach((projectElement, index) => {
    // Get the project image inside the current project element
    const projectImage = projectElement.querySelector('.project__img');
    const projectImages = Array.from(projectElement.querySelectorAll('.project__img'));

    // Add a click event listener to the current project element
    projectElement.addEventListener('click', () => {

        // Create a new div element to display the bigger image with opaque background
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        // Create a new image element and set its source to the project image's source
        
        const projectWrapper = document.createElement('div');
        projectWrapper.classList.add('projectWrapper')
        
        const biggerImage = document.createElement('img');
        biggerImage.src = projectImage.src;

        const linksWrapper = document.createElement('div');
        linksWrapper.classList.add('linksWrapper');


        const linkResume = document.createElement('a');
        const linkGithub = document.createElement('a');
        const socialLink1 = document.createElement('img');
        const socialLink2 = document.createElement('img');

        socialLink1.classList.add('socialLink1');
        socialLink2.classList.add('socialLink2');

        socialLink1.src = 'assets/github.svg'
        socialLink2.src = 'assets/link-solid.svg'

        linkGithub.appendChild(socialLink1)
        linkResume.appendChild(socialLink2)

        linksWrapper.appendChild(linkGithub)
        linksWrapper.appendChild(linkResume)

        linkResume.classList.add('linkResume')
        linkGithub.classList.add('linkGithub');

        // Create left and right arrow buttons
        const leftArrow = document.createElement('img');
        const rightArrow = document.createElement('img');
        leftArrow.classList.add('leftArrow');
        rightArrow.classList.add('rightArrow');
        leftArrow.src = 'assets/chevron-left-solid.svg';
        rightArrow.src = 'assets/chevron-right-solid.svg';
        const leftBtn = document.createElement('button');
        const rightBtn = document.createElement('button');
        leftBtn.classList.add('leftbtn');
        rightBtn.classList.add('rightbtn');

        leftBtn.appendChild(leftArrow);
        rightBtn.appendChild(rightArrow);
        overlay.appendChild(leftBtn);

        // Add the bigger image to the overlay
        projectWrapper.appendChild(biggerImage);

        projectWrapper.appendChild(linksWrapper)

        overlay.appendChild(projectWrapper)

        overlay.appendChild(rightBtn);

        // Add the overlay to the body element
        document.body.appendChild(overlay);
        // Set the z-index of the project image to be higher than the overlay
        projectImage.style.zIndex = '9999';

        // Disable scrolling while the overlay is displayed
        document.body.style.overflow = 'hidden';

        // Add a click event listener to the overlay to remove it when clicked
        overlay.addEventListener('click', () => {
            // Remove the overlay from the DOM
            document.body.removeChild(overlay);

            // Reset the z-index of the project image
            projectImage.style.zIndex = 'auto';


            // Enable scrolling
            document.body.style.overflow = 'auto';
        })
    });
});
