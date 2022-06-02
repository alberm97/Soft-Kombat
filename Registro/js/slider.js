(function () {
    const sliders=[...document.querySelectorAll('.celda_slider')];
    const flechasiguiente=document.querySelector('#next');
    const flechaanterior=document.querySelector('#before');
    console.log(sliders);
    flechasiguiente.addEventListener('click', ()=>changePosition(1));
    flechaanterior.addEventListener('click', ()=>changePosition(-1));
    function changePosition(change){
        let valor;
        const elemento_actual = Number(document.querySelector(".celda_slider--show").dataset.id);
        
        valor=elemento_actual;
        valor=valor+change;
        
        if (valor===0 || valor==sliders.length+1) {
            valor = valor === 0 ? 1 : sliders.length;
        }
        console.log(elemento_actual);
        console.log(valor);
        sliders[elemento_actual-1].classList.remove(".celda_slider--show");
        sliders[valor-1].classList.add(".celda_slider--show");
        
    }
    console.log(sliders);
})()