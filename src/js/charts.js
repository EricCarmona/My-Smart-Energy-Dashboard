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
const ctx10 = document.getElementById('myLineChart10').getContext('2d');
const ctx11 = document.getElementById('myLineChart11').getContext('2d');
const ctx12 = document.getElementById('myLineChart12').getContext('2d');
const ctx13 = document.getElementById('myLineChart13').getContext('2d');
const ctx14 = document.getElementById('myLineChart14').getContext('2d');
const ctx15 = document.getElementById('myLineChart15').getContext('2d');
const ctx16 = document.getElementById('myLineChart16').getContext('2d');
const ctx17 = document.getElementById('myLineChart17').getContext('2d');
const ctx18 = document.getElementById('myLineChart18').getContext('2d');
const ctx19 = document.getElementById('myLineChart19').getContext('2d');
const ctx20 = document.getElementById('myLineChart20').getContext('2d');
const ctx21 = document.getElementById('myLineChart21').getContext('2d');

// Gráficos iniciales con datos vacíos
const dataLabels1 = ['Zonnepaneelspanning', 'Zonnepaneelstroom', 'Stroomverbruik woning'];
const dataLabels2 = ['Waterstofproductie', 'Waterstofverbruik auto', 'Waterstofopslag woning'];
const dataLabels3 = ['Buitentemperatuur', 'Binnentemperatuur', 'Luchtdruk'];

const defaultData = [12, 19, 3];

const chart1 = new Chart(ctx1, {
    type: 'pie',
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
    type: 'line',
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
    type: 'bar',
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
    type: 'doughnut',
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
    type: 'radar',
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
    type: 'polarArea',
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
    options: { responsive: true, maintainAspectRatio: false }
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
    options: { responsive: true, maintainAspectRatio: false }
});

const chart9 = new Chart(ctx9, {
    type: 'bar',
    data: {
        labels: dataLabels3,
        datasets: [{
            label: 'Weather & Environment',
            data: defaultData,
            backgroundColor: 'rgba(255, 206, 86, 0.6)'
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true } }
    }
});

const chart10 = new Chart(ctx10, {
    type: 'line',
    data: {
        labels: ['Zonnepaneelspanning'],
        datasets: [{
            label: 'Zonnepaneelspanning',
            data: [0],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,
            tension: 0.3
        }]
    },
    options: { responsive: true, maintainAspectRatio: false }
});

const chart11 = new Chart(ctx11, {
    type: 'line',
    data: {
        labels: ['Zonnepaneelstroom'],
        datasets: [{
            label: 'Zonnepaneelstroom',
            data: [0],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true,
            tension: 0.3
        }]
    },
    options: { responsive: true, maintainAspectRatio: false }
});

const chart12 = new Chart(ctx12, {
    type: 'line',
    data: {
        labels: ['Stroomverbruik Woning'],
        datasets: [{
            label: 'Stroomverbruik Woning',
            data: [0],
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            fill: true,
            tension: 0.3
        }]
    },
    options: { responsive: true, maintainAspectRatio: false }
});

const chart13 = new Chart(ctx13, {
    type: 'line',
    data: {
        labels: ['Accuniveau'],
        datasets: [{
            label: 'Accuniveau',
            data: [0],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            tension: 0.3
        }]
    },
    options: { responsive: true, maintainAspectRatio: false }
});

const chart14 = new Chart(ctx14, {
    type: 'bar',
    data: {
        labels: ['Waterstofproductie'],
        datasets: [{
            label: 'Waterstofproductie',
            data: [0],
            backgroundColor: 'rgba(255, 99, 132, 0.6)'
        }]
    },
    options: { responsive: true, maintainAspectRatio: false }
});

const chart15 = new Chart(ctx15, {
    type: 'pie',
    data: {
        labels: ['Waterstofverbruik auto'],
        datasets: [{
            label: 'Waterstofverbruik auto',
            data: [0],
            backgroundColor: ['rgba(54, 162, 235, 0.6)']
        }]
    },
    options: { responsive: true, maintainAspectRatio: false }
});

const chart16 = new Chart(ctx16, {
    type: 'line',
    data: {
        labels: ['Waterstofopslag woning'],
        datasets: [{
            label: 'Waterstofopslag woning',
            data: [0],
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            fill: true,
            tension: 0.3
        }]
    },
    options: { responsive: true, maintainAspectRatio: false }
});

