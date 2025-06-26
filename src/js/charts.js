// charts.js
document.addEventListener("DOMContentLoaded", () => {
    // Chart 1 - Pie chart
    const ctx1 = document.getElementById('myLineChart1').getContext('2d');
    new Chart(ctx1, {
        type: 'pie',
        data: {
            labels: ['January', 'February', 'March', 'April'],
            datasets: [{
                label: 'Energy Consumption (kWh)',
                data: [120, 150, 100, 180],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(54, 162, 235, 0.6)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: true,
                },
            }
        }
    });

    // Chart 2 - Line chart
    const ctx2 = document.getElementById('myLineChart2').getContext('2d');
    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April'],
            datasets: [{
                label: 'Monthly Sales',
                data: [65, 59, 80, 81],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderWidth: 2,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Chart 3 - Bar chart
    const ctx3 = document.getElementById('myLineChart3').getContext('2d');
    new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [{
                label: 'Revenue',
                data: [30000, 40000, 35000, 50000],
                backgroundColor: 'rgba(255, 159, 64, 0.6)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Chart 4 - Radar chart
    const ctx4 = document.getElementById('myLineChart4').getContext('2d');
    new Chart(ctx4, {
        type: 'radar',
        data: {
            labels: ['Speed', 'Strength', 'Agility', 'Endurance', 'Skill'],
            datasets: [{
                label: 'Player A',
                data: [65, 59, 90, 81, 56],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                pointBackgroundColor: 'rgba(255, 99, 132, 1)'
            }, {
                label: 'Player B',
                data: [28, 48, 40, 19, 96],
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                pointBackgroundColor: 'rgba(54, 162, 235, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true
                }
            }
        }
    });

    // Chart 5 - Polar Area chart
    const ctx5 = document.getElementById('myLineChart5').getContext('2d');
    new Chart(ctx5, {
        type: 'polarArea',
        data: {
            labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
            datasets: [{
                label: 'Votes',
                data: [11, 16, 7, 3, 14],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(255, 205, 86, 0.7)',
                    'rgba(201, 203, 207, 0.7)',
                    'rgba(54, 162, 235, 0.7)'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });

    // Chart 6 - Doughnut chart
    const ctx6 = document.getElementById('myLineChart6').getContext('2d');
    new Chart(ctx6, {
        type: 'doughnut',
        data: {
            labels: ['Chrome', 'Firefox', 'Edge', 'Safari'],
            datasets: [{
                label: 'Browser Usage',
                data: [55, 25, 10, 10],
                backgroundColor: [
                    'rgba(66, 133, 244, 0.7)',
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                }
            }
        }
    });

    // Chart 7 - Bubble chart
    const ctx7 = document.getElementById('myLineChart7').getContext('2d');
    new Chart(ctx7, {
        type: 'bubble',
        data: {
            datasets: [{
                label: 'Population',
                data: [
                    { x: 20, y: 30, r: 15 },
                    { x: 40, y: 10, r: 10 },
                    { x: 25, y: 15, r: 20 },
                    { x: 35, y: 25, r: 12 }
                ],
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Chart 8 - Scatter chart
    const ctx8 = document.getElementById('myLineChart8').getContext('2d');
    new Chart(ctx8, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Sample Points',
                data: [
                    { x: -10, y: 0 },
                    { x: 0, y: 10 },
                    { x: 10, y: 5 },
                    { x: 5, y: -5 }
                ],
                backgroundColor: 'rgba(54, 162, 235, 0.7)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                }
            }
        }
    });

    // Chart 9 - Stacked Bar Chart
    const ctx9 = document.getElementById('myLineChart9').getContext('2d');
    new Chart(ctx9, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April'],
            datasets: [
                {
                    label: 'Product A',
                    data: [50, 60, 70, 80],
                    backgroundColor: 'rgba(255, 99, 132, 0.7)'
                },
                {
                    label: 'Product B',
                    data: [30, 40, 50, 60],
                    backgroundColor: 'rgba(54, 162, 235, 0.7)'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    stacked: true,
                    beginAtZero: true
                }
            }
        }
    });
});
