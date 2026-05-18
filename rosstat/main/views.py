from django.shortcuts import render

def show_main(request):
    """
    Отображает главную страницу приложения.

    Args:
        request (HttpRequest): HTTP-запрос от клиента.

    Returns:
        HttpResponse: Сгенерированная HTML-страница ``main/main.html``.
    """
    return render(request, 'main/main.html')
