function startProgress() {
    const pbar = document.getElementById("p-bar");
    const stopAt = 79;

    var width = 0;
    const interval = setInterval(frame, 10);


    function frame() {
        if (width >= stopAt) {
            clearInterval(interval);
        }
        else {
            width++;
            pbar.style.width = width + "%";
        }
    }
}
