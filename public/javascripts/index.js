/* fetch('/submit', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        message: 'This is a test request'
    })
}).then(res => {
    res.json().then(data => {
        console.log(data)
    })
});

const id = setTimeout(() => {
    fetch('/entries').then(res => {
        res.json().then(data => {
            console.log(data)
        })
    });

    clearTimeout(id);
}, 1500); */