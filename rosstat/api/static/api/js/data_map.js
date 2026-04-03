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
)=>{
    if (window.populationChart) {
        window.populationChart.destroy();
        window.populationChart = null;
    }

    data = {
        labels: years,
        datasets: 
        [
            {data: totalPopulation, label: 'Численность населения'},
            {data: urbanPopulation, label: 'Городское население'},
            {data: ruralPopulation, label: 'Сельское население'},
            // {data: urbanPercentage, label: 'Процент городского населения'},
            // {data: ruralPercentage, label: 'Процент сельского населения'}
        ]
    }

    let config = {
        type:'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false, 
        }
    };

    let populationChart= new Chart(context_population, config);
    window.populationChart = populationChart;
}


// Получение данных с сервера
axios.get('/api/rus/population')
.then((response)=>{
    let data = response.data;
    let years = [];
    let totalPopulation = [];
    let urbanPopulation = [];
    let ruralPopulation = [];
    let urbanPercentage = [];
    let ruralPercentage = [];
    
    for(let i = 0; i < data.length; i++){
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
)=>{
    if (window.employmentRusChart) {
        window.employmentRusChart.destroy();
        window.employmentRusChart = null;
    }

    data = {
        labels: yearWithMonth,
        datasets: 
        [
            {data: laborForce, label: 'Рабочая сила'},
            {data: employPeople, label: 'Занятые'},
            {data: unemployedPeople, label: 'Безработные'},
            // {data: percentInLabor, label: 'ровень участия в составе рабочей силы, в %'},
            // {data: percentEmployed, label: 'Уровень занятости, в %'},
            // {data: percentUnemployed, label: 'Уровень безработицы, в %'}
        ]
    }

    let config = {
        type:'line',
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
.then((response)=>{
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
    
    for(let i = 0; i < data.length; i++){
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

// Функции
const createLineChart_by_type_of_work = 
(
    year,
    all_lines,
    selectedActivities
)=>{
    if (window.byTypeOfWorkChart) {
        window.byTypeOfWorkChart.destroy();
        window.byTypeOfWorkChart = null;
    }
    
    let filteredDatasets = all_lines.filter(dataset => 
        selectedActivities.includes(dataset.label)
    );

    data = {
        labels: year,
        datasets: filteredDatasets
    }
    let config = {
        type: 'line',
        data: data,
        options: { 
            plugins: {  
                legend: {
                    display: false
                }
            }
        }
    };

    let byTypeOfWorkChart = new Chart(context_by_type_of_work, config);
    window.byTypeOfWorkChart = byTypeOfWorkChart;
}

// Функция создания чекбоксов
const createActivityCheckboxes = (activitiesData, years, all_lines) => {
    let container = document.getElementById('activityCheckboxes');
    
    container.innerHTML = '';
    
    // массив активностей из ключей activitiesData
    let activityList = Object.keys(activitiesData);

    activityList.sort().forEach((activityName, index) => {
        let label = document.createElement('label');
        label.style.cssText = 'display: flex; align-items: center; cursor: pointer;';
        
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = activityName;
        
        checkbox.addEventListener('change', () => {
            let selectedActivities = Array.from(document.querySelectorAll('#activityCheckboxes input:checked'))
                .map(cb => cb.value);

            createLineChart_by_type_of_work(years, all_lines, selectedActivities);
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
.then(([activityResponse, employmentResponse])=>{
    let activityNames = {};
    activityResponse.data.forEach(activity => {
        activityNames[activity.id] = activity.name; 
    });
    
    let data = employmentResponse.data;

    let years = [...new Set(data.map(item => item.year))].sort((a, b) => a - b);;
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

    
    let all_lines = [];
    let colorIndex = 0;
    let totalActivities = Object.keys(activitiesData).length;
    
    for (let activityName in activitiesData) {
        let activityValues = [];

        for (let i = 0; i < years.length; i++) {
            let year = years[i];
            activityValues.push(activitiesData[activityName][year] || null);
        }

        // цвет на основе индекса
        let hue = (colorIndex * 360 / totalActivities) % 360;
        let borderColor = `hsl(${hue}, 70%, 55%)`;
        
        all_lines.push({
            label: activityName,
            data: activityValues,
            borderColor: borderColor,
            backgroundColor: 'transparent',
            tension: 0.1 
        });
        
        colorIndex++;
    }

    createActivityCheckboxes(activitiesData, years, all_lines);

    let selectedActivities = Object.keys(activitiesData).slice(0, 3);
    createLineChart_by_type_of_work(
        years, 
        all_lines, 
        selectedActivities
    );
})
.catch(error => {
    console.error('Ошибка при загрузке данных:', error);
});
