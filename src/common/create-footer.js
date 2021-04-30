import $ from 'jquery';

export const createFooter = () => {
    const footer = $(`
        <footer>
            <p>Copyright (c) 2021 IT SPA.</p>
        </footer>
    `);

    return footer;
};
