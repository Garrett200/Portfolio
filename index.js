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



/*
let projectOpen;
const blurhtml = document.querySelector(".project__blur");
const visible = document.querySelector(".blur-visible");
window.addEventListener('load', function () {
    var imgs = document.getElementsByClassName('project');
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener('click', function () {
            for (var j = 0; j < imgs.length; j++) {
                imgs[j].style.transform = 'scale(1)';
            }
            let projectOpen = true;
            blurhtml.style.display = "flex";
            blurhtml.style.zIndex = "10";
            this.style.zIndex = "11";
            document.body.style.overflow = "hidden";
            this.style.position = 'fixed';
            this.style.left = (window.innerWidth - this.offsetWidth) / 2 + 'px';
            this.style.top = (window.innerHeight - this.offsetHeight) / 2 + 'px';
            if (projectOpen) {
                let projectOpen = false;
                blurhtml.style.display = "none";
                blurhtml.style.zIndex = "10";
                this.style.zIndex = "1";
                document.body.style.overflow = "scroll";
                this.style.position = 'relative';
            }
        });
    }
});
*/

var wrappers = document.getElementsByClassName('project__wrapper')
var descriptions = document.getElementsByClassName('project__description')
var imgs = document.getElementsByClassName('project__img')
window.addEventListener('load', function () {
    var projects = document.getElementsByClassName('project');
    Array.from(projects).forEach(function (project) {
        project.addEventListener('click', function () {
            project.classList.add('project-disabled');
            Array.from(descriptions).forEach(function (description) {
                description.style.display = "none";
                description.classList.add('project-disabled');
            })
            Array.from(imgs).forEach(function (img) {
                img.classList.add('project-disabled');
            })
            Array.from(wrappers).forEach(function (wrapper) {
                wrapper.classList.add('project-disabled');
            })
            var fullscreen = document.createElement('div');
            fullscreen.classList.add('fullscreen');

            var fullscreenProject = project.cloneNode(true);
            fullscreenProject.classList.add('fullscreen-project');
            fullscreen.appendChild(fullscreenProject);
            document.body.appendChild(fullscreen);
            fullscreen.addEventListener('click', function () {
                fullscreen.remove();
                project.classList.remove('project-disabled');
                Array.from(imgs).forEach(function (img) {
                    img.classList.remove('project-disabled');
                })
                Array.from(wrappers).forEach(function (wrapper) {
                    wrapper.classList.remove('project-disabled');
                })
                Array.from(descriptions).forEach(function (description) {
                    description.style.display = "flex";
                    description.classList.remove('project-disabled');
                });
            });
        });
    });
});