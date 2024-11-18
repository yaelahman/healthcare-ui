
var ctx = document.getElementById('analyticsChart').getContext('2d');
var chart; // Store chart instance

// Initial load with total patients data
function loadTotalPatientsData() {
    if (chart) chart.destroy(); // Clear previous chart

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Sep 10', 'Sep 11', 'Sep 12', 'Sep 13', 'Sep 14', 'Sep 15', 'Sep 16'],
            datasets: [{
                label: 'Total Patients',
                borderColor: 'blue',
                data: [100, 120, 105, 140, 115, 100, 150],
                fill: false,
                tension: 0.1,
                pointBackgroundColor: 'white',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 80,
                    max: 160
                }
            }
        }
    });
}

// Load new patients data
function loadNewPatientsData() {
    if (chart) chart.destroy(); // Clear previous chart

    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Sep 10', 'Sep 11', 'Sep 12', 'Sep 13', 'Sep 14', 'Sep 15', 'Sep 16'],
            datasets: [{
                label: 'New Patients',
                backgroundColor: 'green',
                data: [30, 40, 25, 50, 45, 60, 75],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Weekly, Monthly, Yearly data loaders
function loadWeeklyData() {
    document.getElementById('dropdownButton').innerText = 'Weekly';
    loadTotalPatientsData();
    toggleDropdown(); // Close dropdown
}

function loadMonthlyData() {
    document.getElementById('dropdownButton').innerText = 'Monthly';
    loadTotalPatientsData();
    toggleDropdown(); // Close dropdown
}

function loadYearlyData() {
    document.getElementById('dropdownButton').innerText = 'Yearly';
    loadTotalPatientsData();
    toggleDropdown(); // Close dropdown
}

// Event listeners for buttons
document.getElementById('totalPatientsBtn').addEventListener('click', loadTotalPatientsData);
document.getElementById('newPatientsBtn').addEventListener('click', loadNewPatientsData);

// Initial load of the total patients chart
loadTotalPatientsData();

