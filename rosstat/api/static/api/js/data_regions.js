/*
=================================== Данные по региону | RegionData ======================
*/

// Получение контекста для рисования графиков
let canvas_labor_force = document.getElementById('LaborForceRegionChart');
let context_labor_force = canvas_labor_force ? canvas_labor_force.getContext('2d') : null;

let canvas_workforce_level = document.getElementById('WorkForceLevelChart');
let context_workforce_level = canvas_workforce_level ? canvas_workforce_level.getContext('2d') : null;

let canvas_workforce_he = document.getElementById('WorkForceHEChart');
let context_workforce_he = canvas_workforce_he ? canvas_workforce_he.getContext('2d') : null;

let canvas_population = document.getElementById('PopulationRegionChart');
let context_population = canvas_population ? canvas_population.getContext('2d') : null;

// Хранилища данных для каждого графика
let laborForceData = [];
let workforceLevelData = [];
let workforceHEData = [];
let populationData = [];

let yearsLaborForce = [];
let yearsWorkforceLevel = [];
let yearsWorkforceHE = [];
let yearsPopulation = [];

let chartLaborForce = null;
let chartWorkforceLevel = null;
let chartWorkforceHE = null;
let chartPopulation = null;

// Функция обновления графика численности рабочей силы
const updateChartLaborForce = () => {
    if (chartLaborForce) {
        chartLaborForce.data.datasets = laborForceData;
        chartLaborForce.update();
    } else if (context_labor_force && yearsLaborForce.length > 0) {
        let chartType = yearsLaborForce.length === 1 ? 'bar' : 'line';

        let datasetsForChart = laborForceData;
        if (chartType === 'bar') {
            datasetsForChart = laborForceData.map(dataset => ({
                ...dataset,
                backgroundColor: 'rgba(30, 136, 229, 0.6)',
                borderWidth: 1
            }));
        }

        let config = {
            type: chartType,
            data: {
                labels: yearsLaborForce,
                datasets: datasetsForChart
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        onClick: null,
                        labels: {
                            font: { size: 10 },
                            boxWidth: 12,
                            boxHeight: 12,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                let label = context.dataset.label || '';
                                let value = context.parsed.y;
                                return `${label}: ${value?.toFixed(1) ?? 'Нет данных'} тыс. чел.`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Численность (тыс. чел.)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Год'
                        }
                    }
                }
            }
        };
        chartLaborForce = new Chart(context_labor_force, config);
    }
};

// Функция обновления графика уровня участия в рабочей силе
const updateChartWorkforceLevel = () => {
    if (chartWorkforceLevel) {
        chartWorkforceLevel.data.datasets = workforceLevelData;
        chartWorkforceLevel.update();
    } else if (context_workforce_level && yearsWorkforceLevel.length > 0) {
        let chartType = yearsWorkforceLevel.length === 1 ? 'bar' : 'line';

        let datasetsForChart = workforceLevelData;
        if (chartType === 'bar') {
            datasetsForChart = workforceLevelData.map(dataset => ({
                ...dataset,
                backgroundColor: 'rgba(30, 136, 229, 0.6)',
                borderWidth: 1
            }));
        }

        let config = {
            type: chartType,
            data: {
                labels: yearsWorkforceLevel,
                datasets: datasetsForChart
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        onClick: null,
                        labels: {
                            font: { size: 10 },
                            boxWidth: 12,
                            boxHeight: 12,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                let label = context.dataset.label || '';
                                let value = context.parsed.y;
                                return `${label}: ${value?.toFixed(1) ?? 'Нет данных'} %`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Уровень участия (%)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Год'
                        }
                    }
                }
            }
        };
        chartWorkforceLevel = new Chart(context_workforce_level, config);
    }
};

// Функция обновления графика доли работников с высшим образованием
const updateChartWorkforceHE = () => {
    if (chartWorkforceHE) {
        chartWorkforceHE.data.datasets = workforceHEData;
        chartWorkforceHE.update();
    } else if (context_workforce_he && yearsWorkforceHE.length > 0) {
        let chartType = yearsWorkforceHE.length === 1 ? 'bar' : 'line';

        let datasetsForChart = workforceHEData;
        if (chartType === 'bar') {
            datasetsForChart = workforceHEData.map(dataset => ({
                ...dataset,
                backgroundColor: 'rgba(30, 136, 229, 0.6)',
                borderWidth: 1
            }));
        }

        let config = {
            type: chartType,
            data: {
                labels: yearsWorkforceHE,
                datasets: datasetsForChart
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        onClick: null,
                        labels: {
                            font: { size: 10 },
                            boxWidth: 12,
                            boxHeight: 12,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                let label = context.dataset.label || '';
                                let value = context.parsed.y;
                                return `${label}: ${value?.toFixed(1) ?? 'Нет данных'} %`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Доля с высшим образованием (%)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Год'
                        }
                    }
                }
            }
        };
        chartWorkforceHE = new Chart(context_workforce_he, config);
    }
};

