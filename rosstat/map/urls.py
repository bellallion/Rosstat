"""
URL-маршруты для приложения ``map``.

Определяет связь между URL-адресами и view-функциями,
обрабатывающими запросы к картографической части приложения.
"""

from django.urls import path
from . import views



urlpatterns = [
    path('', views.show_map, name='map')
]
