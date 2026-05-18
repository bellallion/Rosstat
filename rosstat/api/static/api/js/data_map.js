/*
===================================Численность населения | population======================
*/

// Получение котекста для рисования графиков
let canvas_population = document.getElementById('population');
let context_population = canvas_population.getContext('2d');

//Функции

const createLineChart_population =
    (
        years,
        totalPopulation,
        urbanPopulation,
        ruralPopulation,
        urbanPercentage,
        ruralPercentage
    ) => {
        if (window.populationChart) {
            window.populationChart.destroy();
            window.populationChart = null;
        }

        data = {
            labels: years,
            datasets:
                [
                    { data: totalPopulation, label: 'Численность населения' },
                    { data: urbanPopulation, label: 'Городское население' },
                    { data: ruralPopulation, label: 'Сельское население' },
                    // {data: urbanPercentage, label: 'Процент городского населения'},
                    // {data: ruralPercentage, label: 'Процент сельского населения'}
                ]
        }

        let config = {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
            }
        };

        let populationChart = new Chart(context_population, config);
        window.populationChart = populationChart;
    }


// Получение данных с сервера
axios.get('/api/rus/population')
    .then((response) => {
        let data = response.data;
        let years = [];
        let totalPopulation = [];
        let urbanPopulation = [];
        let ruralPopulation = [];
        let urbanPercentage = [];
        let ruralPercentage = [];

        for (let i = 0; i < data.length; i++) {
            years.push(data[i].year);
            totalPopulation.push(data[i].total_population);
            urbanPopulation.push(data[i].urban_population);
            ruralPopulation.push(data[i].rural_population);
            urbanPercentage.push(data[i].urban_percentage);
            ruralPercentage.push(data[i].rural_percentage);
        }

        createLineChart_population(
            years,
            totalPopulation,
            urbanPopulation,
            ruralPopulation,
            urbanPercentage,
            ruralPercentage
        );
    });

/*
=================================== Данные о занятости населения | EmploymentRussia ======================
*/

// Получение котекста для рисования графиков
let canvas_emp_rus = document.getElementById('EmploymentRussia');
let context_emp_rus = canvas_emp_rus.getContext('2d');

//Функции

const createLineChart_emp_rus =
    (
        years,
        month,
        yearWithMonth,
        laborForce,
        employPeople,
        unemployedPeople,
        percentInLabor,
        percentEmployed,
        percentUnemployed
    ) => {
        if (window.employmentRusChart) {
            window.employmentRusChart.destroy();
            window.employmentRusChart = null;
        }

        data = {
            labels: yearWithMonth,
            datasets:
                [
                    { data: laborForce, label: 'Рабочая сила' },
                    { data: employPeople, label: 'Занятые' },
                    { data: unemployedPeople, label: 'Безработные' },
                    // {data: percentInLabor, label: 'ровень участия в составе рабочей силы, в %'},
                    // {data: percentEmployed, label: 'Уровень занятости, в %'},
                    // {data: percentUnemployed, label: 'Уровень безработицы, в %'}
                ]
        }

        let config = {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
            }
        };

        let employmentRusChart = new Chart(context_emp_rus, config);
        window.employmentRusChart = employmentRusChart;
    }


// Получение данных с сервера
axios.get('/api/rus/employrus')
    .then((response) => {

        let data = response.data;
        let years = [];
        let month = [];
        let yearWithMonth = [];
        let laborForce = [];
        let employPeople = [];
        let unemployedPeople = [];
        let percentInLabor = [];
        let percentEmployed = [];
        let percentUnemployed = [];

        for (let i = 0; i < data.length; i++) {
            years.push(data[i].year);
            month.push(data[i].month);
            yearWithMonth.push(`${data[i].year} ${data[i].month}`);
            laborForce.push(data[i].labor_force);
            employPeople.push(data[i].employ_people);
            unemployedPeople.push(data[i].unemployed_people);
            percentInLabor.push(data[i].percent_in_labor);
            percentEmployed.push(data[i].percent_employed);
            percentUnemployed.push(data[i].percent_unemployed);
        }

        createLineChart_emp_rus(
            years,
            month,
            yearWithMonth,
            laborForce,
            employPeople,
            unemployedPeople,
            percentInLabor,
            percentEmployed,
            percentUnemployed
        );
    });


