// MOT ANIMATION ***************************************************************************************************************************************************************************************************************************************************************************************************************

TweenMax.to(".block_1", 1.9, {
    x: "-180",
    y: "-100",
    scale: "2.4",
    ease: Expo.easeInOut,
    delay: 0.9,
});
TweenMax.to(".block_1__mobile", 1.9, {
    x: "80",
    y: "-100",
    scale: "2.4",
    ease: Expo.easeInOut,
    delay: 0.9,
});
// ****************
TweenMax.to(".block_2", 1.9, {
    x: "-180",
    y: "200",
    scale: "1.2",
    ease: Expo.easeInOut,
    delay: 0.9,
});
TweenMax.to(".block_2__mobile", 1.9, {
    x: "90",
    y: "200",
    scale: "1.2",
    ease: Expo.easeInOut,
    delay: 0.9,
});
// *****************
TweenMax.to(".block_3", 1.9, {
    x: "180",
    y: "-240",
    scale: "1.6",
    ease: Expo.easeInOut,
    delay: 0.9,
});
TweenMax.to(".block_3__mobile", 1.9, {
    x: "180",
    y: "-240",
    scale: "1.6",
    ease: Expo.easeInOut,
    delay: 0.9,
});
// *****************
TweenMax.to(".block_4", 1.9, {
    x: "280",
    y: "240",
    scale: "0.8",
    ease: Expo.easeInOut,
    delay: 0.9,
});
TweenMax.to(".block_4__mobile", 1.9, {
    x: "210",
    y: "250",
    scale: "0.8",
    ease: Expo.easeInOut,
    delay: 0.9,
});
// ******************
TweenMax.to(".block_5", 1.9, {
    x: "380",
    y: "140",
    scale: "1.3",
    ease: Expo.easeInOut,
    delay: 0.9,
});
TweenMax.to(".block_5__mobile", 1.9, {
    x: "180",
    y: "140",
    scale: "1.3",
    ease: Expo.easeInOut,
    delay: 0.9,
});
// ******************
TweenMax.to(".block_6", 1.9, {
    x: "500",
    y: "200",
    scale: "2.4",
    ease: Expo.easeInOut,
    delay: 0.9,
});
TweenMax.to(".block_6__mobile", 1.9, {
    x: "-50",
    y: "300",
    scale: "2.4",
    ease: Expo.easeInOut,
    delay: 0.9,
});
// ******************
TweenMax.to(".block_7", 1.9, {
    x: "-220",
    y: "150",
    scale: "1.2",
    ease: Expo.easeInOut,
    delay: 0.9,
});
TweenMax.to(".block_7__mobile", 1.9, {
    x: "-200",
    y: "150",
    scale: "1.2",
    ease: Expo.easeInOut,
    delay: 0.9,
});
// ******************
TweenMax.to(".block_8", 1.9, {
    x: "220",
    y: "-150",
    scale: "1.6",
    ease: Expo.easeInOut,
    delay: 0.9,
});
TweenMax.to(".block_8__mobile", 1.9, {
    x: "30",
    y: "-140",
    scale: "1.6",
    ease: Expo.easeInOut,
    delay: 0.9,
});
// *****************
TweenMax.to(".block_9", 1.9, {
    x: "-100",
    y: "150",
    scale: "0.5",
    ease: Expo.easeInOut,
    delay: 0.9,
});
TweenMax.to(".block_9__mobile", 1.9, {
    x: "-100",
    y: "150",
    scale: "0.5",
    ease: Expo.easeInOut,
    delay: 0.9,
});
// *****************
TweenMax.to(".block_10", 1.9, {
    x: "-500",
    y: "-100",
    scale: "0.9",
    ease: Expo.easeInOut,
    delay: 0.9,
});
TweenMax.to(".block_10__mobile", 1.9, {
    x: "-150",
    y: "-40",
    scale: "0.9",
    ease: Expo.easeInOut,
    delay: 0.9,
});
// *****************
TweenMax.to(".block_11", 1.9, {
    x: "-120",
    y: "80",
    scale: "0.5",
    ease: Expo.easeInOut,
    delay: 0.9,
});
TweenMax.to(".block_11__mobile", 1.9, {
    x: "-120",
    y: "80",
    scale: "0.5",
    ease: Expo.easeInOut,
    delay: 0.9,
});













