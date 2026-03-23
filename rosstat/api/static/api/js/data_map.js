/*
===================================Численность населения | population======================
*/

// Получение котекста для рисования графиков
let canvas_population = document.getElementById('population');
let context_population = canvas.getContext('2d');

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

    let chart_population = new Chart(context, config)
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

