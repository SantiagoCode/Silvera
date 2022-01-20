// Efecto fade del telon
// 1s de margen para asegurar caraga visual completa
window.addEventListener("load", function(){
    setTimeout(function(){
        let telon = document.getElementById("telon");
        telon.style.opacity = "0";
    }, 1000)
})

// "pseudo-filtro" de mision, vision y valores 

// botones
let btn_mission = document.getElementById("btn_1");
let btn_vision = document.getElementById("btn_2");
let btn_value = document.getElementById("btn_3");
// parrafos
let p_1 = document.getElementById("p_1");
let p_2 = document.getElementById("p_2");
let p_3 = document.getElementById("p_3");

btn_mission.addEventListener("click", function(){
    p_1.classList.add("is-active");
    p_2.classList.remove("is-active");
    p_3.classList.remove("is-active");

    btn_mission.classList.add("is-active");
    btn_vision.classList.remove("is-active");
    btn_value.classList.remove("is-active");
})

btn_vision.addEventListener("click", function(){
    p_2.classList.add("is-active");
    p_3.classList.remove("is-active");
    p_1.classList.remove("is-active");

    btn_vision.classList.add("is-active");
    btn_value.classList.remove("is-active");
    btn_mission.classList.remove("is-active");
})

btn_value.addEventListener("click", function(){
    p_3.classList.add("is-active");
    p_1.classList.remove("is-active");
    p_2.classList.remove("is-active");

    btn_value.classList.add("is-active");
    btn_mission.classList.remove("is-active");
    btn_vision.classList.remove("is-active");
})
