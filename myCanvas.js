var xValues = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

var yValues = [60, 49, 44, 24, 15, 17, 15, 12, 51, 37, 29, 42];

var expectedValues = [60, 40, 50, 30, 20, 20, 10, 15, 50, 40, 20, 30];

var barColors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(201, 203, 207, 0.2)'];

var barColorsBorder = [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)'];

const ctx = document.getElementById("myChart");

/* Configuration of the library */

const config = ({
    data: {
        labels: xValues,
        datasets: [ 
            {
                type: "bar",
                label: 'Dataset 1',
                backgroundColor: barColors,
                borderColor: barColorsBorder,
                data: yValues,
                borderWidth: 1,
            },
            {
                type: "line",
                label: 'Dataset 2',
                backgroundColor: barColors,
                borderColor: barColorsBorder,
                data: expectedValues,
                borderWidth: 1,
            },

        ]
    },

    plugins: [plugin],

    legend: { display: false },
    title: {
        display: true,
        text: "Fulaninho"
    },
});

/* ---------------------------------------------- */


function clickHandler(click) {
    const activePoints = myChart_new.getElementsAtEventForMode(click, 'nearest', { intersect: true }, true);
    if (activePoints.length) {
        const firstPoint = activePoints[0];
        alert('Teste');
    }
}

ctx.onclick = clickHandler

var myChart_new = new Chart(ctx, config);

      /*ComboBox*/

var sec = document.createElement("select");
sec.id = comboBox;
document.body.appendChild('myChart');