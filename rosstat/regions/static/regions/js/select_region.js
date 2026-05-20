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
    ["  ", "Республика Алтай"],
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


const ruCodeToRegionCode = {
    "RU-MOW": 45,
    "RU-MOS": 46,
    "RU-BEL": 14,
    "RU-BRY": 15,
    "RU-VLA": 17,
    "RU-VOR": 20,
    "RU-IVA": 24,
    "RU-KLU": 29,
    "RU-KOS": 34,
    "RU-KRS": 38,
    "RU-LIP": 42,
    "RU-ORL": 54,
    "RU-RYA": 61,
    "RU-SMO": 66,
    "RU-TAM": 68,
    "RU-TVE": 28,
    "RU-TUL": 70,
    "RU-YAR": 78,
    "RU-SPE": 40,
    "RU-LEN": 41,
    "RU-ARK": 11,
    "RU-NEN": 11118,
    "RU-VLG": 19,
    "RU-KGD": 27,
    "RU-KR": 86,
    "RU-KO": 87,
    "RU-MUR": 47,
    "RU-NGR": 49,
    "RU-PSK": 58,
    "RU-YAN": 71140,
    "RU-AD": 79,
    "RU-AL": 84,
    "RU-BA": 80,
    "RU-BU": 81,
    "RU-CE": 96,
    "RU-CU": 97,
    "RU-DA": 82,
    "RU-IN": 26,
    "RU-KB": 83,
    "RU-KC": 91,
    "RU-KK": 95,
    "RU-KL": 85,
    "RU-ME": 88,
    "RU-MO": 89,
    "RU-SE": 90,
    "RU-TA": 92,
    "RU-TY": 93,
    "RU-UD": 94,
    "RU-ALT": 1,
    "RU-KAM": 30,
    "RU-KDA": 3,
    "RU-KGN": 37,
    "RU-KHA": 8,
    "RU-KYA": 4,
    "RU-PER": 57,
    "RU-PRI": 5,
    "RU-STA": 7,
    "RU-ZAB": 76,
    "RU-AMU": 10,
    "RU-IRK": 25,
    "RU-KEM": 32,
    "RU-NVS": 50,
    "RU-OMS": 52,
    "RU-ORE": 53,
    "RU-PNZ": 56,
    "RU-SAK": 64,
    "RU-SAM": 36,
    "RU-SAR": 63,
    "RU-SVE": 65,
    "RU-TOM": 69,
    "RU-TYU": 71,
    "RU-ULY": 73,
    "RU-CHE": 75,
    "RU-YEV": 99,
    "RU-CHU": 77,
    "RU-KHM": 71100,
    "RU-MAG": 44,
    "RU-SA": 98,
    "RU-AMU": 10,
    "RU-NIZ": 22,
    "RU-VGG": 18,
    "RU-KIR": 33,
    "RU-KLU": 29,
    "RU-LIP": 42,
    "RU-ORL": 54,
    "RU-RYA": 61,
    "RU-SMO": 66,
    "RU-TAM": 68,
    "RU-TVE": 28,
    "RU-VLA": 17,
    "RU-VLG": 19,
    "RU-VOR": 20,
    "RU-YAR": 78,
    "RU-BRY": 15,
    "RU-IVA": 24,
    "RU-KOS": 34,
    "RU-KRS": 38,
    "RU-LEN": 41,
    "RU-MOS": 46,
    "RU-MUR": 47,
    "RU-NGR": 49,
    "RU-PSK": 58,
    "RU-SPE": 40,
    "RU-ARK": 11,
    "RU-NEN": 11118,
    "RU-YAN": 71140,
    "RU-KGD": 27,
    "RU-KR": 86,
    "RU-KO": 87,
    "RU-AD": 79,
    "RU-AL": 84,
    "RU-BA": 80,
    "RU-BU": 81,
    "RU-CE": 96,
    "RU-CU": 97,
    "RU-DA": 82,
    "RU-IN": 26,
    "RU-KB": 83,
    "RU-KC": 91,
    "RU-KK": 95,
    "RU-KL": 85,
    "RU-ME": 88,
    "RU-MO": 89,
    "RU-SE": 90,
    "RU-TA": 92,
    "RU-TY": 93,
    "RU-UD": 94,
    "RU-ALT": 1,
    "RU-KAM": 30,
    "RU-KDA": 3,
    "RU-KGN": 37,
    "RU-KHA": 8,
    "RU-KYA": 4,
    "RU-PER": 57,
    "RU-PRI": 5,
    "RU-STA": 7,
    "RU-ZAB": 76,
    "RU-AMU": 10,
    "RU-IRK": 25,
    "RU-KEM": 32,
    "RU-NVS": 50,
    "RU-OMS": 52,
    "RU-ORE": 53,
    "RU-PNZ": 56,
    "RU-SAK": 64,
    "RU-SAM": 36,
    "RU-SAR": 63,
    "RU-SVE": 65,
    "RU-TOM": 69,
    "RU-TYU": 71,
    "RU-ULY": 73,
    "RU-CHE": 75,
    "RU-YEV": 99,
    "RU-CHU": 77,
    "RU-KHM": 71100,
    "RU-MAG": 44,
    "RU-SA": 98,
    "RU-NIZ": 22,
    "RU-VGG": 18,
    "RU-KIR": 33,
    "RU-CR": 35,
    "RU-SEV": 67
};

const getRegionCode = (ruCode) => ruCodeToRegionCode[ruCode];


var dataTime = [
    { id: "year", text: "Год" },
    { id: "quater", text: "Квартал" },
    { id: "month", text: "Месяц" }
];

var dataRegions = idarr2.map(item => ({
    id: item[0],
    text: item[1]
}));

dataRegions.sort((a, b) => {
    return a.text.localeCompare(b.text);
});

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



