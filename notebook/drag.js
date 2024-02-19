// JavaScript code for enabling drag functionality
document.addEventListener('DOMContentLoaded', function () {
    const mainPage = document.querySelector('.main_page');
    const dummyPages = document.querySelectorAll('.dummy_page');

    // Add event listener for when dragging starts
    mainPage.addEventListener('dragstart', function (e) {
        // Set the data to be transferred during the drag
        e.dataTransfer.setData('text/plain', 'dragging');
    });

    // Add event listener for when dragging starts on dummy pages
    dummyPages.forEach(dummyPage => {
        dummyPage.addEventListener('dragstart', function (e) {
            // Set the data to be transferred during the drag
            e.dataTransfer.setData('text/plain', 'dragging');
        });
    });

    // Add event listener for when dragging over an element
    document.addEventListener('dragover', function (e) {
        // Prevent default behavior to allow drop
        e.preventDefault();
    });

    // Add event listener for when dropping an element
    document.addEventListener('drop', function (e) {
        // Prevent default behavior (prevents file from being opened)
        e.preventDefault();
        
        // Get the data that was set during dragstart (in this case, it's just 'dragging')
        const data = e.dataTransfer.getData('text/plain');

        // Check if the data is 'dragging'
        if (data === 'dragging') {
            // Get the drop position
            const x = e.clientX;
            const y = e.clientY;

            // Set the position of the dragged elements to the drop position
            mainPage.style.position = 'fixed';
            mainPage.style.left = x + 'px';
            mainPage.style.top = y + 'px';

            dummyPages.forEach(dummyPage => {
                dummyPage.style.position = 'fixed';
                dummyPage.style.left = x + 'px';
                dummyPage.style.top = y + 'px';
            });
        }
    });
});
