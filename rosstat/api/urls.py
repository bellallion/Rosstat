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

from .views import( 
    RegionsRFApiView,
    LaborForceRegionApiView,
    PopulationRegionApiView,
    WorkForceLevelApiView
    )

router = routers.DefaultRouter()
router.register(r'rus/population', PopulationDataApiView)
router.register(r'rus/employrus', EmploymentRussiaApiView)
router.register(r'rus/activitytype', EconomicActivityTypeApiView)
router.register(r'rus/employtypeofwork', EmploymentByTypeOfWorkApiView)
router.register(r'rus/jobsbytypework', JobsByTypeOfWorkApiView)
router.register(r'rus/he/workgrad', WorkingGraduatesHEApiView)
router.register(r'rus/spo/workgrad', WorkingGraduatesSPOApiView)
router.register(r'rus/specialty', SpecialtyTypeApiView)
router.register(r'rus/he/workspecial', WorkInSpecialityHEApiView)
router.register(r'rus/spo/workspecial', WorkInSpecialitySPOApiView)

router.register(r'regions', RegionsRFApiView)
router.register(r'reg/laborforce', LaborForceRegionApiView)
router.register(r'reg/population', PopulationRegionApiView)
router.register(r'reg/workforcelevel', WorkForceLevelApiView)



urlpatterns = [

     path('', include(router.urls))

] 