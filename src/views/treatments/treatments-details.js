import axios from 'axios';
import $ from 'jquery';

export const treatmentsDetails = (trId, trName, trPrice) => {
    const fragment = $(document.createDocumentFragment());
    const section = $(`
        <section class = 'treatment'>
            <h2>Details</h2>
            <p class="treatment-name">Loading...</p>
            <p class="treatment-price">Loading...</p>
            <button class = "addToCart" type = "button">Add this treatment</button>
        </section>
    `);

    section.find('.addToCart').on('click', event => {
    event.preventDefault();
    alert(`${trName} dodany`);
     document.cookie = `NumerID${trId}b=${trId}` + ' ' +  `${trName}` + ' ' + `${trPrice}` + ' zł';

    });
    
    axios
        .get(`http://localhost:3000/treatments/${trId}`)
        .then(response => response.data)
        .then(treatment => {
            trName = treatment.name;
            trPrice = treatment.price;
            const {name} = treatment;
            section.find('.treatment-name').text(name).css('font-weight', 'bold');
            section.find('.treatment-price').text("Cena zabiegu: " + treatment.price);
            
            //roomDetails(roomName);
            //return roomName;
        });


    fragment.append(section);
    return fragment;

            
};