// CERCLE ET MENU ***************************************************************************************************************************************************************************************************************************************************************************************************************



// TweenMax.to(".box", 2.4, {
//     y: "-100%",
//     ease: Expo.easeInOut,
// });

TweenMax.from(".circle_shape", 3.9, {
    scale: "0",
    ease: Expo.easeInOut,
});
// TweenMax.from(".circle_shape_2", 2.4, {
//     scale: "0",
//     ease: Expo.easeInOut,
// });
// TweenMax.from(".circle_shape_3", 2.4, {
//     scale: "0",
//     ease: Expo.easeInOut,
// });
TweenMax.from(".navbar > div", 1.6, {
    opacity: 0,
    y: 60,
    ease: Expo.easeInOut,
    delay: 0.6,
});
// TweenMax.from(".site_logo", 1.6, {
//     opacity: 0,
//     y: 40,
//     ease: Expo.easeInOut,
//     delay: 0.6,
// });

gsap.from('.name_one', 2.5, {
    y: '100%',
    ease: Expo.easeInOut,
    delay: 2.5
})

TweenMax.from(".showreel", 1.6, {
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut,
    delay: 0.6,
});
TweenMax.staggerFrom(
    ".site_menu > div",
    1,
    {
        opacity: 0,
        y: 60,
        ease: Power2.easeOut,
    },
    0.2
);












// TITRE ***************************************************************************************************************************************************************************************************************************************************************************************************************

TweenMax.from("#dev__1", 2.6, {
    opacity: 0,
    y: '40%',
    ease: Expo.easeInOut,
    delay: 2.8,
});
// ***Disparition du mot
TweenMax.to("#dev__1", 2.6, {
    // opacity: 0,
    y: '60%',
    ease: Expo.easeInOut,
    delay: 5.8,
});
// ******

TweenMax.from("#front__1", 2.6, {
    opacity: 0,
    y: '40%',
    ease: Expo.easeInOut,
    delay: 3.6,
});
// ***Disparition du mot
TweenMax.to("#front__1", 2.6, {
    // opacity: 0,
    y: '60%',
    ease: Expo.easeInOut,
    delay: 6.4,
});
// ******

TweenMax.from("#dev__1__mobile", 2.6, {
    opacity: 0,
    y: '40%',
    ease: Expo.easeInOut,
    delay: 2.8,
});
TweenMax.from("#dev__1__mobile2", 2.6, {
    opacity: 0,
    y: '40%',
    ease: Expo.easeInOut,
    delay: 3.6,
});
TweenMax.from("#dev__1__mobile3", 2.6, {
    opacity: 0,
    y: '40%',
    ease: Expo.easeInOut,
    delay: 4,
});
TweenMax.from("#front__1__mobile1", 2.6, {
    opacity: 0,
    y: '40%',
    ease: Expo.easeInOut,
    delay: 4.4,
});
TweenMax.from("#front__1__mobile2", 2.6, {
    opacity: 0,
    y: '40%',
    ease: Expo.easeInOut,
    delay: 4.8,
});

// ***Disparition du mot
TweenMax.to("#dev__1__mobile", 2.6, {
    // opacity: 0,
    y: '60%',
    ease: Expo.easeInOut,
    delay: 6.6,
});
TweenMax.to("#dev__1__mobile2", 2.6, {
    // opacity: 0,
    y: '60%',
    ease: Expo.easeInOut,
    delay: 7.2,
});
TweenMax.to("#dev__1__mobile3", 2.6, {
    // opacity: 0,
    y: '60%',
    ease: Expo.easeInOut,
    delay: 7.8,
});
TweenMax.to("#front__1__mobile1", 2.6, {
    // opacity: 0,
    y: '60%',
    ease: Expo.easeInOut,
    delay: 8.4,
});
TweenMax.to("#front__1__mobile2", 2.6, {
    // opacity: 0,
    y: '60%',
    ease: Expo.easeInOut,
    delay: 8.8,
});
// ******