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
        
        valor=elemento_actual-1;
        valor=valor+change;

      //  console.log(change);
        
       //if (valor<0 || valor>=sliders.length) {
           // valor = valor < 0 ? 1 : sliders.length-1;
            valor = valor < 0 ? sliders.length-1 : valor;
            valor = valor > sliders.length-1 ? 0 :valor;

        //}
        //console.log("elementom nuevo" + (elemento_actual-1));
        //console.log("Valor" + valor);

        //console.log(sliders[elemento_actual].className);

        sliders[elemento_actual-1].classList.remove("celda_slider--show");
        sliders[valor].classList.add("celda_slider--show");
        
    }
    console.log(sliders.length);
})()