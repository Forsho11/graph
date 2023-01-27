var yLine = [60, 49, 44, 24, 15, 17, 15, 12, 51, 37, 29, 42];

const config = {
    type: 'scatter',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  const data = {
    labels: xValues,
    datasets: [{
      type: 'bar',
      label: 'Bar Dataset',
      data: yLine,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)'
    }, {
      type: 'line',
      label: 'Line Dataset',
      data: [50, 50, 50, 50],
      fill: false,
      borderColor: 'rgb(54, 162, 235)'
    }]
  };