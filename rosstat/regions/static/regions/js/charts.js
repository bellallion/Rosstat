
/* Работа с LaborForceRegion */
var LaborForceRegionCanvas = document.getElementById("LaborForceRegion");

const LaborForceRegionData = {
    labels: [],
    datasets: [
        {
            label: "Численность рабочей силы",
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
            label: "Численность населения",
            data: [],
            borderColor: '#8e5ea2',
            backgroundColor: 'rgba(142, 94, 162, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        },
        
    ]
};


const chartOptionsLaborForceRegion= {
    responsive: true,
    plugins: {
        title: {
            display: true,
            // text: 'Численность рабочей силы по субъектам Российской Федерации',
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
                text: 'Человек'
            },
            beginAtZero: true
        }
    }
};

var LaborForceRegionChart = new Chart(LaborForceRegionCanvas, {
        type: 'line',
        data: LaborForceRegionData,
        options: chartOptionsLaborForceRegion
});

// обновление данных
function updateChartLaborForceRegion(region_name, nameLaborForceRegion, year_2018_lbr, year_2019_lbr, year_2020_lbr, year_2021_lbr, year_2022_lbr, year_2023_lbr, year_2024_lbr,
     namePopulationRegion, year_2018_pr, year_2019_pr, year_2020_pr, year_2021_pr, year_2022_pr, year_2023_pr, year_2024_pr
) {
    
    //  Проверка если не region_id пуст, то тогда по годам?

    LaborForceRegionChart.options.plugins.text = region_name;
    
    nameLaborForceRegion = JSON.parse(nameLaborForceRegion);
    // year_2017_lbr = JSON.parse(year_2017_lbr);
    year_2018_lbr = JSON.parse(year_2018_lbr);
    year_2019_lbr = JSON.parse(year_2019_lbr);
    year_2020_lbr = JSON.parse(year_2020_lbr);
    year_2021_lbr = JSON.parse(year_2021_lbr);
    year_2022_lbr = JSON.parse(year_2022_lbr);
    year_2023_lbr = JSON.parse(year_2023_lbr);
    year_2024_lbr = JSON.parse(year_2024_lbr);

    namePopulationRegion = JSON.parse(namePopulationRegion);;
    year_2018_pr = JSON.parse(year_2018_pr);
    year_2019_pr = JSON.parse(year_2019_pr);
    year_2020_pr = JSON.parse(year_2020_pr);
    year_2021_pr = JSON.parse(year_2021_pr);
    year_2022_pr = JSON.parse(year_2022_pr);
    year_2023_pr = JSON.parse(year_2023_pr);
    year_2024_pr = JSON.parse(year_2024_pr);

    
    // требует доработки
    LaborForceRegionChart.data.labels = [2018, 2019, 2020, 2021, 2022, 2023, 2024];
    var ind = 0;
    for(var i = 0; i < nameLaborForceRegion.length; i++){
        if (nameLaborForceRegion[i] == region_name){
            ind = i;
            break;
        }
    }
    LaborForceRegionChart.data.datasets[0].data = [ year_2018_lbr[ind], year_2019_lbr[ind], year_2020_lbr[ind], 
    year_2021_lbr[ind], year_2022_lbr[ind], year_2023_lbr[ind], year_2024_lbr[ind]]
    var ind = 0;
    for(var i = 0; i < namePopulationRegion.length; i++){
        if (namePopulationRegion[i] == region_name){
            ind = i;
            break;
        }
    }
    LaborForceRegionChart.data.datasets[1].data = [ year_2018_pr[ind], year_2019_pr[ind], year_2020_pr[ind], 
    year_2021_pr[ind], year_2022_pr[ind], year_2023_pr[ind], year_2024_pr[ind]]
    LaborForceRegionChart.update();
}

