from django.urls import path, include
from rest_framework import routers

from .views import( 
    PopulationDataApiView, 
    EmploymentRussiaApiView,
    EconomicActivityTypeApiView,
    EmploymentByTypeOfWorkApiView,
    JobsByTypeOfWorkApiView,
    WorkingGraduatesHEApiView,
    WorkingGraduatesSPOApiView,
    SpecialtyTypeApiView,
    WorkInSpecialityHEApiView,
    WorkInSpecialitySPOApiView
    )

router = routers.DefaultRouter()
router.register(r'populationdata', PopulationDataApiView)
router.register(r'employrus', EmploymentRussiaApiView)
router.register(r'activitytype', EconomicActivityTypeApiView)
router.register(r'employtypeofwork', EmploymentByTypeOfWorkApiView)
router.register(r'jobsbytypework', JobsByTypeOfWorkApiView)
router.register(r'he/workgrad', WorkingGraduatesHEApiView)
router.register(r'spo/workgrad', WorkingGraduatesSPOApiView)
router.register(r'specialty', SpecialtyTypeApiView)
router.register(r'he/workspecial', WorkInSpecialityHEApiView)
router.register(r'spo/workspecial', WorkInSpecialitySPOApiView)



urlpatterns = [

     path('', include(router.urls))

] 