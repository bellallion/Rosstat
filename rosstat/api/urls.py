from django.urls import path, include
from rest_framework import routers

from .views import( 
    PopulationDataApiView, 
    EmploymentRussiaApiView,
    EconomicActivityTypeApiView,
    EmploymentByTypeOfWorkApiView,
    JobsByTypeOfWorkApiView,
    WorkingGraduatesHEApiView
    )

router = routers.DefaultRouter()
router.register(r'populationdata', PopulationDataApiView)
router.register(r'employrus', EmploymentRussiaApiView)
router.register(r'activitytype', EconomicActivityTypeApiView)
router.register(r'employtypeofwork', EmploymentByTypeOfWorkApiView)
router.register(r'jobsbytypework', JobsByTypeOfWorkApiView)
router.register(r'workgrad/he', WorkingGraduatesHEApiView)


urlpatterns = [

     path('', include(router.urls))

] 