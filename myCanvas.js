var xValues = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var yValues = [75, 49, 44, 24, 15, 17, 15, 12, 51, 37, 29, 42];
var barColors = ["red", "green", "blue", "orange", "brown", "aqua", "beige", "cadetblue", "crimson", "black", "darkred", "darkslateblue"];
var ctx = document.getElementById("myChart").getContext('2d');
var config = ({
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Fulaninho"
        }
    }
});

var myChart_new = new Chart(ctx, config);
var button1 = document.getElementById("#0");
button1.addEventListener.click(function () {

    var data = myChart_new.config.data;

    data.datasets.data = yValues;
    myChart_new.update();

});
var button2 = document.getElementById("#2")
button2.addEventListener.click(function () {
    
    var yValues = [24, 34, 24, 75];

    var data = myChart_new.config.data;
    
    data.datasets.data = yValues;
    myChart_new.update();
});


function valueVerification() {
    yValues.forEach(Element => {
        if (Element < 25) {

        }
    });
}

function createButton() {

    let sec = document.createElement("button");
    sec.id = "changeYear";

}
