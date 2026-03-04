// // // Работа с картой
var paths = document.getElementsByTagName("path");

var ind = document.getElementsByClassName("indicator")[0];

Array.from(paths).forEach(path => press_region_to_compare(Array.from(paths), path));

const colors = {
    default: '#adb4ed',
    hover: '#929cf0',
    selected: '#5562d9',
    inactive: '#b6b8cc'
}
var selected_regions_id = ['', ''];

function press_region_to_compare(paths, path) {
    path.addEventListener("click", function () {
        if (selected_regions_id[0] != this.id && selected_regions_id[1] != this.id){
            if (selected_regions_id[0] == '')
                selected_regions_id[0] =  this.id;
            else
                selected_regions_id[1] =  this.id;
            this.style.fill = colors.selected;
        }else{
            if (selected_regions_id[0] == this.id)
                selected_regions_id[0] =  '';
            else
                selected_regions_id[1] = '';
            this.style.fill = colors.default;
        }
        paths.forEach(p => {if(selected_regions_id[0] != p.id && selected_regions_id[1] != p.id) p.style.fill = colors.default});
            
        $('.select-name-region-first').val(selected_regions_id[0]).trigger('change');
        $('.select-name-region-second').val(selected_regions_id[1]).trigger('change');

    });
    path.addEventListener("mouseover", function (e) {
        paths.forEach(p => {
            if (p.id != selected_regions_id[0] && p.id != selected_regions_id[1]) p.style.fill = colors.inactive;});
        if(this.id != selected_regions_id[0] && this.id != selected_regions_id[1])
            this.style.fill = colors.hover;
        ind.textContent = this.getAttribute('data-name') || this.id;
        
        updateIndicatorPosition(e, ind, this.id);
    });
    path.addEventListener("mouseout", function () {
        ind.style.display = 'none';
        paths.forEach(p => {
            if(p.id != selected_regions_id[0] && p.id != selected_regions_id[1])
                p.style.fill = colors.default
    });
            

    });
};

