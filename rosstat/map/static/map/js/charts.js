/* Работа с Population */

var populationCanvas = document.getElementById("population");


// Подготовка данных
const populationData = {
    labels: [],
    datasets: [
        {
            label: "Общая численность населения",
            data: [],
            borderColor: '#3e95cd',
            backgroundColor: 'rgba(62, 149, 205, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        },
        {
            label: "Городское население",
            data: [],
            borderColor: '#8e5ea2',
            backgroundColor: 'rgba(142, 94, 162, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        },
        {
            label: "Сельское население",
            data: [],
            borderColor: '#3cba9f',
            backgroundColor: 'rgba(60, 186, 159, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        }
    ]
};


const chartOptionsPopulation = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Динамика численности населения',
            font: {
                size: 20
            }
        },
        tooltip: {
            mode: 'index',
            intersect: false
        },
        legend: {
            position: 'top',
            labels: {
                boxWidth: 12,
                padding: 20,
                font: {
                    family: 'Lato'
                }
            }
        }
    },
    scales: {
        x: {
            title: {
                display: true,
                text: 'Год'
            }
        },
        y: {
            title: {
                display: true,
                text: 'Численность (млн)'
            },
            beginAtZero: false
        }
    }
};

// Создание графика
var populationChart = new Chart(populationCanvas, {
    type: 'line',
    data: populationData,
    options: chartOptionsPopulation
});

// обновление данных
function updateChartDataPopulation(years, total, urban, rural) {
    years = JSON.parse(years);
    total = JSON.parse(total);
    urban = JSON.parse(urban);
    rural = JSON.parse(rural);

    populationChart.data.labels = years;
    populationChart.data.datasets[0].data = total;
    populationChart.data.datasets[1].data = urban;
    populationChart.data.datasets[2].data = rural;
    populationChart.update();
}

/* Работа с EmploymentRussian */

var EmploymentRussiaCanvas = document.getElementById("EmploymentRussia");

const EmploymentRussiaData = {
    labels: [],
    datasets: [
        {
            label: "Рабочая сила",
            data: [],
            borderColor: '#3e95cd',
            backgroundColor: 'rgba(62, 149, 205, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        },
        {
            label: "Занятые",
            data: [],
            borderColor: '#8e5ea2',
            backgroundColor: 'rgba(142, 94, 162, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        },
        {
            label: "Безработные",
            data: [],
            borderColor: '#3cba9f',
            backgroundColor: 'rgba(60, 186, 159, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        }
    ]
};


const chartOptionsEmploymentRussia = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Динамика занятости населения',
            font: {
                size: 20
            }
        },
        tooltip: {
            mode: 'index',
            intersect: false
        },
        legend: {
            position: 'top',
            labels: {
                boxWidth: 12,
                padding: 20,
                font: {
                    family: 'Lato'
                }
            }
        }
    },
    scales: {
        x: {
            title: {
                display: true,
                text: 'Год'
            }
        },
        y: {
            title: {
                display: true,
                text: 'Численность (млн)'
            },
            beginAtZero: false
        }
    }
};

// Создание графика
var EmploymentRussiaChart = new Chart(EmploymentRussiaCanvas, {
    type: 'line',
    data: EmploymentRussiaData,
    options: chartOptionsEmploymentRussia
});


// обновление данных
function updateChartDataEmploymentRussia(yearswithmonthEmployment, monthEmployment, labor_force, 
    employ_people, unemployed_people) {
    yearswithmonthEmployment = JSON.parse(yearswithmonthEmployment);
    monthEmployment = JSON.parse(monthEmployment);
    labor_force = JSON.parse(labor_force);
    employ_people = JSON.parse(employ_people);
    unemployed_people = JSON.parse(unemployed_people);

    EmploymentRussiaChart.data.labels = yearswithmonthEmployment;
    EmploymentRussiaChart.data.datasets[0].data = labor_force;
    EmploymentRussiaChart.data.datasets[1].data = employ_people;
    EmploymentRussiaChart.data.datasets[2].data = unemployed_people;
    EmploymentRussiaChart.update();
}


/* Работа с EmploymentByTypeOfWorkChart */

var EmploymentByTypeOfWorkCanvas = document.getElementById("EmploymentByTypeOfWork");

