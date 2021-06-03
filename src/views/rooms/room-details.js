import axios from 'axios';
import $ from 'jquery';

export const roomDetails = (roomId, roomName, roomPrice, diffDays, roomI) => {
    const fragment = $(document.createDocumentFragment());
    const section = $(`
        <section class = 'room'>
            <h2>Details</h2>
            <p class="room-name">Loading...</p>
            <p class="room-desc">Loading...<p>
            <label for="start">Arrival date:</label>

                <input type="date" id="start" name="trip-start"
                 min="" max="">
                <input type = 'time' class = 'time1' />
                <label for="start">Depart date:</label>

                <input type="date" id="end" name="trip-end"
                min="" max="">
                <input type = 'time' class = 'time1'  />
                <br />
            <button class = "addToCart" type = "button"><span class="fa-li"><i class="fas fa-spinner fa-pulse"></i></span>Add this Room</button>
        </section>
    `);

    section.find('.addToCart').on('click', event => {
    event.preventDefault();
    let l =  $("input[name='trip-start']").val();
    let r =  $("input[name='trip-end']").val();
    console.log(l);
    if(l === '' || r === ''){
     alert(`Wybierz datę przed dodaniem pokoju`);
     }else{
        alert(`${roomName} dodany`);
        document.cookie = `NumerID${roomId}=${roomId}` + ' ' +  `${roomName}` + ' ' +  `${roomPrice}` + ' zł' + ' ' + 'liczba dni' + " "  + `${diffDays}` + "  "; 
   
     }
   
    });
    
    axios
        .get(`http://localhost:3000/rooms/${roomId}`)
        .then(response => response.data)
        .then(room => {
            roomName = room.name;
            roomPrice = room.price;
            roomI = room.image;

            const {name, description} = room;
            section.find('.room-name').text(name).css('font-weight', 'bold');
            section.find('.room-desc').text(description);
        });
        
        let end;
        let dealDate = () => {
            let y = section.find('.addToCart');
            //let y = document.querySelector('.addToCart');
            y.disabled =true;
            let today = new Date().toISOString().split('T')[0];
            let tommorrow = new Date();
            tommorrow.setYear(tommorrow.getFullYear() + 1);
            let m = tommorrow.toISOString().split('T')[0];
            let start =  $(section).find("input[name='trip-start']")[0];
             end = $(section).find("input[name='trip-end']")[0];
            start.setAttribute('min', today);
            start.setAttribute('max', m);
            end.setAttribute('min', today);
            end.setAttribute('max', m);
            end.addEventListener('change', () => {
            if(parseInt(start.value.replace(/-/g,""),10) > parseInt(end.value.replace(/-/g,""),10)-1){
                alert('Data przyjazdu musi być wczesniejsza od daty wyjazdu.');
                y.prop('disabled', true);
             }else{
                alert('Data przyjazdu i wyjazdu prawidłowe.');
                y.prop('disabled', false);
             }
        })
        }
        dealDate();

       
        function countDiff(){
           end.addEventListener('change', () =>{
            let l =  $("input[name='trip-start']").val();
            let r =  $("input[name='trip-end']").val();
            const firstDate = new Date(l);
            const secondDate = new Date(r);
            diffDays = Math.round(Math.abs((firstDate - secondDate) / (1000 * 3600 * 24)));
            console.log(diffDays);
           });
        }
        countDiff();
    fragment.append(section);
    return fragment;

            
};


