const reveals = document.querySelectorAll('.reveal');

function revealSections() {
    reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (revealTop < windowHeight - 100) {
            reveal.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);


const timelineItems = document.querySelectorAll('.timeline-item');

function revealTimeline(){

    timelineItems.forEach(item => {

        const itemTop = item.getBoundingClientRect().top;

        if(itemTop < window.innerHeight - 100){
            item.classList.add('show');
        }

    });

}

window.addEventListener('scroll', revealTimeline);
window.addEventListener('load', revealTimeline);

/* ==========================
   ABOUT TIMELINE ANIMATION
========================== */

const journeyItems =
document.querySelectorAll('.journey-item');

let journeyAnimated = false;

function revealJourneyTimeline() {

    const journeySection =
    document.querySelector('.journey-item');

    if (!journeySection || journeyAnimated) return;

    const sectionTop =
    journeySection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 150) {

        journeyItems.forEach((item,index) => {

            setTimeout(() => {

                item.classList.add('journey-show');

            }, index * 400);

        });

        journeyAnimated = true;
    }
}

window.addEventListener(
    'scroll',
    revealJourneyTimeline
);

window.addEventListener(
    'load',
    revealJourneyTimeline
);

/* ==========================
   SKILLS ANIMATION
========================== */

const skillCards =
document.querySelectorAll('.skill-reveal');

let skillsAnimated = false;

function revealSkills(){

    const skillsSection =
    document.querySelector('#skills');

    if(!skillsSection || skillsAnimated) return;

    const sectionTop =
    skillsSection.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 150){

        skillCards.forEach((card,index)=>{

            setTimeout(()=>{

                card.classList.add('skill-show');

            }, index * 150);

        });

        skillsAnimated = true;
    }
}

window.addEventListener('scroll', revealSkills);
window.addEventListener('load', revealSkills);

/* ==========================
   SOFT SKILLS ANIMATION
========================== */

const softSkillItems =
document.querySelectorAll('.soft-skills span');

let softSkillsAnimated = false;

function revealSoftSkills(){

    const softSkillsSection =
    document.querySelector('.soft-skills');

    if(!softSkillsSection || softSkillsAnimated) return;

    const sectionTop =
    softSkillsSection.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 150){

        softSkillItems.forEach((item,index)=>{

            setTimeout(()=>{

                item.classList.add('soft-show');

            }, index * 150);

        });

        softSkillsAnimated = true;
    }
}

window.addEventListener('scroll', revealSoftSkills);
window.addEventListener('load', revealSoftSkills);


const projectCards =
document.querySelectorAll('.project-reveal');

let projectsAnimated = false;

function revealProjects(){

    const projectsSection =
    document.querySelector('#projects');

    if(!projectsSection || projectsAnimated) return;

    const sectionTop =
    projectsSection.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 150){

        projectCards.forEach((card,index)=>{

            setTimeout(()=>{

                card.classList.add('project-show');

            }, index * 250);

        });

        projectsAnimated = true;
    }
}

window.addEventListener('scroll', revealProjects);
window.addEventListener('load', revealProjects);


/* ==========================
   HIGHLIGHT COUNTER
========================== */

const counters =
document.querySelectorAll('.counter');

let counterStarted = false;

function startCounter() {

    const highlightSection =
    document.querySelector('.highlight-card');

    if (!highlightSection || counterStarted) return;

    const sectionTop =
    highlightSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        counters.forEach(counter => {

            const target =
            +counter.getAttribute('data-target');

            let count = 0;

            const updateCounter = () => {

                if (count < target) {

                    count++;

                    counter.innerText = count + '+';

                    setTimeout(updateCounter, 250);

                }

            };

            updateCounter();

        });

        counterStarted = true;
    }
}

window.addEventListener('scroll', startCounter);
window.addEventListener('load', startCounter);

const highlightBoxes =
document.querySelectorAll('.highlight-box');

let highlightAnimated = false;

function revealHighlights(){

    const highlightSection =
    document.querySelector('.highlight-card');

    if(!highlightSection || highlightAnimated) return;

    const sectionTop =
    highlightSection.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100){

        highlightBoxes.forEach((box,index)=>{

            setTimeout(()=>{

                box.classList.add('show');

            }, index * 200);

        });

        highlightAnimated = true;
    }
}

window.addEventListener('scroll', revealHighlights);
window.addEventListener('load', revealHighlights);

/* ==========================
   EXPERIENCE ANIMATION
========================== */

const expItems =
document.querySelectorAll('.exp-reveal');

let experienceAnimated = false;

function revealExperience(){

    const experienceSection =
    document.querySelector('#experience');

    if(!experienceSection || experienceAnimated) return;

    const sectionTop =
    experienceSection.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 150){

        expItems.forEach((item,index)=>{

            setTimeout(()=>{

                item.classList.add('exp-show');

            }, index * 400);

        });

        experienceAnimated = true;
    }
}

window.addEventListener('scroll', revealExperience);
window.addEventListener('load', revealExperience); 

window.addEventListener('scroll',()=>{

    const navbar =
    document.querySelector('.navbar');

    if(window.scrollY > 50){

        navbar.classList.add('scrolled');

    }else{

        navbar.classList.remove('scrolled');

    }

});

const menuToggle =
document.querySelector('.menu-toggle');

const navLinks =
document.querySelector('.nav-links');

menuToggle.addEventListener('click',()=>{

    navLinks.classList.toggle('active');

});


/* ==========================
   TYPING EFFECT
========================== */

const text = "Aspiring Web Developer";

const typingElement =
document.getElementById("typing-text");

let index = 0;

function typeText(){

    if(index < text.length){

        typingElement.innerHTML +=
        text.charAt(index);

        index++;

        setTimeout(typeText,150);

    }

}

window.addEventListener("load",typeText);