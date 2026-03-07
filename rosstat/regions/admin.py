from django.contrib import admin
from .models import *

#---Численность рабочей силы по регионам РФ
class LaborForceRegionInline(admin.TabularInline):
    model = LaborForceRegion
    extra = 1
    fields = ['region', 'year', 'value']
    ordering = ['year']


@admin.register(LaborForceRegion)
class LaborForceRegionAdmin(admin.ModelAdmin):
    list_display = ['region', 'year', 'value']
    list_filter = ['year', 'region']
    search_fields = ['region__name']
    # list_editable = ['value']


#---Численность населения по регионам РФ
class PopulationRegionInline(admin.TabularInline):
    model = PopulationRegion
    extra = 1
    fields = ['region', 'year', 'value']
    ordering = ['year']


@admin.register(PopulationRegion)
class PopulationRegionAdmin(admin.ModelAdmin):
    list_display = ['region', 'year', 'value']
    list_filter = ['year', 'region']
    search_fields = ['region__name']
    # list_editable = ['value']

    
#---Справочник регионов РФ
@admin.register(RegionsRF)
class RegionsRFAdmin(admin.ModelAdmin):
    list_display = ['name', 'code']
    search_fields = ['name', 'code']
    inlines = [LaborForceRegionInline, PopulationRegionInline]
