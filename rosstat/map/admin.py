from django.contrib import admin
from .models import PopulationData , EmploymentRussia


# Регистрация с кастомизацией
@admin.register(PopulationData)
class PopulationDataAdmin(admin.ModelAdmin):
    list_display = list_display = ['year', 'total_population', 'urban_population', 
                    'rural_population', 'urban_percentage', 'rural_percentage']  # поля для отображения
    list_display_links = ('year',)  # поля-ссылки
    search_fields = ('year',)  # поля для поиска
    ordering = ('-year',)  # сортировка

@admin.register(EmploymentRussia)
class EmploymentRussiaAdmin(admin.ModelAdmin):
    list_display = list_display = ['year', 'month', 'labor_force', 
                    'employ_people', 'unemployed_people'] 
    fields =  ['year', 'month', 'labor_force', 
                    'employ_people', 'unemployed_people', 'percent_in_labor', 'percent_employed', 'percent_unemployed'] 
    
    list_display_links = ('year',)  
    search_fields = ('year',)  
    ordering = ('-year',) 

