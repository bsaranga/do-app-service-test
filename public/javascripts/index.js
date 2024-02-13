function postStatusMessage(message) {
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: `${new Date()} : ${message}`})
    }).then(res => {
        res.json().then(data => {
            console.log(data)
        })
    }).catch(err => {
        console.error(err)
    });
}