function updateChartLaborForceRegion_Comp(region_name_1, region_name_2, nameLaborForceRegion, year_2018_lbr, year_2019_lbr, year_2020_lbr, year_2021_lbr, year_2022_lbr, year_2023_lbr, year_2024_lbr,
     namePopulationRegion, year_2018_pr, year_2019_pr, year_2020_pr, year_2021_pr, year_2022_pr, year_2023_pr, year_2024_pr
) {
    
    //  Проверка если не region_id пуст, то тогда по годам?

    LaborForceRegionChart.options.plugins.text = 'Численность рабочей силы и населения';
    
    nameLaborForceRegion = JSON.parse(nameLaborForceRegion);
    // year_2017_lbr = JSON.parse(year_2017_lbr);
    year_2018_lbr = JSON.parse(year_2018_lbr);
    year_2019_lbr = JSON.parse(year_2019_lbr);
    year_2020_lbr = JSON.parse(year_2020_lbr);
    year_2021_lbr = JSON.parse(year_2021_lbr);
    year_2022_lbr = JSON.parse(year_2022_lbr);
    year_2023_lbr = JSON.parse(year_2023_lbr);
    year_2024_lbr = JSON.parse(year_2024_lbr);

    namePopulationRegion = JSON.parse(namePopulationRegion);;
    year_2018_pr = JSON.parse(year_2018_pr);
    year_2019_pr = JSON.parse(year_2019_pr);
    year_2020_pr = JSON.parse(year_2020_pr);
    year_2021_pr = JSON.parse(year_2021_pr);
    year_2022_pr = JSON.parse(year_2022_pr);
    year_2023_pr = JSON.parse(year_2023_pr);
    year_2024_pr = JSON.parse(year_2024_pr);

    
    // требует доработки
    LaborForceRegionChart.data.labels = [2018, 2019, 2020, 2021, 2022, 2023, 2024];

    [ year_2018_lbr[ind], year_2019_lbr[ind], year_2020_lbr[ind], 
    year_2021_lbr[ind], year_2022_lbr[ind], year_2023_lbr[ind], year_2024_lbr[ind]]
    var ind_1_f =0;
    var ind_1_p =0;
    var ind_2_f =0;
    var ind_2_p =0;
    for(var i = 0; i < nameLaborForceRegion.length; i++){
        if (nameLaborForceRegion[i] == region_name_1)
            ind_1_f = i;
        else if(nameLaborForceRegion[i] == region_name_2)
            ind_2_f = i;
        else if(ind_1_f*ind_2_f != 0) // нашли оба значения
            break;
    }

    for(var i = 0; i < namePopulationRegion.length; i++){
        if (namePopulationRegion[i] == region_name_1)
            ind_1_p = i;
        else if(namePopulationRegion[i] == region_name_2)
            ind_2_p = i;
        else if(ind_1_p*ind_2_p != 0) // нашли оба значения
            break;
    }

    LaborForceRegionChart.data.datasets = [];
    
    // Добавляем первый набор данных (используем push вместо add)
    LaborForceRegionChart.data.datasets.push({
        label: region_name_1 + 'рабочая сила',
        data: [
            year_2018_lbr[ind_1_f],
            year_2019_lbr[ind_1_f], 
            year_2020_lbr[ind_1_f], 
            year_2021_lbr[ind_1_f], 
            year_2022_lbr[ind_1_f], 
            year_2023_lbr[ind_1_f], 
            year_2024_lbr[ind_1_f]
        ],
        borderColor: ' yellow', // Синий для первого региона
        backgroundColor: 'rgba(62, 149, 205, 0.1)',
        borderWidth: 3,
        pointRadius: 2,
        pointHoverRadius: 5,
        fill: true,
        tension: 0.1
    });

    LaborForceRegionChart.data.datasets.push({
        label: region_name_1 + ' население',
        data: [
            year_2018_pr[ind_1_p],
            year_2019_pr[ind_1_p], 
            year_2020_pr[ind_1_p], 
            year_2021_pr[ind_1_p], 
            year_2022_pr[ind_1_p], 
            year_2023_pr[ind_1_p], 
            year_2024_pr[ind_1_p]
        ],
        borderColor: '#3e95cd', // Синий для первого региона
        backgroundColor: 'rgba(62, 149, 205, 0.1)',
        borderWidth: 3,
        pointRadius: 2,
        pointHoverRadius: 5,
        fill: true,
        tension: 0.1
    });

    LaborForceRegionChart.data.datasets.push({
        label: region_name_2+ ' рабочая сила',
        data: [
            year_2018_lbr[ind_2_f],
            year_2019_lbr[ind_2_f], 
            year_2020_lbr[ind_2_f], 
            year_2021_lbr[ind_2_f], 
            year_2022_lbr[ind_2_f], 
            year_2023_lbr[ind_2_f], 
            year_2024_lbr[ind_2_f]
        ],
        borderColor: '#blue', 
        backgroundColor: 'rgba(142, 94, 162, 0.1)',
        borderWidth: 3,
        pointRadius: 2,
        pointHoverRadius: 5,
        fill: true,
        tension: 0.1
    });

        LaborForceRegionChart.data.datasets.push({
        label: region_name_2 + ' население',
        data: [
            year_2018_pr[ind_2_p],
            year_2019_pr[ind_2_p], 
            year_2020_pr[ind_2_p], 
            year_2021_pr[ind_2_p], 
            year_2022_pr[ind_2_p], 
            year_2023_pr[ind_2_p], 
            year_2024_pr[ind_2_p]
        ],
        borderColor: '#red', 
        backgroundColor: 'rgba(22, 188, 136, 0.1)',
        borderWidth: 3,
        pointRadius: 2,
        pointHoverRadius: 5,
        fill: true,
        tension: 0.1
    });

    LaborForceRegionChart.update();
}



