import $ from 'jquery';

export const home = () => {
    const fragment = $(document.createDocumentFragment());
    const h2 = $('<h2>Home</h2>');
    const p = $(`<p class = "t0">Witamy w naszym SPA. Jesteśmy przekonani, że zestaw naszych wyszukanych
    zabiegów przeprowadzonych w specjalnych, informatycznych pokojach pomoże Wam w Waszych codziennych kłopotach z programowaniem, rozjaśniając Wasze mózgi do stopnia pozwalającego na swobodne zakodowanie dowolnego programu w Angularze. Sądzimy, że to możliwe. Zapraszamy !!.
    </p>`);

    fragment.append(h2);
    fragment.append(p);

    return fragment;
};