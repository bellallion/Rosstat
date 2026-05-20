/*
=================================== Сравнение данных по двум регионам | CompareRegions ======================
*/

// Получение контекста для рисования графиков
let canvas_labor_force = document.getElementById('LaborForceRegionChart');
let context_labor_force = canvas_labor_force ? canvas_labor_force.getContext('2d') : null;

let canvas_workforce_level = document.getElementById('WorkForceLevelChart');
let context_workforce_level = canvas_workforce_level ? canvas_workforce_level.getContext('2d') : null;

let canvas_workforce_he = document.getElementById('WorkForceHEChart');
let context_workforce_he = canvas_workforce_he ? canvas_workforce_he.getContext('2d') : null;

// Хранилища данных
let chartLaborForce = null;
let chartWorkforceLevel = null;
let chartWorkforceHE = null;

// Функция создания или обновления графика с двумя регионами
function createOrUpdateComparisonChart(chart, context, years, datasets, title, yLabel) {
    let chartType = years.length === 1 ? 'bar' : 'line';
    
    let config = {
        type: chartType,
        data: {
            labels: years,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: { size: 11 },
                        boxWidth: 14,
                        boxHeight: 14,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.dataset.label || '';
                            let value = context.parsed.y;
                            let suffix = yLabel === '%' ? '%' : 'тыс. чел.';
                            return `${label}: ${value?.toFixed(1) ?? 'Нет данных'} ${suffix}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: yLabel
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
    
    if (chart) {
        chart.data.datasets = datasets;
        chart.update();
        return chart;
    } else {
        return new Chart(context, config);
    }
}

// Функция загрузки данных для двух регионов
const loadComparisonData = async (region1Id, region1Name, region2Id, region2Name) => {
    // Загружаем данные для обоих регионов
    const [
        laborForce1, laborForce2,
        workforceLevel1, workforceLevel2,
        workforceHE1, workforceHE2
    ] = await Promise.all([
        axios.get(`/api/reg/laborforce/?region=${region1Id}`),
        axios.get(`/api/reg/laborforce/?region=${region2Id}`),
        axios.get(`/api/reg/workforcelevel/?region=${region1Id}`),
        axios.get(`/api/reg/workforcelevel/?region=${region2Id}`),
        axios.get(`/api/reg/he/workforcelevel/?region=${region1Id}`),
        axios.get(`/api/reg/he/workforcelevel/?region=${region2Id}`)
    ]);
    
    // Обработка данных для рабочей силы
    processLaborForceData(laborForce1.data, laborForce2.data, region1Name, region2Name);
    
    // Обработка данных для уровня участия
    processWorkforceLevelData(workforceLevel1.data, workforceLevel2.data, region1Name, region2Name);
    
    // Обработка данных для высшего образования
    processWorkforceHEData(workforceHE1.data, workforceHE2.data, region1Name, region2Name);
};

// Обработка данных рабочей силы
function processLaborForceData(data1, data2, region1Name, region2Name) {
    // Объединяем годы из обоих регионов
    let allYears = [...new Set([...data1.map(i => i.year), ...data2.map(i => i.year)])].sort((a, b) => a - b);
    
    let values1 = allYears.map(year => {
        let item = data1.find(d => d.year === year);
        return item ? item.value : null;
    });
    
    let values2 = allYears.map(year => {
        let item = data2.find(d => d.year === year);
        return item ? item.value : null;
    });
    
    let datasets = [
        {
            label: `${region1Name}`,
            data: values1,
            borderColor: '#1e88e5',
            backgroundColor: 'transparent',
            borderWidth: 2,
            tension: 0.1,
            fill: false,
            pointBackgroundColor: '#1e88e5'
        },
        {
            label: `${region2Name}`,
            data: values2,
            borderColor: '#ff6b6b',
            backgroundColor: 'transparent',
            borderWidth: 2,
            tension: 0.1,
            fill: false,
            pointBackgroundColor: '#ff6b6b'
        }
    ];
    
    chartLaborForce = createOrUpdateComparisonChart(
        chartLaborForce, context_labor_force, allYears, datasets,
        'Сравнение численности рабочей силы', 'Численность (тыс. чел.)'
    );
}

// Обработка данных уровня участия
function processWorkforceLevelData(data1, data2, region1Name, region2Name) {
    let allYears = [...new Set([...data1.map(i => i.year), ...data2.map(i => i.year)])].sort((a, b) => a - b);
    
    let values1 = allYears.map(year => {
        let item = data1.find(d => d.year === year);
        return item ? item.value : null;
    });
    
    let values2 = allYears.map(year => {
        let item = data2.find(d => d.year === year);
        return item ? item.value : null;
    });
    
    let datasets = [
        {
            label: `${region1Name}`,
            data: values1,
            borderColor: '#1e88e5',
            backgroundColor: 'transparent',
            borderWidth: 2,
            tension: 0.1,
            fill: false
        },
        {
            label: `${region2Name}`,
            data: values2,
            borderColor: '#ff6b6b',
            backgroundColor: 'transparent',
            borderWidth: 2,
            tension: 0.1,
            fill: false
        }
    ];
    
    chartWorkforceLevel = createOrUpdateComparisonChart(
        chartWorkforceLevel, context_workforce_level, allYears, datasets,
        'Сравнение уровня участия в рабочей силе', 'Уровень участия (%)'
    );
}

// Обработка данных о высшем образовании
function processWorkforceHEData(data1, data2, region1Name, region2Name) {
    let allYears = [...new Set([...data1.map(i => i.year), ...data2.map(i => i.year)])].sort((a, b) => a - b);
    
    let values1 = allYears.map(year => {
        let item = data1.find(d => d.year === year);
        return item ? item.value : null;
    });
    
    let values2 = allYears.map(year => {
        let item = data2.find(d => d.year === year);
        return item ? item.value : null;
    });
    
    let datasets = [
        {
            label: `${region1Name}`,
            data: values1,
            borderColor: '#1e88e5',
            backgroundColor: 'transparent',
            borderWidth: 2,
            tension: 0.1,
            fill: false
        },
        {
            label: `${region2Name}`,
            data: values2,
            borderColor: '#ff6b6b',
            backgroundColor: 'transparent',
            borderWidth: 2,
            tension: 0.1,
            fill: false
        }
    ];
    
    chartWorkforceHE = createOrUpdateComparisonChart(
        chartWorkforceHE, context_workforce_he, allYears, datasets,
        'Сравнение доли с высшим образованием', 'Доля (%)'
    );
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    // Инициализация Select2 для выбора регионов (если нужно)
    if (typeof initCompareSelect2 === 'function') {
        initCompareSelect2();
    }
    
    let searchButton = document.getElementById('button-show-info');
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            let select1 = document.querySelector('.select-name-region-first');
            let select2 = document.querySelector('.select-name-region-second');
            
            let region1Id = getRegionCode(select1?.value);
            let region1Name = select1?.options[select1.selectedIndex]?.text;
            let region2Id = getRegionCode(select2?.value);
            let region2Name = select2?.options[select2.selectedIndex]?.text;
            
            if (region1Id && region2Id && region1Id !== '' && region2Id !== '') {
                loadComparisonData(region1Id, region1Name, region2Id, region2Name);
                let showInfoDiv = document.querySelector('.show-info');
                if (showInfoDiv) {
                    showInfoDiv.style.display = 'flex';
                }
            } else {
                alert('Пожалуйста, выберите оба региона для сравнения');
            }
        });
    }
});