import $ from 'jquery';
import * as views from '../views';

export const navigation = () => {
    const fragment = $(document.createDocumentFragment());

    const nav = $('<nav></nav>');
    const buttons = Object
                        .keys(views)// => ['home', 'rooms', itd.]
                        .map(viewName => {
                            const button = $(`<button type="button" class='a0'>${viewName.toUpperCase()}</button>`);

                            button.on('click', (ev) => {
                                ev.preventDefault();
                                // tworzymy autorskie zdarzenie `navigation`
                                const customEvent = new CustomEvent('navigation', {
                                    detail: {
                                        name: viewName
                                    }
                                    
                                });
                               
                                // wywolujemy zdarzenie `navigation`
                                document.dispatchEvent(customEvent);
                            });
                            return button;
                        });
      
    nav.append(buttons);
    fragment.append(nav);

    return fragment;
};

