from django.shortcuts import render

def show_map(request):
    # Добавить отображение графиков
    return render(request, 'map/show_map.html')