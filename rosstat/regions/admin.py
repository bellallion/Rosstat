from django.contrib import admin
from .models import *

#---Трудоустройство выпускников по специальностям. Средние профессиональное образование
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

    
#---Справочник специальностей
@admin.register(RegionsRF)
class RegionsRFAdmin(admin.ModelAdmin):
    list_display = ['name', 'code']
    search_fields = ['name', 'code']
    inlines = [LaborForceRegionInline]
