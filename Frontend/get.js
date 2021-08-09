function getAllData() {

    console.log("test")

    fetch("https://timoschessl-restapi-mongodb.herokuapp.com/get")
    .then(result => {
        console.log(result)
        result.text().then(text => {document.getElementById("showData").value=text})
    })

}