import $ from 'jquery';
import axios from 'axios';

export const rooms = () => {
    const fragment = $(document.createDocumentFragment());
    const h2 = $('<h2>Rooms</h2>');
    const roomsList = $('<section>Loading...</section>');

    fragment.append(h2);
    fragment.append(roomsList);

    axios
        .get('http://localhost:3000/rooms')
        .then(response => response.data)
        .then(rooms => rooms.map(room => {
            const article = $(`
                <article style="background:#f5f5dc">
                <div class = 'container-fluid'>
                <div class = 'row'>
                    <div class = 'col-md-1'>
                    </div>
                    <div class = 'col-md-5'>
                    <p><strong>Beds:</strong> ${room.beds}</p>
                    <p><strong>Guests:</strong> ${room.guests}</p>
                    <p><strong>Price:</strong> ${room.price}</p>
                    </div>
                    <div class = 'col-md-5'>
                    <div class= 'img0'>${room.image}</div>
                    </div>
                    <div class = 'col-md-1'>
                    </div>
                    </div>
                    </div>
                </article>
            `);

            const h4 = $(`<h4>${room.name}</h4>`);
            
            h4.on('click', () => {
                const customEvent = new CustomEvent('navigation', {
                    detail: { name: 'room-details', roomId: room.id, roomName: room.name}
                });
                
                document.dispatchEvent(customEvent);
            });

            article.prepend(h4);

            return article;
        }))
        .then(articles => roomsList.empty().append(articles));

    return fragment;
};










