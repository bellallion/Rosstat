var btn_select_type = document.getElementById("button-select-type");
var div_type_first = document.getElementById("first-type");
var div_type_second = document.getElementById("second-type");

types_text_button = {
    first: "Высшее образование",
    second: "Среднее образование"
}
if (!btn_select_type.textContent){
        btn_select_type.textContent = types_text_button.first;
}

btn_select_type.addEventListener("click", function(){
    if (this.textContent == types_text_button.first){
        this.textContent = types_text_button.second;
        div_type_first.style.display = 'none';
        div_type_second.style.display = 'block';


    }else{
        this.textContent = types_text_button.first;
        div_type_second.style.display = 'none';
        div_type_first.style.display = 'block';
    }
})