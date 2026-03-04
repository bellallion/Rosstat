from django.urls import path
from . import views


urlpatterns = [
    path('', views.select_regions, name='regions'), 
    path('compare', views.compare_regions, name='compare'),
]
