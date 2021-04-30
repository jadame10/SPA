import $ from 'jquery';
import axios from 'axios';

export const treatments = () => {
    const fragment = $(document.createDocumentFragment());
    const h2 = $('<h2>Treatments</h2>');
    const treatmentList = $('<section>Loading...</section>');

    fragment.append(h2);
    fragment.append(treatmentList);

    axios
        .get('http://localhost:3000/treatments')
        .then(response => response.data)
        .then(treatments => treatments.map(treatment => {
            const article = $(`
                <article style="background:#f5f5dc">
                <div class = 'container-fluid'>
                <div class = 'row'>
                    <div class = 'col-md-1'>
                    </div>
                    <div class = 'col-md-5'>
                    <p><strong>Area:</strong> ${treatment.area}</p>
                    <p><strong>Time:</strong> ${treatment.time}</p>
                    <p><strong>Price:</strong> ${treatment.price}</p>
                    </div>
                    <div class = 'col-md-5'>
                    <div class= 'img0'>${treatment.image}</div>
                    </div>
                    <div class = 'col-md-1'>
                    </div>
                    </div>
                    </div>
                </article>
            `);

            const h4 = $(`<h4>${treatment.name}</h4>`);
            
            h4.on('click', () => {
                const customEvent = new CustomEvent('navigation', {
                    detail: { name: 'treatments-details', trId: treatment.id, trName: treatment.name}
                });
              
                document.dispatchEvent(customEvent);
            });

            article.prepend(h4);

            return article;
        }))
        .then(articles => treatmentList.empty().append(articles));

    return fragment;
};










