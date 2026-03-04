// // // Работа с картой
var paths = document.getElementsByTagName("path");

var ind = document.getElementsByClassName("indicator")[0];

Array.from(paths).forEach(path => press_region_to_select(Array.from(paths), path));

const colors = {
    default: '#adb4ed',
    hover: '#929cf0',
    selected: '#5562d9',
    inactive: '#b6b8cc'
}
var selected_region_id = '';

function press_region_to_select(paths, path) {

    path.addEventListener("click", function () {
        paths.forEach(p => p.style.fill = colors.default);
        if (this.id != selected_region_id){
            this.style.fill = colors.selected;
            selected_region_id = this.id;
        }
        else
            selected_region_id = "";
        $('.select-name-region').val(selected_region_id).trigger('change');

    });

    path.addEventListener("mouseover", function (e) {
        paths.forEach(p => {
            if (p.id != selected_region_id) p.style.fill = colors.inactive;});
        if(this.id != selected_region_id)
            this.style.fill = colors.hover;
        updateIndicatorPosition(e, ind, this.id);
    });

    path.addEventListener("mouseout", function () {
        ind.style.display = 'none';
        paths.forEach(p => {
            if(p.id != selected_region_id)
                p.style.fill = colors.default
    });
            

    });
};



