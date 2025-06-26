let allData = [];

const ctx1 = document.getElementById('myLineChart1').getContext('2d');
const ctx2 = document.getElementById('myLineChart2').getContext('2d');
const ctx3 = document.getElementById('myLineChart3').getContext('2d');
const ctx4 = document.getElementById('myLineChart4').getContext('2d');
const ctx5 = document.getElementById('myLineChart5').getContext('2d');
const ctx6 = document.getElementById('myLineChart6').getContext('2d');
const ctx7 = document.getElementById('myLineChart7').getContext('2d');
const ctx8 = document.getElementById('myLineChart8').getContext('2d');
const ctx9 = document.getElementById('myLineChart9').getContext('2d');

const ctx10 = document.getElementById('myLineChart1').getContext('2d');
const ctx11 = document.getElementById('myLineChart2').getContext('2d');
const ctx12 = document.getElementById('myLineChart3').getContext('2d');
const ctx13 = document.getElementById('myLineChart4').getContext('2d');


// Gráficos iniciales con datos vacíos

const dataLabels1 = ['Zonnepaneelspanning', 'Zonnepaneelstroom', 'Stroomverbruik woning'];
const dataLabels2 = ['Waterstofproductie', 'Waterstofverbruik auto', 'Waterstofopslag woning'];
const dataLabels3 = ['Buitentemperatuur', 'Binnentemperatuur', 'Luchtdruk'];

const defaultData = [12, 19, 3];

const chart1 = new Chart(ctx1, {
    type: 'pie', // circular
    data: {
        labels: dataLabels1,
        datasets: [{
            data: defaultData,
            backgroundColor: ['#4bc0c0', '#ff6384', '#ffce56']
        }]
    },
    options: { responsive: true, maintainAspectRatio: false }
});

const chart2 = new Chart(ctx2, {
    type: 'line', // línea
    data: {
        labels: dataLabels1,
        datasets: [{
            label: 'Energy Data',
            data: defaultData,
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            fill: true,
            tension: 0.3
        }]
    },
    options: { responsive: true, maintainAspectRatio: false }
});

const chart3 = new Chart(ctx3, {
    type: 'bar', // barras verticales
    data: {
        labels: dataLabels1,
        datasets: [{
            label: 'Energy Data',
            data: defaultData,
            backgroundColor: 'rgba(255, 159, 64, 0.6)'
        }]
    },
    options: { responsive: true, maintainAspectRatio: false }
});

const chart4 = new Chart(ctx4, {
    type: 'doughnut', // dona (similar a pie)
    data: {
        labels: dataLabels2,
        datasets: [{
            data: defaultData,
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56']
        }]
    },
    options: { responsive: true, maintainAspectRatio: false }
});

const chart5 = new Chart(ctx5, {
    type: 'radar', // radar
    data: {
        labels: dataLabels2,
        datasets: [{
            label: 'Hydrogen Use & Production',
            data: defaultData,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true
        }]
    },
    options: { responsive: true, maintainAspectRatio: false }
});

const chart6 = new Chart(ctx6, {
    type: 'polarArea', // área polar
    data: {
        labels: dataLabels2,
        datasets: [{
            label: 'Hydrogen Use & Production',
            data: defaultData,
            backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)']
        }]
    },
    options: { responsive: true, maintainAspectRatio: false }
});