/*
=================================== Значения занятости по годам для каждого вида деятельности | EmploymentByTypeOfWork ======================
*/

// Получение котекста для рисования графиков
let canvas_by_type_of_work = document.getElementById('EmploymentByTypeOfWork');
let context_by_type_of_work = canvas_by_type_of_work.getContext('2d');


let allDatasetsEmployment = [];
let yearsEmployment = [];
let chartEmployment = null;

// Функции
const updatelineChartEmployment = () => {
    let selectedActivities = Array.from(document.querySelectorAll('#activityCheckboxesEmpTypeWork input:checked'))
        .map(cb => cb.value);


    let filteredDatasets = allDatasetsEmployment.filter(dataset =>
        selectedActivities.includes(dataset.label)
    );

    let datasetsToShow = filteredDatasets.length > 0 ? filteredDatasets : [];

    if (chartEmployment) {
        chartEmployment.data.datasets = datasetsToShow;
        chartEmployment.update();
    } else {
        let config = {
            type: 'line',
            data: {
                labels: yearsEmployment,
                datasets: datasetsToShow
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
                            boxWidth: 10,
                            boxHeight: 10
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Значение'
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
        chartEmployment = new Chart(context_by_type_of_work, config);
    }
};


// Функция создания чекбоксов
const createActivityCheckboxes = (activitiesData, element_id, onChartUpdate) => {
    let container = document.getElementById(element_id);

    if (!container) {
        console.error('Контейнер не найден:', element_id);
        return;
    }
    container.innerHTML = '';

    // массив активностей из ключей activitiesData
    let activityList = Object.keys(activitiesData);

    activityList.sort().forEach((activityName, index) => {
        let label = document.createElement('label');
        label.style.cssText = 'display: flex; align-items: center; cursor: pointer;';

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = activityName;

        if (index < 3) {
            checkbox.checked = true;
        }

        checkbox.addEventListener('change', () => {
            onChartUpdate();
        });

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(activityName));
        container.appendChild(label);
    });
};


// Получение данных с сервера
Promise.all([
    axios.get('/api/rus/activitytype'),
    axios.get('/api/rus/employtypeofwork')
])
    .then(([activityResponse, employmentResponse]) => {
        let activityNames = {};

        activityResponse.data.forEach(activity => {
            activityNames[activity.id] = activity.name;
        });

        let data = employmentResponse.data;

        yearsEmployment = [...new Set(data.map(item => item.year))].sort((a, b) => a - b);
        let activitiesData = {};

        data.forEach(item => {
            let activityId = item.activity_type;
            let activityName = activityNames[activityId];
            let year = item.year;
            let value = item.value;

            if (!activitiesData[activityName]) {
                activitiesData[activityName] = {};
            }
            activitiesData[activityName][year] = value;
        });

        allDatasetsEmployment = [];
        let colorIndex = 0;
        let totalActivities = Object.keys(activitiesData).length;

        for (let activityName in activitiesData) {
            let activityValues = [];
            for (let i = 0; i < yearsEmployment.length; i++) {
                let year = yearsEmployment[i];
                activityValues.push(activitiesData[activityName][year] ?? null);
            }

            let hue = (colorIndex * 360 / totalActivities) % 360;
            let borderColor = `hsl(${hue}, 70%, 55%)`;

            allDatasetsEmployment.push({
                label: activityName,
                data: activityValues,
                borderColor: borderColor,
                backgroundColor: 'transparent',
                tension: 0.1
            });
            colorIndex++;
        }

        createActivityCheckboxes(activitiesData, 'activityCheckboxesEmpTypeWork', updatelineChartEmployment);
        updatelineChartEmployment();
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных EmploymentByTypeOfWork:', error);
    });



/*
=================================== Модель данных о динамике рабочих мест по видам экономической деятельности. | JobsByTypeOfWork ======================
*/

// Получение котекста для рисования графиков
let canvas_jobs_by_type_of_work = document.getElementById('JobsByTypeOfWork');
let context_jobs_by_type_of_work = canvas_jobs_by_type_of_work.getContext('2d');

let allDatasetsJobs = [];
let yearsJobs = [];
let chartJobs = null;


const updateLineChartJobs = () => {
    let selectedActivities = Array.from(document.querySelectorAll('#activityCheckboxesJobsTypeOfWork input:checked'))
        .map(cb => cb.value);

    let filteredDatasets = allDatasetsJobs.filter(dataset => {
        let baseName = dataset.label.replace(' (создано)', '').replace(' (ликвидировано)', '');
        return selectedActivities.includes(baseName);
    });

    let datasetsToShow = filteredDatasets.length > 0 ? filteredDatasets : [];

    if (chartJobs) {
        chartJobs.data.datasets = datasetsToShow;
        chartJobs.update();
    } else if (context_jobs_by_type_of_work && yearsJobs.length > 0) {
        let config = {
            type: 'line',
            data: {
                labels: yearsJobs,
                datasets: datasetsToShow
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
                                return `${label}: ${value?.toFixed(1) ?? 'Нет данных'} тыс.`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Количество рабочих мест (тыс.)'
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
        chartJobs = new Chart(context_jobs_by_type_of_work, config);
    }
};


// Получение данных с сервера
Promise.all([
    axios.get('/api/rus/activitytype'),
    axios.get('/api/rus/jobsbytypework')
])
    .then(([activityResponse, jobsResponse]) => {

        let activityNames = {};
        activityResponse.data.forEach(activity => {
            activityNames[activity.id] = activity.name;
        });

        let data = jobsResponse.data;

        yearsJobs = [...new Set(data.map(item => item.year))].sort((a, b) => a - b);

        let createdData = {};
        let liquidatedData = {};

        data.forEach(item => {
            let activityId = item.activity_type;
            let activityName = activityNames[activityId];
            let year = item.year;
            let created = item.created;
            let liquidated = item.liquidated;

            if (!activityName) return;

            if (!createdData[activityName]) {
                createdData[activityName] = {};
            }
            createdData[activityName][year] = created;
            
            if (!liquidatedData[activityName]) {
                liquidatedData[activityName] = {};
            }
            liquidatedData[activityName][year] = liquidated;
        });

        allDatasetsJobs = [];
        let colorIndex = 0;
        let totalActivities = Object.keys(createdData).length;

        for (let activityName in createdData) {
            let hue = (colorIndex * 360 / totalActivities) % 360;
            let borderColor = `hsl(${hue}, 70%, 55%)`;

            let createdValues = [];
            for (let i = 0; i < yearsJobs.length; i++) {
                let year = yearsJobs[i];
                createdValues.push(createdData[activityName]?.[year] ?? null);
            }

            allDatasetsJobs.push({
                label: `${activityName} (создано)`,
                data: createdValues,
                borderColor: borderColor,
                backgroundColor: 'transparent',
                borderWidth: 2,
                borderDash: [],   
                tension: 0.1,
                fill: false
            });

            let liquidatedValues = [];
            for (let i = 0; i < yearsJobs.length; i++) {
                let year = yearsJobs[i];
                liquidatedValues.push(liquidatedData[activityName]?.[year] ?? null);
            }

            allDatasetsJobs.push({
                label: `${activityName} (ликвидировано)`,
                data: liquidatedValues,
                borderColor: borderColor,
                backgroundColor: 'transparent',
                borderWidth: 2,
                borderDash: [5, 5],  // пунктирная линия
                tension: 0.1,
                fill: false
            });

            colorIndex++;
        }

        createActivityCheckboxes(createdData, 'activityCheckboxesJobsTypeOfWork', updateLineChartJobs);
        updateLineChartJobs();
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных JobsByTypeOfWork:', error);
    });




