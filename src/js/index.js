import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap';
import { preloader } from './preloader.js';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cursor from './cursor';
import LocomotiveScroll from 'locomotive-scroll';
import Menu from './menu';
import TweenMax from './TweenMax.min.js';
import charming from './charming.min.js';
import SplitText from './SplitText3.min.js';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import AnimatedLinksObjs from "./animatedLink.js";


const wrapElements = (elems, wrapType, wrapClass) => {
    elems.forEach(char => {
        const wrapEl = document.createElement(wrapType);
        wrapEl.classList = wrapClass;
        char.parentNode.appendChild(wrapEl);
        wrapEl.appendChild(char);
    });
}

Splitting();
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TweenMax);

// preload the images
preloader();

// All path elements in the page
const paths = [...document.querySelectorAll('path.path-anim')];
	
// Smooth scrolling initialization (using Lenis https://github.com/studio-freight/lenis)
const lenis = new Lenis({
    lerp: 0.1,
    smooth: true,
});
const scrollFn = () => {
    lenis.raf();
    requestAnimationFrame(scrollFn);
};
requestAnimationFrame(scrollFn);

// Animate the d attribute (path initial ) to the value in data-path-to;
// start when the top of its SVG reaches the bottom of the viewport and 
// end when the bottom of its SVG reaches the top of the viewport 
paths.forEach(el => {
    const svgEl = el.closest('svg');
    const pathTo = el.dataset.pathTo;

    gsap.timeline({
        scrollTrigger: {
            trigger: svgEl,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    })
    .to(el, {
        ease: 'none',
        attr: { d: pathTo }
    });
});


// new RippleEffect({
//     parent: document.querySelector('.content__bg content__bg--bottom'),
//     texture: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg',
//     intensity: 1,
//     strength: 2,
//     area: 4,
//     waveSpeed: 0.008,
//     speedIn: 1.5,
//     speedOut: 2,
//     easing: 'Expo.easeInOut',
//     hover: true,
//   });
  
//   new RippleEffect({
//     parent: document.querySelector('.demo2'),
//     texture: 'https://images.unsplash.com/photo-1588948378271-ae6cf0060ff8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
//     intensity: 1.5,
//     strength: .9,
//     area: 6,
//     waveSpeed: 0.01,
//     speedIn: 1.5,
//     speedOut: 2,
//     easing: 'Expo.easeInOut',
//     hover: true,
//   });
  
//   new RippleEffect({
//     parent: document.querySelector('.demo3'),
//     texture: 'https://images.unsplash.com/photo-1627729115394-16a6019b4064?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80',
//     intensity: 1.5,
//     strength: 3,
//     area: 6,
//     waveSpeed: 0.01,
//     speedIn: 1.5,
//     speedOut: 2,
//     easing: 'Expo.easeInOut',
//     hover: true,
//   });

  
 //buruasııs
// const quotes = document.querySelectorAll(".content__title");

// function setupSplits() {
//   quotes.forEach(quote => {
//     // Reset if needed
//     if(quote.anim) {
//       quote.anim.progress(1).kill();
//       quote.split.revert();
//     }

//     quote.split = new SplitText(quote, { 
//       type: "lines,words,chars",
//       linesClass: "split-line"
//     });

//     // Set up the anim
//     quote.anim = gsap.from(quote.split.chars, {
//       scrollTrigger: {
//         trigger: quote,
//         toggleActions: "restart pause pause reverse",
//         start: "top 50%",
//       },
//       duration: 0.6, 
//       ease: "circ.out", 
//       y: 80, 
//       stagger: 0.02,
//     });
//   });
// }

// ScrollTrigger.addEventListener("refresh", setupSplits);
// setupSplits();



// function setupSplits() {
  
//    const tlSplitBurrowing = gsap.timeline(), 
//         SplitBurrowing = new SplitText(".content__title-pre", {type:"words,chars"}), 
//         chars = SplitBurrowing.chars; //an array of all the divs that wrap each character
    
    
//     tlSplitBurrowing.from(chars, {
//       duration: 0.8,
//       opacity:0,
//       y:10,
//       ease:"circ.out",
//       stagger: 0.02,
//     scrollTrigger: {
//         trigger: ".content__title-pre",
//     //markers:true,
//         start: "top 75%",
//        end: "bottom center",
//         scrub:1
//       }
//     //,   onComplete: () => {SplitBurrowing.revert()}
//     }, "+=0");
    
//     // window.addEventListener('resize', function() {
//       // SplitBurrowing.revert();
//     // });
      
//     };
    
//     /*
//     ScrollTrigger.addEventListener("scrollEnd", function() {
//         SplitBurrowing.revert();
//     });
//     */
    
//     ScrollTrigger.addEventListener("refresh", setupSplits);
//     //ScrollTrigger.addEventListener("scrollEnd", () => SplitBurrowing.revert());
//     setupSplits();

const fx4Titles = [...document.querySelectorAll('.content__title2[data-splitting][data-effect4]')];
const fx2Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect2]')];
const fx3Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect3]')];
const fx6Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect6]')];
const fx5Titles = [...document.querySelectorAll('.content__interlude2[data-splitting][data-effect5]')];

