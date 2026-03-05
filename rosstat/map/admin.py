from django.contrib import admin
from .models import *


#---Численность населения
@admin.register(PopulationData)
class PopulationDataAdmin(admin.ModelAdmin):
    list_display = list_display = ['year', 'total_population', 'urban_population', 
                    'rural_population', 'urban_percentage', 'rural_percentage']  # поля для отображения
    list_display_links = ('year',)  # поля-ссылки
    search_fields = ('year',)  # поля для поиска
    ordering = ('-year',)  # сортировка

#---занятость и безработица в России по месяцам
@admin.register(EmploymentRussia)
class EmploymentRussiaAdmin(admin.ModelAdmin):
    list_display = list_display = ['year', 'month', 'labor_force', 
                    'employ_people', 'unemployed_people'] 
    fields =  ['year', 'month', 'labor_force', 
                    'employ_people', 'unemployed_people', 'percent_in_labor', 'percent_employed', 'percent_unemployed'] 
    
    list_display_links = ('year',)  
    search_fields = ('year',)  
    ordering = ('-year',) 


#---Занятость по годам для каждого вида деятельности
class EmploymentByTypeOfWorkInline(admin.TabularInline):
    """Инлайн для отображения значений по годам."""
    model = EmploymentByTypeOfWork
    extra = 1 # дополнительная строка
    fields = ['year', 'value']
    ordering = ['year']

#---Справочник видов экономической деятельности
@admin.register(EconomicActivityType)
class EconomicActivityTypeAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']
    inlines = [EmploymentByTypeOfWorkInline]

#---Значения занятости по годам для каждого вида деятельности
@admin.register(EmploymentByTypeOfWork)
class EmploymentByTypeOfWorkAdmin(admin.ModelAdmin):
    list_display = ['activity_type', 'year', 'value']
    list_filter = ['year', 'activity_type']
    search_fields = ['activity_type__name']
    # list_editable = ['value']
