const burger_icon = document.querySelector('.burger-icon');
const burger_modal = document.querySelector('.burger-container');
const list_item = document.querySelectorAll('.header__item--modal')
const body = document.querySelector('body');
const gift = document.querySelector('.gift-spawn');
const cupcake_button = document.querySelector('.cupcake-button')
const gift_modal = document.querySelector('.gift__modal-container')
const X = document.querySelector('.cupcake-x')
const wrapper = document.querySelector('.wrapper')
const learn_button = document.querySelectorAll('.learn-button')
const learn_button_one = document.querySelector('.learn-button__one')
const learn_button_two = document.querySelector('.learn-button__two')
const learn_button_three = document.querySelector('.learn-button__three')
const learn_button_four = document.querySelector('.learn-button__four')
const learn_container = document.querySelectorAll('.learn__step-block')
const step_one = document.querySelector('.learn__step-block-one')
const step_two = document.querySelector('.learn__step-block-two')
const step_three = document.querySelector('.learn__step-block-three')
const step_four = document.querySelector('.learn__step-block-four')
const step_block = document.querySelectorAll('.step__container')
const arrow = document.querySelectorAll('.arrow')

burger_icon.addEventListener('click', () => {
    if(burger_icon.classList.contains('active'))  {
        burger_modal.classList.remove('visible');
        burger_icon.classList.remove('active');
        body.style.overflowY = 'visible';
    }
    else{
        burger_modal.classList.add('visible');
        burger_icon.classList.add('active');
        body.style.overflowY = 'hidden';
    }
})

list_item.forEach(item => {
    item.addEventListener('click', () => {
        burger_modal.classList.remove('visible');
        burger_icon.classList.remove('active');
        body.style.overflowY = 'visible';
    });
});

gift.addEventListener('click', () => {
    gift_modal.classList.add('visible')
    body.style.overflowY = 'hidden';
})
cupcake_button.addEventListener('click', () => {
    gift_modal.classList.remove('visible')
    body.style.overflowY = 'visible';
})
X.addEventListener('click', () => {
    gift_modal.classList.remove('visible')
    body.style.overflowY = 'visible';
})
wrapper.addEventListener('click', () => {
    gift_modal.classList.remove('visible')
    body.style.overflowY = 'visible';
})
learn_button.forEach(item => {
    item.addEventListener('click', () => {
        learn_button.forEach(item1 => {
            item1.classList.remove('learn-button--active')
        })
        item.classList.add('learn-button--active')  
        step_block.forEach(stepItem => {
            stepItem.classList.remove('step--active');
        });   
        arrow.forEach(arrowItem => {
            arrowItem.classList.remove('arrow--active');
        });
    })
})
learn_button_one.addEventListener('click', () => {
    learn_container.forEach(item => {
        item.classList.remove('visible')
        step_one.classList.add('visible')
    })
})
learn_button_two.addEventListener('click', () => {
    learn_container.forEach(item => {
        item.classList.remove('visible')
        step_two.classList.add('visible')
    })
})
learn_button_three.addEventListener('click', () => {
    learn_container.forEach(item => {
        item.classList.remove('visible')
        step_three.classList.add('visible')
    })
})
learn_button_four.addEventListener('click', () => {
    learn_container.forEach(item => {
        item.classList.remove('visible')
        step_four.classList.add('visible')
    })
})
step_block.forEach(item => {
    item.addEventListener('click', () => { 
        if(item.classList.contains('step--active')) {
            arrow.forEach(arrowItem => {
                arrowItem.classList.remove('arrow--active');
            });
            step_block.forEach(stepItem => {
                stepItem.classList.remove('step--active');
            });
        } else {
            step_block.forEach(stepItem => {
                stepItem.classList.remove('step--active');
            });
            arrow.forEach(arrowItem => {
                arrowItem.classList.remove('arrow--active');
            });
            item.querySelector('.arrow').classList.add('arrow--active');
            item.classList.add('step--active');
        }
    
    });
});

let inputs = document.querySelector('.input-number');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);