fx4Titles.forEach(title => {
        
    const words = title.querySelectorAll('.word');
    words.forEach(word => {
        const chars = word.querySelectorAll('.char');

        gsap.set(chars, { 
            'will-change': 'opacity, transform', 
            x: (position,_,arr) => 150*(position-arr.length/2) 
        });
        gsap.to(chars, {
            ease: 'power1.inOut',
            x: 0,
            stagger: {
                grid: 'auto',
                from: 'center'
            },
            scrollTrigger: {
                trigger: word,
                start: 'center bottom+=30%',
                end: 'top top+=15%',
                scrub: true,
            }
        });
    });

    fx2Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');

        gsap.set(chars, { 'will-change': 'opacity, transform', opacity: 0, yPercent: 120, scaleY: 2.3, scaleX: 0.7, transformOrigin: '50% 0%' });
        gsap.to(chars, {
            duration: 1,
            ease: 'back.inOut(2)',
            
            opacity: 1,
            yPercent: 0,
            scaleY: 1,
            scaleX: 1,
            stagger: 0.03,
            scrollTrigger: {
                trigger: title,
                start: 'center bottom+=50%',
                end: 'bottom top+=40%',
                scrub: true,
                //start: 'center center',
                //end: '+=100%',
                //pin: title.parentNode,
            }
        });

    });

    fx3Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');

        gsap.set(chars, { 
            'will-change': 'transform', 
            transformOrigin: '50% 0%', 
            scaleY: 0
        });
        gsap.to(chars, {
            ease: 'back',
            opacity: 1,
            scaleY: 1,
            yPercent: 0,
            stagger: 0.03,
            scrollTrigger: {
                trigger: title,
                start: 'center bottom-=5%',
                end: 'top top-=20%',
                scrub: true
            }
        });

    });
    fx5Titles.forEach(title => {

        const chars = title.querySelectorAll('.char');

        gsap.set(chars, {
            'will-change': 'opacity, transform',
            opacity: 0,
            xPercent: () => gsap.utils.random(-200,200),
            yPercent: () => gsap.utils.random(-150,150)
        });
        gsap.to(chars, {
            ease: 'power1.inOut',
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            stagger: { each: 0.05, grid: 'auto', from: 'random'},
            scrollTrigger: {
                trigger: title,
                start: 'center bottom+=10%',
                end: 'bottom center',
                scrub: 0.9
            }
        });

    });

    fx6Titles.forEach(title => {
        
        const words = title.querySelectorAll('.word');
        words.forEach(word => {
            const chars = word.querySelectorAll('.char');

            gsap.set(chars[0].parentNode, { perspective: 1000 });
            gsap.set(chars, { 
                'will-change': 'opacity, transform', 
                opacity: 0, 
                rotationX: -90,
                yPercent: 50
            });
            gsap.to(chars, {
                ease: 'power1.inOut',
                opacity: 1,
                rotationX: 0,
                yPercent: 0,
                stagger: {
                    each: 0.03,
                    from: 0
                },
                scrollTrigger: {
                    trigger: word,
                    start: 'center bottom+=40%',
                    end: 'bottom center-=30%',
                    scrub: 0.9
                }
            });
        });

    });

});


[...document.querySelectorAll('a.menu__linkz')].forEach((el) => {
    const elPosition = [...el.parentNode.children].indexOf(el);
    const fxObj = AnimatedLinksObjs[elPosition];
    fxObj && new fxObj(el);
});




const menuEl = document.querySelector('.menu');

// preload the images set as data attrs in the menu items
preloader('.menu__item').then(() => {
    // initialize the smooth scroll
    const scroll = new LocomotiveScroll({el: menuEl, smooth: true});

    // initialize custom cursor
    const cursor = new Cursor(document.querySelector('.cursor'));

    // initialize menu
    new Menu(menuEl);
});




