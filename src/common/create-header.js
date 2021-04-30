import $ from 'jquery';

export const createHeader = () => {
    const header = $(`
        <header>
            <div class = 'logo'><i class="fas fa-spa"></i></div>
            <h1 class = 'text-center'>IT SPA</h1>
        </header>
    `);

    return header;
};

