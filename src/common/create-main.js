import $ from 'jquery';
import * as views from '../views';
import {roomDetails} from "../views/rooms/room-details";
import {treatmentsDetails} from "../views/treatments/treatments-details";

export const createMain = () => {
    const main = $(`<main></main>`);

    document.addEventListener('navigation', event => {
        const viewName = event.detail.name;


        switch (viewName) {
            case 'room-details':
                main.empty().append(roomDetails(event.detail.roomId));
                break;
            case 'treatments-details':
                 main.empty().append(treatmentsDetails(event.detail.trId));
                break;
            default:
                const viewFn = views[viewName];
                main.empty().append(viewFn());
        }
    });

    return main;
};


