let slidePosition=0;
const sliders=document.querySelectorAll('.slider-item');
const totalSliders=sliders.length;
const btnPrev=document.querySelector('#btn-prev');
const btnNext=document.getElementById('btn-next');

btnPrev.addEventListener('click',function(){
PrevSlide()
});
btnNext.addEventListener('click',function(){
NextSlide()
});

function updatePosition(){
sliders.forEach(slide=>{
    slide.classList.remove('active');
    slide.classList.add('hidden');
})
sliders[slidePosition].classList.add('active')


dots.forEach(dot=>{
    dot.classList.remove('dot-active');
    
})
dots[slidePosition].classList.add('dot-active')

}
function PrevSlide(){
if(slidePosition==0){
    slidePosition=totalSliders-1
}else{
    slidePosition--;
}
   
updatePosition()
}
function NextSlide(){
    if(slidePosition==totalSliders-1){
        slidePosition=0
    }else{
        slidePosition++;
    }
   
updatePosition()
}

const dotContainer=document.querySelector('.dots');
sliders.forEach(slide=>{
    const dot=document.createElement('div');
    dot.classList.add('dot');
    dotContainer.appendChild(dot);
    
})
const dots=document.querySelectorAll('.dot');
dots[slidePosition].classList.add('dot-active');

dots.forEach((dot,index)=>{
    dot.addEventListener('click',function(){
slidePosition=index;
updatePosition();
    })
})

setInterval(()=>{
if(slidePosition==totalSliders-1){
    slidePosition=0;
}else{
    slidePosition++;
}
updatePosition();
},1000)