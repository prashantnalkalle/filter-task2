const cl = console.log;
const car = document.getElementById("car")


function oncolorchange(e){
    let selectcolor = e.target.value

    const all = [...document.querySelectorAll('.all')]

    all.forEach(ele => ele.classList.add('d-none'))

    const colorselect =[...document.querySelectorAll('.' + selectcolor)]

    colorselect.forEach(ele => ele.classList.remove('d-none'))

    
}









car.addEventListener('change',oncolorchange)




