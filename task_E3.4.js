const intervalId = setInterval(function (a, b) {
    for (let i = a; i < b+1; i += 1) {
        console.log(i);
    }
}, 1000, 5,  15);