const chart17 = new Chart(ctx17, {
    type: 'bar',
    data: {
        labels: ['Waterstofopslag auto'],
        datasets: [{
            label: 'Waterstofopslag auto',
            data: [0],
            backgroundColor: 'rgba(75, 192, 192, 0.6)'
        }]
    },
    options: { responsive: true, maintainAspectRatio: false }
});

const chart18 = new Chart(ctx18, {
    type: 'line',
    data: {
        labels: ['Buitentemperatuur'],
        datasets: [{
            label: 'Buitentemperatuur',
            data: [0],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,
            tension: 0.3
        }]
    },
    options: { responsive: true, maintainAspectRatio: false }
});

const chart19 = new Chart(ctx19, {
    type: 'bar',
    data: {
        labels: ['Binnentemperatuur'],
        datasets: [{
            label: 'Binnentemperatuur',
            data: [0],
            backgroundColor: 'rgba(54, 162, 235, 0.6)'
        }]
    },
    options: { responsive: true, maintainAspectRatio: false }
});

const chart20 = new Chart(ctx20, {
    type: 'bar',
    data: {
        labels: ['Luchtdruk'],
        datasets: [{
            label: 'Luchtdruk',
            data: [0],
            backgroundColor: 'rgba(255, 206, 86, 0.6)'
        }]
    },
    options: { responsive: true, maintainAspectRatio: false }
});

