const nav = document.querySelector('.nav');
const menu_btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

    window.addEventListener('scroll', function(){
        nav.classList.toggle('active',window.scrollY >0)

    })

    menu_btn.addEventListener('click',() => {
        menu.classList.toggle('active')
    })
///////////////////////////////////////////////////////////////////////////
document.querySelector('#copiar').onclick = async() =>{

    try {
        await navigator.clipboard.writeText('tom_tain@hotmail.com');
        
    } catch (error) {
        console.log(error)
    }
}

///////////////////////////////////////////////////////////////////////////
//window.sr= ScrollReveal();

//    sr.reveal('.landing_hero',{
//        duration: 3000,
//        origin: 'bottom',
//        distance: '-50px'
//    });

    