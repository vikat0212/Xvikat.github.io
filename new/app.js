let clock=1
let scroller=document.querySelector('#img')

async function prev(){
    clock--
    if(clock<=0){
        clock=5
    }
    scroller.src=`images/${clock}.jpeg`
}
async function next(){
    clock++
    if(clock>=5){
        clock=1
    }
    scroller.src=`images/${clock}.jpeg` 
}
async function openImg(img){
    scroller.src=img
}