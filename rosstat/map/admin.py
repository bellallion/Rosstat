from django.contrib import admin
from .models import PopulationData  # импортируем модель


# Регистрация с кастомизацией
@admin.register(PopulationData)
class PopulationDataAdmin(admin.ModelAdmin):
    list_display = list_display = ['year', 'total_population', 'urban_population', 
                    'rural_population', 'urban_percentage', 'rural_percentage']  # поля для отображения
    list_display_links = ('year',)  # поля-ссылки
    search_fields = ('year',)  # поля для поиска
    ordering = ('-year',)  # сортировка