/* Работа с WorkForceLevel */

var WorkForceLevelCanvas = document.getElementById("WorkForceLevel");

const WorkForceLevelData = {
    labels: [],
    datasets: [
        {
            // label: "Численность рабочей силы",
            data: [],
            borderColor: '#3e95cd',
            backgroundColor: 'rgba(62, 149, 205, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        },
        
    ]
};

const chartOptionsWorkForceLevel= {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Уровень участия в составе рабочей по субъектам Российской Федерации',
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
                text: 'Человек'
            },
            beginAtZero: false
        }
    }
};

var WorkForceLevelChart = new Chart(WorkForceLevelCanvas, {
        type: 'line',
        data: WorkForceLevelData,
        options: chartOptionsWorkForceLevel
});

// обновление данных
function updateChartWorkForceLevel(region_name, nameWorkForceLevel, year_2018_wfl , year_2019_wfl , year_2020_wfl , year_2021_wfl , year_2022_wfl , year_2023_wfl , year_2024_wfl ) {
    
    //  Проверка если не region_id пуст, то тогда по годам?

    WorkForceLevelChart.data.datasets[0].label = region_name;
    
    nameWorkForceLevel = JSON.parse(nameWorkForceLevel);
    // year_2017_lbr = JSON.parse(year_2017_lbr);
    year_2018_wfl = JSON.parse(year_2018_wfl);
    year_2019_wfl = JSON.parse(year_2019_wfl);
    year_2020_wfl = JSON.parse(year_2020_wfl);
    year_2021_wfl = JSON.parse(year_2021_wfl);
    year_2022_wfl = JSON.parse(year_2022_wfl);
    year_2023_wfl = JSON.parse(year_2023_wfl);
    year_2024_wfl = JSON.parse(year_2024_wfl);

    
    // требует доработки
    WorkForceLevelChart.data.labels = [2018, 2019, 2020, 2021, 2022, 2023, 2024];
    var ind = 0;
    for(var i = 0; i < nameWorkForceLevel.length; i++){
        if (nameWorkForceLevel[i] == region_name){
            ind = i;
            break;
        }
    }
    WorkForceLevelChart.data.datasets[0].data = [ year_2018_wfl[ind], year_2019_wfl[ind], year_2020_wfl[ind], 
    year_2021_wfl[ind], year_2022_wfl[ind], year_2023_wfl[ind], year_2024_wfl[ind]]
    WorkForceLevelChart.update();
}


