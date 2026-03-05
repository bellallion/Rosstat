from django.urls import path, include
from rest_framework import routers

from .views import PopulationDataApiView, EmploymentRussiaApiView

router = routers.DefaultRouter()
router.register(r'populationdata', PopulationDataApiView)
router.register(r'employrus', EmploymentRussiaApiView)


urlpatterns = [

     path('', include(router.urls))

] 