// Функция обновления графика численности населения
const updateChartPopulation = () => {
    if (chartPopulation) {
        chartPopulation.data.datasets = populationData;
        chartPopulation.update();
    } else if (context_population && yearsPopulation.length > 0) {
        let chartType = yearsPopulation.length === 1 ? 'bar' : 'line';

        let datasetsForChart = populationData;
        if (chartType === 'bar') {
            datasetsForChart = populationData.map(dataset => ({
                ...dataset,
                backgroundColor: 'rgba(30, 136, 229, 0.6)',
                borderWidth: 1
            }));
        }

        let config = {
            type: chartType,
            data: {
                labels: yearsPopulation,
                datasets: datasetsForChart
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        onClick: null,
                        labels: {
                            font: { size: 10 },
                            boxWidth: 12,
                            boxHeight: 12,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                let label = context.dataset.label || '';
                                let value = context.parsed.y;
                                return `${label}: ${value?.toFixed(1) ?? 'Нет данных'} тыс. чел.`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Численность (тыс. чел.)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Год'
                        }
                    }
                }
            }
        };
        chartPopulation = new Chart(context_population, config);
    }
};


// Функция загрузки данных по региону
const loadRegionData = (regionId, regionName) => {
    // Загрузка данных о рабочей силе
    axios.get(`/api/reg/laborforce/?region=${regionId}`)
        .then(response => {
            let data = response.data;
            if (data && data.length > 0) {
                yearsLaborForce = [...new Set(data.map(item => item.year))].sort((a, b) => a - b);
                let values = yearsLaborForce.map(year => {
                    let item = data.find(d => d.year === year);
                    return item ? item.value : null;
                });

                laborForceData = [{
                    label: `${regionName} (Численность рабочей силы)`,
                    data: values,
                    borderColor: '#1e88e5',
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    tension: 0.1,
                    fill: false
                }];
                updateChartLaborForce();
            }
        })
        .catch(error => {
            console.error('Ошибка при загрузке данных о рабочей силе:', error);
        });

    // Загрузка данных об уровне участия в рабочей силе
    axios.get(`/api/reg/workforcelevel/?region=${regionId}`)
        .then(response => {
            let data = response.data;
            if (data && data.length > 0) {
                yearsWorkforceLevel = [...new Set(data.map(item => item.year))].sort((a, b) => a - b);
                let values = yearsWorkforceLevel.map(year => {
                    let item = data.find(d => d.year === year);
                    return item ? item.value : null;
                });

                workforceLevelData = [{
                    label: `${regionName} (Уровень участия в рабочей силе)`,
                    data: values,
                    borderColor: '#1e88e5',
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    tension: 0.1,
                    fill: false
                }];
                updateChartWorkforceLevel();
            }
        })
        .catch(error => {
            console.error('Ошибка при загрузке данных об уровне участия:', error);
        });

    // Загрузка данных о доле работников с высшим образованием
    axios.get(`/api/reg/he/workforcelevel/?region=${regionId}`)
        .then(response => {
            let data = response.data;
            if (data && data.length > 0) {
                yearsWorkforceHE = [...new Set(data.map(item => item.year))].sort((a, b) => a - b);
                let values = yearsWorkforceHE.map(year => {
                    let item = data.find(d => d.year === year);
                    return item ? item.value : null;
                });

                workforceHEData = [{
                    label: `${regionName} (Доля с высшим образованием)`,
                    data: values,
                    borderColor: '#1e88e5',
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    tension: 0.1,
                    fill: false
                }];
                updateChartWorkforceHE();
            }
        })
        .catch(error => {
            console.error('Ошибка при загрузке данных о высшем образовании:', error);
        });

    // Загрузка данных о населении
    axios.get(`/api/reg/population/?region=${regionId}`)
        .then(response => {
            let data = response.data;
            if (data && data.length > 0) {
                yearsPopulation = [...new Set(data.map(item => item.year))].sort((a, b) => a - b);
                let values = yearsPopulation.map(year => {
                    let item = data.find(d => d.year === year);
                    return item ? item.value : null;
                });

                populationData = [{
                    label: `${regionName} (Численность населения)`,
                    data: values,
                    borderColor: '#1e88e5',
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    tension: 0.1,
                    fill: false
                }];
                updateChartPopulation();
            }
        })
        .catch(error => {
            console.error('Ошибка при загрузке данных о населении:', error);
        });
};

document.addEventListener('DOMContentLoaded', () => {
    // Обработчик кнопки поиска
    let searchButton = document.getElementById('button-show-info');
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            let select = document.querySelector('.select-name-region');
            let regionId = select?.value;
            let regionName = select?.options[select.selectedIndex]?.text;

            console.log('Выбран регион:', regionName, 'ID:', regionId);

            if (regionId && regionName && regionId !== '') {
                loadRegionData(regionId, regionName);
                let showInfoDiv = document.querySelector('.show-info');
                if (showInfoDiv) {
                    showInfoDiv.style.display = 'flex';
                }
            } else {
                alert('Пожалуйста, выберите регион');
            }
        });
    }
});