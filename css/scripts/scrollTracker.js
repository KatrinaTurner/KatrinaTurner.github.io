(() => {
    let supportOffset = window.pageYOffset !== undefined;
    let lastKnownPos = 0;
    let ticking = false;
    let scrollDir;
    let timestamp = Date.now()

    function callback(scrollPos, scrollDir) {
        // Your code here...
        let prevTime = timestamp
        timestamp = Date.now()
        let time = (timestamp - prevTime) / 1000
        console.log(`scroll pos: ${scrollPos} | scroll dir: ${scrollDir} | time: ${time}s`);
    }

    window.addEventListener('wheel', e => {
        currYPos = supportOffset ? window.pageYOffset : document.body.scrollTop;
        scrollDir = lastKnownPos > currYPos || currYPos === 0 ? 'up' : 'down';
        lastKnownPos = currYPos;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                callback(lastKnownPos, scrollDir);
                ticking = false;
            });
        }
        ticking = true;
    });
})();