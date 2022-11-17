
    const lighton = () => {
        let ltext = document.getElementById('heading');

        for (x = 1; x < 6; x++) {
            let bid = document.getElementById('on'.concat(x));
            if (bid.src.match('images/BON.jpg')) {
                bid.src = 'images/BO.jpg';
                ltext.innerHTML = "Light OFF";
                ltext.style.color = 'black';

            } else {
                bid.src = 'images/BON.jpg';
                ltext.innerHTML = "Light ON";
                ltext.style.color = 'red';
            }
        }
    } 