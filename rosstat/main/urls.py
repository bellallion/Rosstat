"""
URL-маршруты для приложения ``main``.

Определяет связь между URL-адресами и view-функциями,
обрабатывающими запросы к главной странице.
"""

from django.urls import path
from . import views

urlpatterns = [
     path('', views.show_main, name='main')
] 