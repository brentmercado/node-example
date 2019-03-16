document
    .querySelector('.request-complement')
    .addEventListener('click', function() {
        fetch('/complement')
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                let message = document.querySelector('.message');
                message.innerText = data.complement;
                message.style.backgroundColor = 'lightgreen';
            })
            .catch(function(err) {
                console.log(err);
            });
    });

document
    .querySelector('.request-insult')
    .addEventListener('click', function() {
        fetch('/insult')
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                let message = document.querySelector('.message');
                message.innerText = data.insult;
                message.style.backgroundColor = 'tomato';
            })
            .catch(function(err) {
                console.log(err);
            })
    })