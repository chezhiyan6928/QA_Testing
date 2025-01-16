// Function for getting the browser windows
function browserWindowSize(){
    let width = window.innerWidth;
    let height = window.innerHeight;

    console.log(`The Browser window size is: \nWidth: ${width}px\nHeight: ${height}`);
};

browserWindowSize();

// update the size dynamically on window resize
window.addEventListener("resize", browserWindowSize);