const chart21 = new Chart(ctx21, {
    type: 'line',
    data: {
        labels: ['Luchtvochtigheid'],
        datasets: [{
            label: 'Luchtvochtigheid',
            data: [0],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            tension: 0.3
        }]
    },
    options: { responsive: true, maintainAspectRatio: false }
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
        // Specific time: show single data point
        const filteredData = allData.filter(item => item.date === selectedDate && item.time === selectedTime);
        if (filteredData.length === 0) {
            resetCharts();
            return;
        }
        const d = filteredData[0];

        // Update pie charts with single data point
        const energyValues = [
            Number(d.zonnepaneelspanning || 0),
            Number(d.zonnepaneelstroom || 0),
            Number(d.stroomverbruik_woning || 0)
        ];
        [chart1].forEach(chart => {
            chart.data.datasets[0].data = energyValues;
            chart.update();
        });

        // Update line and bar charts with single point
        [chart2, chart3].forEach(chart => {
            chart.data.labels = ['Zonnepaneelspanning', 'Zonnepaneelstroom', 'Stroomverbruik woning'];
            chart.data.datasets = [{
                label: 'Zonnepaneelspanning',
                data: [energyValues[0]],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: chart.config.type === 'line' ? 'rgba(153, 102, 255, 0.2)' : 'rgba(153, 102, 255, 0.6)',
                fill: chart.config.type === 'line',
                tension: 0.3
            }, {
                label: 'Zonnepaneelstroom',
                data: [energyValues[1]],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: chart.config.type === 'line' ? 'rgba(255, 99, 132, 0.2)' : 'rgba(255, 99, 132, 0.6)',
                fill: chart.config.type === 'line',
                tension: 0.3
            }, {
                label: 'Stroomverbruik woning',
                data: [energyValues[2]],
                borderColor: 'rgba(255, 206, 86, 1)',
                backgroundColor: chart.config.type === 'line' ? 'rgba(255, 206, 86, 0.2)' : 'rgba(255, 206, 86, 0.6)',
                fill: chart.config.type === 'line',
                tension: 0.3
            }];
            chart.update();
        });

        // Hydrogen
        const hydrogenValues = [
            Number(d.waterstofproductie || 0),
            Number(d.waterstofverbruik_auto || 0),
            Number(d.waterstofopslag_woning || 0)
        ];
        [chart4].forEach(chart => {
            chart.data.datasets[0].data = hydrogenValues;
            chart.update();
        });
        [chart5, chart6].forEach(chart => {
            chart.data.labels = ['Waterstofproductie', 'Waterstofverbruik auto', 'Waterstofopslag woning'];
            chart.data.datasets = [{
                label: 'Waterstofproductie',
                data: [hydrogenValues[0]],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: chart.config.type === 'line' ? 'rgba(255, 99, 132, 0.2)' : 'rgba(255, 99, 132, 0.6)',
                fill: chart.config.type === 'line',
                tension: 0.3
            }, {
                label: 'Waterstofverbruik auto',
                data: [hydrogenValues[1]],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: chart.config.type === 'line' ? 'rgba(54, 162, 235, 0.2)' : 'rgba(54, 162, 235, 0.6)',
                fill: chart.config.type === 'line',
                tension: 0.3
            }, {
                label: 'Waterstofopslag woning',
                data: [hydrogenValues[2]],
                borderColor: 'rgba(255, 206, 86, 1)',
                backgroundColor: chart.config.type === 'line' ? 'rgba(255, 206, 86, 0.2)' : 'rgba(255, 206, 86, 0.6)',
                fill: chart.config.type === 'line',
                tension: 0.3
            }];
            chart.update();
        });

        // Weather
        const weatherValues = [
            Number(d.buitentemperatuur || 0),
            Number(d.binnentemperatuur || 0),
            Number(d.luchtdruk || 0)
        ];
        [chart7].forEach(chart => {
            chart.data.datasets[0].data = weatherValues;
            chart.update();
        });
        [chart8, chart9].forEach(chart => {
            chart.data.labels = ['Buitentemperatuur', 'Binnentemperatuur', 'Luchtdruk'];
            chart.data.datasets = [{
                label: 'Buitentemperatuur',
                data: [weatherValues[0]],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: chart.config.type === 'line' ? 'rgba(75, 192, 192, 0.2)' : 'rgba(75, 192, 192, 0.6)',
                fill: chart.config.type === 'line',
                tension: 0.3
            }, {
                label: 'Binnentemperatuur',
                data: [weatherValues[1]],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: chart.config.type === 'line' ? 'rgba(255, 99, 132, 0.2)' : 'rgba(255, 99, 132, 0.6)',
                fill: chart.config.type === 'line',
                tension: 0.3
            }, {
                label: 'Luchtdruk',
                data: [weatherValues[2]],
                borderColor: 'rgba(255, 206, 86, 1)',
                backgroundColor: chart.config.type === 'line' ? 'rgba(255, 206, 86, 0.2)' : 'rgba(255, 206, 86, 0.6)',
                fill: chart.config.type === 'line',
                tension: 0.3
            }];
            chart.update();
        });

        // Update charts 10–21 with single data point
        chart10.data.labels = [selectedTime];
        chart10.data.datasets[0].data = [Number(d.zonnepaneelspanning || 0)];
        chart10.update();

        chart11.data.labels = [selectedTime];
        chart11.data.datasets[0].data = [Number(d.zonnepaneelstroom || 0)];
        chart11.update();

        chart12.data.labels = [selectedTime];
        chart12.data.datasets[0].data = [Number(d.stroomverbruik_woning || 0)];
        chart12.update();

        chart13.data.labels = [selectedTime];
        chart13.data.datasets[0].data = [Number(d.accuniveau || 0)];
        chart13.update();

        chart14.data.labels = [selectedTime];
        chart14.data.datasets[0].data = [Number(d.waterstofproductie || 0)];
        chart14.update();

        chart15.data.labels = [selectedTime];
        chart15.data.datasets[0].data = [Number(d.waterstofverbruik_auto || 0)];
        chart15.update();

        chart16.data.labels = [selectedTime];
        chart16.data.datasets[0].data = [Number(d.waterstofopslag_woning || 0)];
        chart16.update();

        chart17.data.labels = [selectedTime];
        chart17.data.datasets[0].data = [Number(d.waterstofopslag_auto || 0)];
        chart17.update();

        chart18.data.labels = [selectedTime];
        chart18.data.datasets[0].data = [Number(d.buitentemperatuur || 0)];
        chart18.update();

        chart19.data.labels = [selectedTime];
        chart19.data.datasets[0].data = [Number(d.binnentemperatuur || 0)];
        chart19.update();

        chart20.data.labels = [selectedTime];
        chart20.data.datasets[0].data = [Number(d.luchtdruk || 0)];
        chart20.update();

        chart21.data.labels = [selectedTime];
        chart21.data.datasets[0].data = [Number(d.luchtvochtigheid || 0)];
        chart21.update();

    } else {
        // Whole day: show data over time
        const filteredData = allData.filter(item => item.date === selectedDate);
        if (filteredData.length === 0) {
            resetCharts();
            return;
        }

        // Labels for line/bar charts: hours of the day
        const labels = filteredData.map(item => item.time);

        // Energy data arrays
        const zonnepaneelspanningArr = filteredData.map(item => Number(item.zonnepaneelspanning || 0));
        const zonnepaneelstroomArr = filteredData.map(item => Number(item.zonnepaneelstroom || 0));
        const stroomverbruikArr = filteredData.map(item => Number(item.stroomverbruik_woning || 0));
        const accuniveauArr = filteredData.map(item => Number(item.accuniveau || 0));

        // Hydrogen data arrays
        const waterstofproductieArr = filteredData.map(item => Number(item.waterstofproductie || 0));
        const waterstofverbruikAutoArr = filteredData.map(item => Number(item.waterstofverbruik_auto || 0));
        const waterstofopslagWoningArr = filteredData.map(item => Number(item.waterstofopslag_woning || 0));
        const waterstofopslagAutoArr = filteredData.map(item => Number(item.waterstofopslag_auto || 0));

        // Weather data arrays
        const buitentemperatuurArr = filteredData.map(item => Number(item.buitentemperatuur || 0));
        const binnentemperatuurArr = filteredData.map(item => Number(item.binnentemperatuur || 0));
        const luchtdrukArr = filteredData.map(item => Number(item.luchtdruk || 0));
        const luchtvochtigheidArr = filteredData.map(item => Number(item.luchtvochtigheid || 0));

        // Update chart2 (line) and chart3 (bar) with all data by hour
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

        // Update charts 10–21 with time series data
        chart10.data.labels = labels;
        chart10.data.datasets[0].data = zonnepaneelspanningArr;
        chart10.update();

        chart11.data.labels = labels;
        chart11.data.datasets[0].data = zonnepaneelstroomArr;
        chart11.update();

        chart12.data.labels = labels;
        chart12.data.datasets[0].data = stroomverbruikArr;
        chart12.update();

        chart13.data.labels = labels;
        chart13.data.datasets[0].data = accuniveauArr;
        chart13.update();

        chart14.data.labels = labels;
        chart14.data.datasets[0].data = waterstofproductieArr;
        chart14.update();

        chart15.data.labels = labels;
        chart15.data.datasets[0].data = waterstofverbruikAutoArr;
        chart15.update();

        chart16.data.labels = labels;
        chart16.data.datasets[0].data = waterstofopslagWoningArr;
        chart16.update();

        chart17.data.labels = labels;
        chart17.data.datasets[0].data = waterstofopslagAutoArr;
        chart17.update();

        chart18.data.labels = labels;
        chart18.data.datasets[0].data = buitentemperatuurArr;
        chart18.update();

        chart19.data.labels = labels;
        chart19.data.datasets[0].data = binnentemperatuurArr;
        chart19.update();

        chart20.data.labels = labels;
        chart20.data.datasets[0].data = luchtdrukArr;
        chart20.update();

        chart21.data.labels = labels;
        chart21.data.datasets[0].data = luchtvochtigheidArr;
        chart21.update();

        // Update pie charts with averages
        const avg = arr => arr.reduce((a, b) => a + b, 0) / (arr.length || 1);

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
    const zeroSingle = [0];
    [chart1, chart4, chart7].forEach(chart => {
        chart.data.datasets[0].data = zero;
        chart.update();
    });
    [chart2, chart3, chart5, chart6, chart8, chart9].forEach(chart => {
        chart.data.datasets = [{
            label: chart.data.datasets[0].label,
            data: zero,
            borderColor: chart.data.datasets[0].borderColor,
            backgroundColor: chart.data.datasets[0].backgroundColor,
            fill: chart.config.type === 'line',
            tension: 0.3
        }];
        chart.update();
    });
    [chart10, chart11, chart12, chart13, chart14, chart15, chart16, chart17, chart18, chart19, chart20, chart21].forEach(chart => {
        chart.data.labels = [chart.data.datasets[0].label];
        chart.data.datasets[0].data = zeroSingle;
        chart.update();
    });
}