function updateChartWorkForceLevel_Comp(region_name_1, region_name_2, nameWorkForceLevel, year_2018_wfl , year_2019_wfl , year_2020_wfl , year_2021_wfl , year_2022_wfl , year_2023_wfl , year_2024_wfl ) {
    
    //  Проверка если не region_id пуст, то тогда по годам?
    
    nameWorkForceLevel = JSON.parse(nameWorkForceLevel);
    year_2018_wfl = JSON.parse(year_2018_wfl);
    year_2019_wfl = JSON.parse(year_2019_wfl);
    year_2020_wfl = JSON.parse(year_2020_wfl);
    year_2021_wfl = JSON.parse(year_2021_wfl);
    year_2022_wfl = JSON.parse(year_2022_wfl);
    year_2023_wfl = JSON.parse(year_2023_wfl);
    year_2024_wfl = JSON.parse(year_2024_wfl);

    
    // требует доработки
    WorkForceLevelChart.data.labels = [2018, 2019, 2020, 2021, 2022, 2023, 2024];
    var ind_1 =0;
    var ind_2 = 0;
    for(var i = 0; i < nameWorkForceLevel.length; i++){
        if (nameWorkForceLevel[i] == region_name_1)
            ind_1 = i;
        else if(nameWorkForceLevel[i] == region_name_2)
            ind_2 = i;
        else if(ind_1*ind_2 != 0) // нашли оба значения
            break;
    }
    WorkForceLevelChart.data.datasets = [];
    
    // Добавляем первый набор данных (используем push вместо add)
    WorkForceLevelChart.data.datasets.push({
        label: region_name_1,
        data: [
            year_2018_wfl[ind_1],
            year_2019_wfl[ind_1], 
            year_2020_wfl[ind_1], 
            year_2021_wfl[ind_1], 
            year_2022_wfl[ind_1], 
            year_2023_wfl[ind_1], 
            year_2024_wfl[ind_1]
        ],
        borderColor: '#3e95cd', // Синий для первого региона
        backgroundColor: 'rgba(62, 149, 205, 0.1)',
        borderWidth: 3,
        pointRadius: 2,
        pointHoverRadius: 5,
        fill: true,
        tension: 0.1
    });

    WorkForceLevelChart.data.datasets.push({
        label: region_name_2,
        data: [
            year_2018_wfl[ind_2],
            year_2019_wfl[ind_2], 
            year_2020_wfl[ind_2], 
            year_2021_wfl[ind_2], 
            year_2022_wfl[ind_2], 
            year_2023_wfl[ind_2], 
            year_2024_wfl[ind_2]
        ],
        borderColor: '#8e5ea2', // Фиолетовый для второго региона
        backgroundColor: 'rgba(142, 94, 162, 0.1)',
        borderWidth: 3,
        pointRadius: 2,
        pointHoverRadius: 5,
        fill: true,
        tension: 0.1
    });
    WorkForceLevelChart.update();
}


/* Работа с WorkForceLevel */

var WorkForceHECanvas = document.getElementById("WorkForceHE");

const WorkForceHEData = {
    labels: [],
    datasets: [
        {
            // label: "Численность рабочей силы",
            data: [],
            borderColor: '#3e95cd',
            backgroundColor: 'rgba(62, 149, 205, 0.1)',
            borderWidth: 3,
            pointRadius: 2,
            pointHoverRadius: 5,
            fill: true,
            tension: 0.1
        },
        
    ]
};

const chartOptionsWorkForceHE= {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Доля рабочей силы с образованием (высшим/средним специальным)',
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
                text: 'Человек'
            },
            beginAtZero: false
        }
    }
};

var WorkForceHEChart = new Chart(WorkForceHECanvas, {
        type: 'line',
        data: WorkForceHEData,
        options: chartOptionsWorkForceHE
});

