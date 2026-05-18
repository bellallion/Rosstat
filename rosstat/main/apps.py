from django.apps import AppConfig


class MainConfig(AppConfig):
    """
    Конфигурация приложения ``main``.
    
    Этот класс определяет настройки для приложения ``main`` в проекте Django.
    Используется для указания имени приложения, путей к файлам статики,
    шаблонов и сигналов.
    
    Attributes:
        name (str): Внутреннее имя приложения, используемое Django.
    
    Example:
        Приложение регистрируется в ``INSTALLED_APPS`` как ``'main'``.
    """
    name = 'main'
