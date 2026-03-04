// взаимосвязь id с названием региона
var idarr = ["RU-MOW", "RU-SPE", "RU-NEN", "RU-YAR", "RU-CHE", "RU-ULY", "RU-TYU", "RU-TUL", "RU-SVE", "RU-RYA", "RU-ORL", "RU-OMS", "RU-NGR", "RU-LIP", "RU-KRS", "RU-KGN", "RU-KGD", "RU-IVA", "RU-BRY", "RU-AST", "RU-KHA", "RU-CE", "RU-UD", "RU-SE", "RU-MO", "RU-KR", "RU-KL", "RU-IN", "RU-AL", "RU-BA", "RU-AD", "RU-CR", "RU-SEV", "RU-KO", "RU-KIR", "RU-PNZ", "RU-TAM", "RU-MUR", "RU-LEN", "RU-VLG", "RU-KOS", "RU-PSK", "RU-ARK", "RU-YAN", "RU-CHU", "RU-YEV", "RU-TY", "RU-SAK", "RU-AMU", "RU-BU", "RU-KK", "RU-KEM", "RU-NVS", "RU-ALT", "RU-DA", "RU-STA", "RU-KB", "RU-KC", "RU-KDA", "RU-ROS", "RU-SAM", "RU-TA", "RU-ME", "RU-CU", "RU-NIZ", "RU-VLA", "RU-MOS", "RU-KLU", "RU-BEL", "RU-ZAB", "RU-PRI", "RU-KAM", "RU-MAG", "RU-SA", "RU-KYA", "RU-ORE", "RU-SAR", "RU-VGG", "RU-VOR", "RU-SMO", "RU-TVE", "RU-PER", "RU-KHM", "RU-TOM", "RU-IRK"];
var idarr2 = new Array(
    ["RU-MOW", "Москва"],
    ["RU-CHE", "Челябинская область"],
    ["RU-ORL", "Орловская область"],
    ["RU-OMS", "Омская область"],
    ["RU-LIP", "Липецкая область"],
    ["RU-KRS", "Курская область"],
    ["RU-RYA", "Рязанская область"],
    ["RU-BRY", "Брянская область"],
    ["RU-KIR", "Кировская область"],
    ["RU-ARK", "Архангельская область"],
    ["RU-MUR", "Мурманская область"],
    ["RU-SPE", "Санкт-Петербург"],
    ["RU-YAR", "Ярославская область"],
    ["RU-ULY", "Ульяновская область"],
    ["RU-NVS", "Новосибирская область"],
    ["RU-TYU", "Тюменская область"],
    ["RU-SVE", "Свердловская область"],
    ["RU-NGR", "Новгородская область"],
    ["RU-KGN", "Курганская область"],
    ["RU-KGD", "Калининградская область"],
    ["RU-IVA", "Ивановская область"],
    ["RU-AST", "Астраханская область"],
    ["RU-KHA", "Хабаровский край"],
    ["RU-CE", "Чеченская республика"],
    ["RU-UD", "Удмуртская республика"],
    ["RU-SE", "Республика Северная Осетия"],
    ["RU-MO", "Республика Мордовия"],
    ["RU-KR", "Республика Карелия"],
    ["RU-KL", "Республика Калмыкия"],
    ["RU-IN", "Республика Ингушетия"],
    ["RU-AL", "Республика Алтай"],
    ["RU-BA", "Республика Башкортостан"],
    ["RU-AD", "Республика Адыгея"],
    ["RU-CR", "Республика Крым"],
    ["RU-SEV", "Севастополь"],
    ["RU-KO", "Республика Коми"],
    ["RU-PNZ", "Пензенская область"],
    ["RU-TAM", "Тамбовская область"],
    ["RU-LEN", "Ленинградская область"],
    ["RU-VLG", "Вологодская область"],
    ["RU-KOS", "Костромская область"],
    ["RU-PSK", "Псковская область"],
    ["RU-YAN", "Ямало-Ненецкий АО"],
    ["RU-CHU", "Чукотский АО"],
    ["RU-YEV", "Еврейская автономская область"],
    ["RU-TY", "Республика Тыва"],
    ["RU-SAK", "Сахалинская область"],
    ["RU-AMU", "Амурская область"],
    ["RU-BU", "Республика Бурятия"],
    ["RU-KK", "Республика Хакасия"],
    ["RU-KEM", "Кемеровская область"],
    ["RU-ALT", "Алтайский край"],
    ["RU-DA", "Республика Дагестан"],
    ["RU-KB", "Кабардино-Балкарская республика"],
    ["RU-KC", "Карачаевая-Черкесская республика"],
    ["RU-KDA", "Краснодарский край"],
    ["RU-ROS", "Ростовская область"],
    ["RU-SAM", "Самарская область"],
    ["RU-TA", "Республика Татарстан"],
    ["RU-ME", "Республика Марий Эл"],
    ["RU-CU", "Чувашская республика"],
    ["RU-NIZ", "Нижегородская область"],
    ["RU-VLA", "Владимировская область"],
    ["RU-MOS", "Московская область"],
    ["RU-KLU", "Калужская область"],
    ["RU-BEL", "Белгородская область"],
    ["RU-ZAB", "Забайкальский край"],
    ["RU-PRI", "Приморский край"],
    ["RU-KAM", "Камчатский край"],
    ["RU-MAG", "Магаданская область"],
    ["RU-SA", "Республика Саха"],
    ["RU-KYA", "Красноярский край"],
    ["RU-ORE", "Оренбургская область"],
    ["RU-SAR", "Саратовская область"],
    ["RU-VGG", "Волгоградская область"],
    ["RU-VOR", "Ставропольский край"],
    ["RU-SMO", "Смоленская область"],
    ["RU-TVE", "Тверская область"],
    ["RU-PER", "Пермская область"],
    ["RU-KHM", "Ханты-Мансийский АО"],
    ["RU-TOM", "Томская область"],
    ["RU-IRK", "Иркутская область"],
    ["RU-NEN", "Ненецскй АО"],
    ["RU-STA", "Ставропольский край"],
    ["RU-TUL", "Тульская область"]

);


