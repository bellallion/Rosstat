from django.urls import path, include
from rest_framework import routers

from .views import PopulationDataApiView

router = routers.DefaultRouter()
router.register(r'populationdata', PopulationDataApiView)


urlpatterns = [

     path('', include(router.urls), name = 'populationdata'),

] 