const chart7 = new Chart(ctx7, {
  type: 'doughnut',
  data: {
    labels: ['Buitentemperatuur', 'Binnentemperatuur', 'Luchtdruk'],
    datasets: [{
      label: 'Weather & Environment',
      data: [22, 24, 19],
      backgroundColor: ['#36a2eb', '#ff6384', '#4bc0c0']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});

const chart8 = new Chart(ctx8, {
  type: 'polarArea',
  data: {
    labels: ['Buitentemperatuur', 'Binnentemperatuur', 'Luchtdruk'],
    datasets: [{
      label: 'Weather & Environment',
      data: [20, 25, 18],
      backgroundColor: ['#36a2eb', '#ff6384', '#4bc0c0']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});

const chart9 = new Chart(ctx9, {
    type: 'bar', // barras horizontales
    data: {
        labels: dataLabels3,
        datasets: [{
            label: 'Weather & Environment',
            data: defaultData,
            backgroundColor: 'rgba(255, 206, 86, 0.6)'
        }]
    },
    options: {
        indexAxis: 'y', // aquí cambia el eje para barras horizontales
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true } }
    }
});




// Fetch datos y llenar datalists
fetch('php/getData.php')
    .then(response => response.json())
    .then(data => {
        allData = data;

        // Llenar datalists de fecha y hora
        const dateOptions = [...new Set(data.map(item => item.date))];
        const timeOptions = [...new Set(data.map(item => item.time))];

        const dateDatalist = document.getElementById('date-options');
        dateDatalist.innerHTML = '';
        dateOptions.forEach(date => {
            const option = document.createElement('option');
            option.value = date;
            dateDatalist.appendChild(option);
        });

        const timeDatalist = document.getElementById('time-options');
        timeDatalist.innerHTML = '';
        timeOptions.forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            timeDatalist.appendChild(option);
        });

        // Aquí puedes llamar a la función que actualiza las gráficas si quieres
        updateCharts();
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });

// Inputs
const dateInput = document.querySelector('input[list="date-options"]');
const timeInput = document.querySelector('input[list="time-options"]');

dateInput.addEventListener('input', updateCharts);
timeInput.addEventListener('input', updateCharts);

function updateCharts() {
    const selectedDate = dateInput.value.trim();
    const selectedTime = timeInput.value.trim();

    if (!selectedDate) {
        resetCharts();
        return;
    }

    if (selectedTime) {
        // Caso hora específica: mostrar solo ese dato puntual (igual que antes)
        const filteredData = allData.filter(item => item.date === selectedDate && item.time === selectedTime);
        if (filteredData.length === 0) {
            resetCharts();
            return;
        }
        const d = filteredData[0];

        // Actualizar pie charts con dato puntual
        const energyValues = [
            Number(d.zonnepaneelspanning),
            Number(d.zonnepaneelstroom),
            Number(d.stroomverbruik_woning)
        ];
        [chart1].forEach(chart => {
            chart.data.datasets[0].data = energyValues;
            chart.update();
        });

        // Actualizar línea y barra charts con un solo punto
        [chart2, chart3].forEach(chart => {
            chart.data.labels = ['Zonnepaneelspanning', 'Zonnepaneelstroom', 'Stroomverbruik woning'];
            chart.data.datasets[0].data = energyValues;
            chart.update();
        });

        // Hydrogen
        const hydrogenValues = [
            Number(d.waterstofproductie),
            Number(d.waterstofverbruik_auto),
            Number(d.waterstofopslag_woning)
        ];
        [chart4].forEach(chart => {
            chart.data.datasets[0].data = hydrogenValues;
            chart.update();
        });
        [chart5, chart6].forEach(chart => {
            chart.data.labels = ['Waterstofproductie', 'Waterstofverbruik auto', 'Waterstofopslag woning'];
            chart.data.datasets[0].data = hydrogenValues;
            chart.update();
        });

        // Weather
        const weatherValues = [
            Number(d.buitentemperatuur),
            Number(d.binnentemperatuur),
            Number(d.luchtdruk)
        ];
        [chart7].forEach(chart => {
            chart.data.datasets[0].data = weatherValues;
            chart.update();
        });
        [chart8, chart9].forEach(chart => {
            chart.data.labels = ['Buitentemperatuur', 'Binnentemperatuur', 'Luchtdruk'];
            chart.data.datasets[0].data = weatherValues;
            chart.update();
        });

    } else {
        // Solo fecha: mostrar toda la info del día con hora en eje X para line/bar charts
        const filteredData = allData.filter(item => item.date === selectedDate);
        if (filteredData.length === 0) {
            resetCharts();
            return;
        }

        // Labels para line/bar charts: las horas del día
        const labels = filteredData.map(item => item.time);

        // Energy data por hora
        const zonnepaneelspanningArr = filteredData.map(item => Number(item.zonnepaneelspanning));
        const zonnepaneelstroomArr = filteredData.map(item => Number(item.zonnepaneelstroom));
        const stroomverbruikArr = filteredData.map(item => Number(item.stroomverbruik_woning));

        // Actualizar chart2 (línea) y chart3 (barra) con todos los datos por hora
        [chart2, chart3].forEach(chart => {
            chart.data.labels = labels;
            chart.data.datasets = [
                {
                    label: 'Zonnepaneelspanning',
                    data: zonnepaneelspanningArr,
                    borderColor: 'rgba(153, 102, 255, 1)',
                    backgroundColor: chart.config.type === 'line' ? 'rgba(153, 102, 255, 0.2)' : 'rgba(153, 102, 255, 0.6)',
                    fill: chart.config.type === 'line',
                    tension: 0.3
                },
                {
                    label: 'Zonnepaneelstroom',
                    data: zonnepaneelstroomArr,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: chart.config.type === 'line' ? 'rgba(255, 99, 132, 0.2)' : 'rgba(255, 99, 132, 0.6)',
                    fill: chart.config.type === 'line',
                    tension: 0.3
                },
                {
                    label: 'Stroomverbruik woning',
                    data: stroomverbruikArr,
                    borderColor: 'rgba(255, 206, 86, 1)',
                    backgroundColor: chart.config.type === 'line' ? 'rgba(255, 206, 86, 0.2)' : 'rgba(255, 206, 86, 0.6)',
                    fill: chart.config.type === 'line',
                    tension: 0.3
                }
            ];
            chart.update();
        });

        // Hydrogen data
        const waterstofproductieArr = filteredData.map(item => Number(item.waterstofproductie));
        const waterstofverbruikAutoArr = filteredData.map(item => Number(item.waterstofverbruik_auto));
        const waterstofopslagWoningArr = filteredData.map(item => Number(item.waterstofopslag_woning));

        [chart5, chart6].forEach(chart => {
            chart.data.labels = labels;
            chart.data.datasets = [
                {
                    label: 'Waterstofproductie',
                    data: waterstofproductieArr,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: chart.config.type === 'line' ? 'rgba(255, 99, 132, 0.2)' : 'rgba(255, 99, 132, 0.6)',
                    fill: chart.config.type === 'line',
                    tension: 0.3
                },
                {
                    label: 'Waterstofverbruik auto',
                    data: waterstofverbruikAutoArr,
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: chart.config.type === 'line' ? 'rgba(54, 162, 235, 0.2)' : 'rgba(54, 162, 235, 0.6)',
                    fill: chart.config.type === 'line',
                    tension: 0.3
                },
                {
                    label: 'Waterstofopslag woning',
                    data: waterstofopslagWoningArr,
                    borderColor: 'rgba(255, 206, 86, 1)',
                    backgroundColor: chart.config.type === 'line' ? 'rgba(255, 206, 86, 0.2)' : 'rgba(255, 206, 86, 0.6)',
                    fill: chart.config.type === 'line',
                    tension: 0.3
                }
            ];
            chart.update();
        });

        // Weather data
        const buitentemperatuurArr = filteredData.map(item => Number(item.buitentemperatuur));
        const binnentemperatuurArr = filteredData.map(item => Number(item.binnentemperatuur));
        const luchtdrukArr = filteredData.map(item => Number(item.luchtdruk));

        [chart8, chart9].forEach(chart => {
            chart.data.labels = labels;
            chart.data.datasets = [
                {
                    label: 'Buitentemperatuur',
                    data: buitentemperatuurArr,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: chart.config.type === 'line' ? 'rgba(75, 192, 192, 0.2)' : 'rgba(75, 192, 192, 0.6)',
                    fill: chart.config.type === 'line',
                    tension: 0.3
                },
                {
                    label: 'Binnentemperatuur',
                    data: binnentemperatuurArr,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: chart.config.type === 'line' ? 'rgba(255, 99, 132, 0.2)' : 'rgba(255, 99, 132, 0.6)',
                    fill: chart.config.type === 'line',
                    tension: 0.3
                },
                {
                    label: 'Luchtdruk',
                    data: luchtdrukArr,
                    borderColor: 'rgba(255, 206, 86, 1)',
                    backgroundColor: chart.config.type === 'line' ? 'rgba(255, 206, 86, 0.2)' : 'rgba(255, 206, 86, 0.6)',
                    fill: chart.config.type === 'line',
                    tension: 0.3
                }
            ];
            chart.update();
        });

        // Para los pie charts (chart1, chart4, chart7) podrías poner el promedio o mantenerlos en cero
        // Aquí pongo promedios para que tengan sentido:
        const avg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

        [chart1].forEach(chart => {
            chart.data.datasets[0].data = [
                avg(zonnepaneelspanningArr),
                avg(zonnepaneelstroomArr),
                avg(stroomverbruikArr)
            ];
            chart.update();
        });

        [chart4].forEach(chart => {
            chart.data.datasets[0].data = [
                avg(waterstofproductieArr),
                avg(waterstofverbruikAutoArr),
                avg(waterstofopslagWoningArr)
            ];
            chart.update();
        });

        [chart7].forEach(chart => {
            chart.data.datasets[0].data = [
                avg(buitentemperatuurArr),
                avg(binnentemperatuurArr),
                avg(luchtdrukArr)
            ];
            chart.update();
        });
    }
}


// Reset charts
function resetCharts() {
    const zero = [0, 0, 0];
    [chart1, chart2, chart3, chart4, chart5, chart6, chart7, chart8, chart9].forEach(chart => {
        chart.data.datasets[0].data = zero;
        chart.update();
    });
}
