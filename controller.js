
function sendRequestToController(params) {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            let response = JSON.parse(xhttp.responseText);        
            atualizarGrafico(response);

        }

    };

    xhttp.open("POST", "http://localhost://grafico/index.php", true);

    xhttp.setRequestHeader('Content-type', 'application/json');

    let pram = JSON.stringify(params);

    xhttp.send(pram);

}

function atualizarDados(year, user = null) {

    var params = {};
    params.optionYear = year;
    params.codPessoa = user;

    sendRequestToController(1, params);
    console.log(params)
}

function atualizarGrafico(json) {
        
    try {

        charts.forEach(chart => {
            chart.destroy();
        })

    } catch (e) {
        console.log(e);
    }

    const ctx = document.getElementById("myChart");

    var chart = new Chart(ctx, json);

    charts.push(chart);

}