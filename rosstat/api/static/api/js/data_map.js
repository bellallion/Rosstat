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
        data: data
    };

    let chart = new Chart(context_population, config)
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
let context__emp_rus = canvas_emp_rus.getContext('2d');

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
        data: data
    };

    let chart = new Chart(context__emp_rus, config)
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
