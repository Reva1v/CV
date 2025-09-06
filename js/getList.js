function getList(file, selector) {
    fetch(file)
        .then(r => r.text())
        .then(text => {
            document.getElementById(selector).innerHTML = text;
        })
        .catch(error => {
            console.error(error);
        });
}