// обновление данных
function updateChartWorkForceHE(region_name, nameWorkForceHE, year_2019_wfhe , year_2020_wfhe , year_2021_wfhe , year_2022_wfhe , year_2023_wfhe , year_2024_wfhe ) {
    
    //  Проверка если не region_id пуст, то тогда по годам?

    WorkForceHEChart.data.datasets[0].label = region_name;
    
    nameWorkForceHE = JSON.parse(nameWorkForceHE);

    year_2019_wfhe = JSON.parse(year_2019_wfhe);
    year_2020_wfhe = JSON.parse(year_2020_wfhe);
    year_2021_wfhe = JSON.parse(year_2021_wfhe);
    year_2022_wfhe = JSON.parse(year_2022_wfhe);
    year_2023_wfhe = JSON.parse(year_2023_wfhe);
    year_2024_wfhe = JSON.parse(year_2024_wfhe);

    
    // требует доработки
    WorkForceHEChart.data.labels = [2019, 2020, 2021, 2022, 2023, 2024];
    var ind = 0;
    for(var i = 0; i < nameWorkForceHE.length; i++){
        if (nameWorkForceHE[i] == region_name){
            ind = i;
            break;
        }
    }
    WorkForceHEChart.data.datasets[0].data = [ year_2019_wfhe[ind], year_2020_wfhe[ind], 
    year_2021_wfhe[ind], year_2022_wfhe[ind], year_2023_wfhe[ind], year_2024_wfhe[ind]]
    WorkForceHEChart.update();
};
function updateChartWorkForceHE_Comp(region_name_1, region_name_2, nameWorkForceHE, year_2019_wfhe , year_2020_wfhe , year_2021_wfhe , year_2022_wfhe , year_2023_wfhe , year_2024_wfhe ) {
    
    //  Проверка если не region_id пуст, то тогда по годам?
    
    nameWorkForceHE = JSON.parse(nameWorkForceHE);

    year_2019_wfhe = JSON.parse(year_2019_wfhe);
    year_2020_wfhe = JSON.parse(year_2020_wfhe);
    year_2021_wfhe = JSON.parse(year_2021_wfhe);
    year_2022_wfhe = JSON.parse(year_2022_wfhe);
    year_2023_wfhe = JSON.parse(year_2023_wfhe);
    year_2024_wfhe = JSON.parse(year_2024_wfhe);

    
    // требует доработки
    WorkForceHEChart.data.labels = [2019, 2020, 2021, 2022, 2023, 2024];
    var ind_1 =0;
    var ind_2 = 0;
    for(var i = 0; i < nameWorkForceHE.length; i++){
        if (nameWorkForceHE[i] == region_name_1)
            ind_1 = i;
        else if(nameWorkForceHE[i] == region_name_2)
            ind_2 = i;
        else if(ind_1*ind_2 != 0) // нашли оба значения
            ind_2 = i;
    }

    WorkForceHEChart.data.datasets = [];
    
    // Добавляем первый набор данных (используем push вместо add)
    WorkForceHEChart.data.datasets.push({
        label: region_name_1,
        data: [
            year_2019_wfhe[ind_1], 
            year_2020_wfhe[ind_1], 
            year_2021_wfhe[ind_1], 
            year_2022_wfhe[ind_1], 
            year_2023_wfhe[ind_1], 
            year_2024_wfhe[ind_1]
        ],
        borderColor: '#3e95cd', // Синий для первого региона
        backgroundColor: 'rgba(62, 149, 205, 0.1)',
        borderWidth: 3,
        pointRadius: 2,
        pointHoverRadius: 5,
        fill: true,
        tension: 0.1
    });

    WorkForceHEChart.data.datasets.push({
        label: region_name_2,
        data: [
            year_2019_wfhe[ind_2], 
            year_2020_wfhe[ind_2], 
            year_2021_wfhe[ind_2], 
            year_2022_wfhe[ind_2], 
            year_2023_wfhe[ind_2], 
            year_2024_wfhe[ind_2]
        ],
        borderColor: '#8e5ea2', // Фиолетовый для второго региона
        backgroundColor: 'rgba(142, 94, 162, 0.1)',
        borderWidth: 3,
        pointRadius: 2,
        pointHoverRadius: 5,
        fill: true,
        tension: 0.1
    });

    WorkForceHEChart.update();
};