var dataTime = [
    { id: "year", text: "Год" },
    { id: "quater", text: "Квартал" },
    { id: "month", text: "Месяц" }
];

var dataRegions = idarr2.map(item => ({
    id: item[0],
    text: item[1]
}));
var select_regions = document.getElementsByClassName("select-name-region");
Array.from(select_regions).forEach(el => {
    $(el).select2({
        placeholder: "Выберите регион",
        data: dataRegions,
        allowClear: true
    }).on('select2:select', function (event) {
        var selectedId= event.params.data['id'];
        
        var pathToClick = document.getElementById(selectedId);
        if (pathToClick)
        {
            var event = new MouseEvent('click', { bubbles: true });
            pathToClick.dispatchEvent(event);
        }
    });
});

// для сравнения
var select_regions_first = document.getElementsByClassName("select-name-region-first");
Array.from(select_regions_first).forEach(el => {
    $(el).select2({
        placeholder: "Выберите регион",
        data: dataRegions,
        allowClear: true
    });
});
var select_regions_second = document.getElementsByClassName("select-name-region-second");
Array.from(select_regions_second).forEach(el => {
    $(el).select2({
        placeholder: "Выберите регион",
        data: dataRegions,
        allowClear: true
    });
});
var select_time = document.getElementsByClassName("select-time");
Array.from(select_time).forEach(el => {
    $(el).select2({
        data: dataTime,
    });
})


// Показ необходимой информации

var btn = document.getElementById("button-show-info");
var div_show_info = document.getElementsByClassName("show-info")[0];

btn.addEventListener("click", function () {
    // Регионы должны быть выбраны
    if($('.select-name-region').val() || ($('.select-name-region-first').val()
    && $('.select-name-region-second').val())){
        div_show_info.style.display = 'flex';
    }

});

// Показ индикатора

function updateIndicatorPosition(e, indic, path_id) {
    for (var i = 0; i < idarr2.length; i++){
        if(idarr2[i][0]== path_id){
            indic.textContent = idarr2[i][1];
            indic.style.display = 'block';
            break;
        }
    }
    const offset = 10;
    indic.style.left = `${e.clientX + offset}px`;
    indic.style.top = `${e.clientY + offset}px`;
}



