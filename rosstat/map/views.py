from django.shortcuts import render

def show_map(request):
    """
    Отображает картографическую страницу с визуализацией данных по регионам РФ.

    Args:
        request (HttpRequest): HTTP-запрос.

    Returns:
        HttpResponse: HTML-страница с картами и графиками.
    """
    return render(request, 'map/show_map.html')