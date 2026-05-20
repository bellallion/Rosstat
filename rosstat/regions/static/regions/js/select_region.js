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
    ["RU-KC", "Карачаево-Черкесская республика"], 
    ["RU-KDA", "Краснодарский край"],
    ["RU-ROS", "Ростовская область"],
    ["RU-SAM", "Самарская область"],
    ["RU-TA", "Республика Татарстан"],
    ["RU-ME", "Республика Марий Эл"],
    ["RU-CU", "Чувашская республика"],
    ["RU-NIZ", "Нижегородская область"],
    ["RU-VLA", "Владимирская область"],
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
    ["RU-STA", "Ставропольский край"], 
    ["RU-SMO", "Смоленская область"],
    ["RU-TVE", "Тверская область"],
    ["RU-PER", "Пермский край"], 
    ["RU-KHM", "Ханты-Мансийский АО"],
    ["RU-TOM", "Томская область"],
    ["RU-IRK", "Иркутская область"],
    ["RU-NEN", "Ненецкий АО"], 
    ["RU-TUL", "Тульская область"]
);


const ruCodeToRegionCode = {
    "RU-MOW": 82,
    "RU-SPE": 83,
    "RU-SEV": 84,
    "RU-AMU": 34,
    "RU-ARK": 35,
    "RU-AST": 36,
    "RU-BEL": 37,
    "RU-BRY": 38,
    "RU-VLA": 39,
    "RU-VGG": 40,
    "RU-VLG": 41,
    "RU-VOR": 42,
    "RU-IVA": 44,
    "RU-IRK": 45,
    "RU-KGD": 46,
    "RU-KLU": 47,
    "RU-KEM": 48,
    "RU-KIR": 49,
    "RU-KOS": 50,
    "RU-KGN": 51,
    "RU-KRS": 52,
    "RU-LEN": 53,
    "RU-LIP": 54,
    "RU-MAG": 55,
    "RU-MOS": 56,
    "RU-MUR": 57,
    "RU-NIZ": 58,
    "RU-NGR": 59,
    "RU-NVS": 60,
    "RU-OMS": 61,
    "RU-ORE": 62,
    "RU-ORL": 63,
    "RU-PNZ": 64,
    "RU-PSK": 65,
    "RU-ROS": 66,
    "RU-RYA": 67,
    "RU-SAM": 68,
    "RU-SAR": 69,
    "RU-SAK": 70,
    "RU-SVE": 71,
    "RU-SMO": 72,
    "RU-TAM": 73,
    "RU-TVE": 74,
    "RU-TOM": 75,
    "RU-TUL": 76,
    "RU-TYU": 77,
    "RU-ULY": 78,
    "RU-CHE": 80,
    "RU-YAR": 81,
    "RU-ALT": 25,
    "RU-ZAB": 26,
    "RU-KAM": 27,
    "RU-KDA": 28,
    "RU-KYA": 29,
    "RU-PER": 30,
    "RU-PRI": 31,
    "RU-STA": 32,
    "RU-KHA": 33,
    "RU-AD": 1,
    "RU-AL": 2,
    "RU-BA": 3,
    "RU-BU": 4,
    "RU-DA": 5,
    "RU-IN": 7,
    "RU-KB": 8,
    "RU-KL": 9,
    "RU-KC": 10,
    "RU-KR": 11,
    "RU-KO": 12,
    "RU-CR": 13,
    "RU-ME": 15,
    "RU-MO": 16,
    "RU-SA": 17,
    "RU-SE": 18,
    "RU-TA": 19,
    "RU-TY": 20,
    "RU-UD": 21,
    "RU-KK": 22,
    "RU-CE": 23,
    "RU-CU": 24,
    "RU-YEV": 85,
    "RU-NEN": 86,
    "RU-KHM": 87,
    "RU-CHU": 88,
    "RU-YAN": 89,
    "RU-DNR": 6,
    "RU-LNR": 14,
    "RU-ZAP": 43,
    "RU-KHE": 79,
    "RU-TYU": 77,
    "RU-SVE": 71,
    "RU-RYA": 67,
    "RU-ORL": 63,
    "RU-OMS": 61,
    "RU-NGR": 59,
    "RU-LIP": 54,
    "RU-KRS": 52,
    "RU-KGN": 51,
    "RU-KGD": 46,
    "RU-IVA": 44,
    "RU-BRY": 38,
    "RU-AST": 36,
    "RU-KHA": 33,
    "RU-CE": 23,
    "RU-UD": 21,
    "RU-SE": 18,
    "RU-MO": 16,
    "RU-KR": 11,
    "RU-KL": 9,
    "RU-IN": 7,
    "RU-AL": 2,
    "RU-BA": 3,
    "RU-AD": 1,
    "RU-CR": 13,
    "RU-SEV": 84,
    "RU-KO": 12,
    "RU-PNZ": 64,
    "RU-TAM": 73,
    "RU-LEN": 53,
    "RU-VLG": 41,
    "RU-KOS": 50,
    "RU-PSK": 65,
    "RU-YAN": 89,
    "RU-CHU": 88,
    "RU-YEV": 85,
    "RU-TY": 20,
    "RU-SAK": 70,
    "RU-AMU": 34,
    "RU-BU": 4,
    "RU-KK": 22,
    "RU-KEM": 48,
    "RU-NVS": 60,
    "RU-ALT": 25,
    "RU-DA": 5,
    "RU-STA": 32,
    "RU-KB": 8,
    "RU-KC": 10,
    "RU-KDA": 28,
    "RU-ROS": 66,
    "RU-SAM": 68,
    "RU-TA": 19,
    "RU-ME": 15,
    "RU-CU": 24,
    "RU-NIZ": 58,
    "RU-VLA": 39,
    "RU-MOS": 56,
    "RU-KLU": 47,
    "RU-BEL": 37,
    "RU-ZAB": 26,
    "RU-PRI": 31,
    "RU-KAM": 27,
    "RU-MAG": 55,
    "RU-SA": 17,
    "RU-KYA": 29,
    "RU-ORE": 62,
    "RU-SAR": 69,
    "RU-VGG": 40,
    "RU-VOR": 42,
    "RU-SMO": 72,
    "RU-TVE": 74,
    "RU-PER": 30,
    "RU-KHM": 87,
    "RU-TOM": 75,
    "RU-IRK": 45,
    "RU-NEN": 86,
    "RU-TUL": 76
};

const getRegionID = (ruCode) => ruCodeToRegionCode[ruCode];


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