const EmploymentByTypeOfWorkData = {
    labels: [],
    datasets: [
        {
            label: "Занятость на 2017 год",
            data: [],
            borderColor: '#3e95cd',
            backgroundColor: 'rgba(62, 149, 205, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        },
        {
            label: "Занятость на 2018 год",
            data: [],
            borderColor: '#8e5ea2',
            backgroundColor: 'rgba(142, 94, 162, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        },
        {
            label: "Занятость на 2019 год",
            data: [],
            borderColor: '#3cba9f',
            backgroundColor: 'rgba(60, 186, 159, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        },
        {
            label: "Занятость на 2020 год",
            data: [],
            borderColor: '#3cba9f',
            backgroundColor: 'rgba(60, 186, 159, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        },
        {
            label: "Занятость на 2021 год",
            data: [],
            borderColor: '#3cba9f',
            backgroundColor: 'rgba(60, 186, 159, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        },
        {
            label: "Занятость на 2022 год",
            data: [],
            borderColor: '#3cba9f',
            backgroundColor: 'rgba(60, 186, 159, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        },
        {
            label: "Занятость на 2023 год",
            data: [],
            borderColor: '#3cba9f',
            backgroundColor: 'rgba(60, 186, 159, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        }
    ]
};


const chartOptionsEmploymentByTypeOfWork = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Данные о занятости населения по видам деятельности',
            font: {
                size: 20
            }
        },
        tooltip: {
            mode: 'index',
            intersect: false
        },
        legend: {
            position: 'top',
            labels: {
                boxWidth: 12,
                padding: 20,
                font: {
                    family: 'Lato'
                }
            },
               onClick: function(e, legendItem, legend) {
                const chart = legend.chart;
                const clickedIndex = legendItem.datasetIndex;
                
                // Скрываем все графики
                chart.data.datasets.forEach((dataset, i) => {
                    chart.setDatasetVisibility(i, false);
                });
                
                // Показываем только выбранный график
                chart.setDatasetVisibility(clickedIndex, true);
                chart.update();
            }

        }
        
        
    },
           
    scales: {
        x: {
            title: {
                display: true,
                text: 'Название'
            }
        },
        y: {
            title: {
                display: true,
                text: 'Численность (млн)'
            },
            beginAtZero: false
        }
    }
};

// Создание графика
var EmploymentByTypeOfWorkChart = new Chart(EmploymentByTypeOfWorkCanvas, {
    type: 'bar',
    data: EmploymentByTypeOfWorkData,
    options: chartOptionsEmploymentByTypeOfWork
});

// Изначально скрываем все графики, кроме первого (2017 год)
setTimeout(() => {
    EmploymentByTypeOfWorkChart.data.datasets.forEach((dataset, i) => {
        if (i !== 0) { 
            EmploymentByTypeOfWorkChart.setDatasetVisibility(i, false);
        }
    });
    EmploymentByTypeOfWorkChart.update();
}, 100);

// обновление данных
function updateChartEmploymentByTypeOfWork(name, year_2017, year_2018, 
    year_2019, year_2020, year_2021, year_2022, year_2023) {
    name = JSON.parse(name);
    year_2017 = JSON.parse(year_2017);
    year_2018 = JSON.parse(year_2018);
    year_2019 = JSON.parse(year_2019);
    year_2020 = JSON.parse(year_2020);
    year_2021 = JSON.parse(year_2021);
    year_2022 = JSON.parse(year_2022);
    year_2023 = JSON.parse(year_2023);

    EmploymentByTypeOfWorkChart.data.labels = name;
    EmploymentByTypeOfWorkChart.data.datasets[0].data = year_2017;
    EmploymentByTypeOfWorkChart.data.datasets[1].data = year_2018;
    EmploymentByTypeOfWorkChart.data.datasets[2].data = year_2019;
    EmploymentByTypeOfWorkChart.data.datasets[3].data = year_2020;
    EmploymentByTypeOfWorkChart.data.datasets[4].data = year_2021;
    EmploymentByTypeOfWorkChart.data.datasets[5].data = year_2022;
    EmploymentByTypeOfWorkChart.data.datasets[6].data = year_2023;
    EmploymentByTypeOfWorkChart.update();
}


/* Работа с WorkInSpecialityHE */

var WorkInSpecialityHECanvas = document.getElementById("WorkInSpecialityHE");

const WorkInSpecialityHEData = {
    labels: [],
    datasets: [
        {
            label: "Общее число выпускников в данной отрасли",
            data: [],
            borderColor: '#3e95cd',
            backgroundColor: 'rgba(62, 149, 205, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        },
        {
            label: "Число выпускников, работающих по специальности",
            data: [],
            borderColor: '#8e5ea2',
            backgroundColor: 'rgba(142, 94, 162, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        },
        {
            label: "Число выпускников, работающих не по специальности",
            data: [],
            borderColor: '#3cba9f',
            backgroundColor: 'rgba(60, 186, 159, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        },
        
    ]
};


const chartOptionsWorkInSpecialityHE = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Данные выпускниках 21-23г, работающих по специальности за 2024 год. Высшее образование',
            font: {
                size: 20
            }
        },
        tooltip: {
            mode: 'index',
            intersect: false
        },
        legend: {
            position: 'top',
            labels: {
                boxWidth: 12,
                padding: 20,
                font: {
                    family: 'Lato'
                }
            }
        }   
        
    },
           
    scales: {
        x: {
            title: {
                display: true,
                text: 'Отрасль'
            }
        },
        y: {
            title: {
                display: true,
                text: 'Численность (млн)'
            },
            beginAtZero: false
        }
    }
};

// Создание графика
var WorkInSpecialityHEChart = new Chart(WorkInSpecialityHECanvas, {
    type: 'line',
    data: WorkInSpecialityHEData,
    options: chartOptionsWorkInSpecialityHE
});


// обновление данных
function updateChartWorkInSpecialityHE(nameSpecialityHE, all_people_she, works_by_profession, 
    works_not_by_profession) {
    nameSpecialityHE = JSON.parse(nameSpecialityHE);
    all_people_she = JSON.parse(all_people_she);
    works_by_profession = JSON.parse(works_by_profession);
    works_not_by_profession = JSON.parse(works_not_by_profession);

    WorkInSpecialityHEChart.data.labels = nameSpecialityHE;
    WorkInSpecialityHEChart.data.datasets[0].data = all_people_she;
    WorkInSpecialityHEChart.data.datasets[1].data = works_by_profession;
    WorkInSpecialityHEChart.data.datasets[2].data = works_not_by_profession;
    WorkInSpecialityHEChart.update();
}



/* Работа с WorkingGraduatesHE */

var WorkingGraduatesHECanvas = document.getElementById("WorkingGraduatesHE");

const WorkingGraduatesHEData = {
    labels: [],
    datasets: [
        {
            label: "Численность рабочей силы всего",
            data: [],
            borderColor: '#3e95cd',
            backgroundColor: 'rgba(62, 149, 205, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        },
        {
            label: "Занятые",
            data: [],
            borderColor: '#8e5ea2',
            backgroundColor: 'rgba(142, 94, 162, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        },
        {
            label: "Безработные",
            data: [],
            borderColor: '#3cba9f',
            backgroundColor: 'rgba(60, 186, 159, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        },
        
    ]
};


const chartOptionsWorkingGraduatesHE = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Данные выпускниках 21-23г, работающих по специальности за 2024 год. Высшее образование',
            font: {
                size: 20
            }
        },
        tooltip: {
            mode: 'index',
            intersect: false
        },
        legend: {
            position: 'top',
            labels: {
                boxWidth: 12,
                padding: 20,
                font: {
                    family: 'Lato'
                }
            }
        }   
        
    },
           
    scales: {
        x: {
            title: {
                display: true,
                text: 'Отрасль'
            }
        },
        y: {
            title: {
                display: true,
                text: 'Численность (млн)'
            },
            beginAtZero: false
        }
    }
};

// Создание графика
var WorkingGraduatesHEChart = new Chart(WorkingGraduatesHECanvas, {
    type: 'line',
    data: WorkingGraduatesHEData,
    options: chartOptionsWorkingGraduatesHE
});


// обновление данных
function updateChartWorkingGraduatesHE(nameGraduatesHE, all_people_ghe, working, not_working) {
    nameGraduatesHE = JSON.parse(nameGraduatesHE);
    all_people_ghe = JSON.parse(all_people_ghe);
    working = JSON.parse(working);
    not_working = JSON.parse(not_working);

    WorkingGraduatesHEChart.data.labels = nameGraduatesHE;
    WorkingGraduatesHEChart.data.datasets[0].data = all_people_ghe;
    WorkingGraduatesHEChart.data.datasets[1].data = working;
    WorkingGraduatesHEChart.data.datasets[2].data = not_working;
    WorkingGraduatesHEChart.update();
}


/* Работа с WorkInSpecialitySPO */

var WorkInSpecialitySPOCanvas = document.getElementById("WorkInSpecialitySPO");

const WorkInSpecialitySPOData = {
    labels: [],
    datasets: [
        {
            label: "Общее число выпускников в данной отрасли",
            data: [],
            borderColor: '#3e95cd',
            backgroundColor: 'rgba(62, 149, 205, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        },
        {
            label: "Число выпускников, работающих по специальности",
            data: [],
            borderColor: '#8e5ea2',
            backgroundColor: 'rgba(142, 94, 162, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        },
        {
            label: "Число выпускников, работающих не по специальности",
            data: [],
            borderColor: '#3cba9f',
            backgroundColor: 'rgba(60, 186, 159, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        },
        
    ]
};


const chartOptionsWorkInSpecialitySPO= {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Данные выпускниках 21-23г, работающих по специальности за 2024 год. Среднее профессиональное образование',
            font: {
                size: 20
            }
        },
        tooltip: {
            mode: 'index',
            intersect: false
        },
        legend: {
            position: 'top',
            labels: {
                boxWidth: 12,
                padding: 20,
                font: {
                    family: 'Lato'
                }
            }
        }   
        
    },
           
    scales: {
        x: {
            title: {
                display: true,
                text: 'Отрасль'
            }
        },
        y: {
            title: {
                display: true,
                text: 'Численность (млн)'
            },
            beginAtZero: false
        }
    }
};

// Создание графика
var WorkInSpecialitySPOChart = new Chart(WorkInSpecialitySPOCanvas, {
    type: 'line',
    data: WorkInSpecialitySPOData,
    options: chartOptionsWorkInSpecialitySPO
});


// обновление данных
function updateChartWorkInSpecialitySPO(nameSpecialitySPO, all_people_sspo, works_by_profession_spo, works_not_by_profession_spo) {
    nameSpecialitySPO = JSON.parse(nameSpecialitySPO);
    all_people_sspo = JSON.parse(all_people_sspo);
    works_by_profession_spo = JSON.parse(works_by_profession_spo);
    works_not_by_profession_spo = JSON.parse(works_not_by_profession_spo);

    WorkInSpecialitySPOChart.data.labels = nameSpecialitySPO;
    WorkInSpecialitySPOChart.data.datasets[0].data = all_people_sspo;
    WorkInSpecialitySPOChart.data.datasets[1].data = works_by_profession_spo;
    WorkInSpecialitySPOChart.data.datasets[2].data = works_not_by_profession_spo;
    WorkInSpecialitySPOChart.update();
}


/* Работа с WorkingGraduatesSPO */

var WorkingGraduatesSPOCanvas = document.getElementById("WorkingGraduatesSPO");

const WorkingGraduatesSPOData = {
    labels: [],
    datasets: [
        {
            label: "Численность рабочей силы всего",
            data: [],
            borderColor: '#3e95cd',
            backgroundColor: 'rgba(62, 149, 205, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        },
        {
            label: "Занятые",
            data: [],
            borderColor: '#8e5ea2',
            backgroundColor: 'rgba(142, 94, 162, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        },
        {
            label: "Безработные",
            data: [],
            borderColor: '#3cba9f',
            backgroundColor: 'rgba(60, 186, 159, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        },
        
    ]
};


const chartOptionsWorkingGraduatesSPO= {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Данные выпускниках 21-23г по статусу участия в составе рабочей силы 2024 год. Среднее профессиональное образование',
            font: {
                size: 20
            }
        },
        tooltip: {
            mode: 'index',
            intersect: false
        },
        legend: {
            position: 'top',
            labels: {
                boxWidth: 12,
                padding: 20,
                font: {
                    family: 'Lato'
                }
            }
        }   
        
    },
           
    scales: {
        x: {
            title: {
                display: true,
                text: 'Отрасль'
            }
        },
        y: {
            title: {
                display: true,
                text: 'Численность (млн)'
            },
            beginAtZero: false
        }
    }
};

// Создание графика
var WorkingGraduatesSPOChart = new Chart(WorkingGraduatesSPOCanvas, {
    type: 'line',
    data: WorkingGraduatesSPOData,
    options: chartOptionsWorkingGraduatesSPO
});


// обновление данных
function updateChartWorkingGraduatesSPO(nameGraduatesSPO, all_people_gspo, working_spo, not_working_spo) {
    nameGraduatesSPO = JSON.parse(nameGraduatesSPO);
    all_people_gspo = JSON.parse(all_people_gspo);
    working_spo = JSON.parse(working_spo);
    not_working_spo = JSON.parse(not_working_spo);

    WorkingGraduatesSPOChart.data.labels = nameGraduatesSPO;
    WorkingGraduatesSPOChart.data.datasets[0].data = all_people_gspo;
    WorkingGraduatesSPOChart.data.datasets[1].data = working_spo;
    WorkingGraduatesSPOChart.data.datasets[2].data = not_working_spo;
    WorkingGraduatesSPOChart.update();
}
