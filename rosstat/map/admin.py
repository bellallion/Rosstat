"""
Настройки административной панели Django.

Определяет, как модели отображаются и управляются в административном
интерфейсе Django Admin для всех приложений проекта.
"""

from django.contrib import admin
from .models import *


#---Численность населения
@admin.register(PopulationData)
class PopulationDataAdmin(admin.ModelAdmin):
    """
    Настройка отображения модели ``PopulationData`` в админ-панели.

    Отображает данные о численности населения по годам, включая
    городское и сельское население, а также процентное соотношение.
    """
    list_display = list_display = ['year', 'total_population', 'urban_population', 
                    'rural_population', 'urban_percentage', 'rural_percentage']  # поля для отображения
    list_display_links = ('year',)  # поля-ссылки
    search_fields = ('year',)  # поля для поиска
    ordering = ('-year',)  # сортировка

#---занятость и безработица в России по месяцам
@admin.register(EmploymentRussia)
class EmploymentRussiaAdmin(admin.ModelAdmin):
    """
    Настройка отображения модели ``EmploymentRussia`` в админ-панели.

    Отображает помесячные данные о занятости и безработице в России:
    - рабочая сила
    - занятые
    - безработные
    - процентные соотношения
    """
    list_display = list_display = ['year', 'month', 'labor_force', 
                    'employ_people', 'unemployed_people'] 
    fields =  ['year', 'month', 'labor_force', 
                    'employ_people', 'unemployed_people', 'percent_in_labor', 'percent_employed', 'percent_unemployed'] 
    
    list_display_links = ('year',)  
    search_fields = ('year',)  
    ordering = ('-year',) 


#---Занятость по годам для каждого вида деятельности
class EmploymentByTypeOfWorkInline(admin.TabularInline):
    """
    Инлайн-форма для редактирования занятости по годам.

    Позволяет редактировать значения занятости для каждого года
    непосредственно на странице вида экономической деятельности.
    
    Attributes:
        model (Model): Связанная модель EmploymentByTypeOfWork
        extra (int): Количество дополнительных пустых строк для добавления
        fields (list): Поля для отображения
        ordering (list): Сортировка по году
    """
    model = EmploymentByTypeOfWork
    extra = 1 # дополнительная строка
    fields = ['year', 'value']
    ordering = ['year']

#---Значения занятости по годам для каждого вида деятельности
@admin.register(EmploymentByTypeOfWork)
class EmploymentByTypeOfWorkAdmin(admin.ModelAdmin):
    """
    Настройка отображения модели ``EmploymentByTypeOfWork`` в админ-панели.

    Отображает данные о занятости по каждому виду экономической деятельности
    с возможностью фильтрации по году и типу деятельности.
    """
    list_display = ['activity_type', 'year', 'value']
    list_filter = ['year', 'activity_type']
    search_fields = ['activity_type__name']
    # list_editable = ['value']

#---Данные о рабочих местах по годам
class JobsByTypeOfWorkInline(admin.TabularInline):
    """
    Инлайн-форма для редактирования данных о рабочих местах по годам.

    Позволяет редактировать количество созданных и ликвидированных
    рабочих мест для каждого года.
    
    Attributes:
        model (Model): Связанная модель JobsByTypeOfWork
        extra (int): Количество дополнительных пустых строк
        fields (list): Поля для отображения (год, создано, ликвидировано)
        ordering (list): Сортировка по году
    """
    model = JobsByTypeOfWork
    extra = 1
    fields = ['year', 'created', 'liquidated']
    ordering = ['year']

@admin.register(JobsByTypeOfWork)
class JobsByTypeOfWorkAdmin(admin.ModelAdmin):
    """
    Настройка отображения модели ``JobsByTypeOfWork`` в админ-панели.

    Отображает данные о созданных и ликвидированных рабочих местах
    по видам экономической деятельности.
    """
    list_display = ['activity_type', 'year', 'created', 'liquidated']
    list_filter = ['year', 'activity_type']
    search_fields = ['activity_type__name']
    # list_editable = ['value']

#---Занятость выпускников вузов. Высшее образование
class WorkingGraduatesHEInline(admin.TabularInline):
    """
    Инлайн-форма для занятости выпускников с высшим образованием.

    Отображает данные о трудоустройстве выпускников вузов по годам.
    """
    model = WorkingGraduatesHE
    extra = 1
    fields = ['year', 'all_people', 'working', 'not_working', 'can_not_work', 'employment_percent']
    ordering = ['year']

@admin.register(WorkingGraduatesHE)
class WorkingGraduatesHEAdmin(admin.ModelAdmin):
    """
    Настройка отображения модели ``WorkingGraduatesHE`` в админ-панели.

    Отображает данные о занятости выпускников с высшим образованием
    по видам экономической деятельности.
    """
    list_display = ['activity_type', 'year', 'all_people', 'working', 'not_working', 'can_not_work', 'employment_percent']
    list_filter = ['year', 'activity_type']
    search_fields = ['activity_type__name']
    # list_editable = ['value']

#---Занятость выпускников вузов. Среднее профессиональное образование
class WorkingGraduatesSPOInline(admin.TabularInline):
    """
    Инлайн-форма для занятости выпускников со средним профессиональным образованием.

    Отображает данные о трудоустройстве выпускников СПО по годам.
    """
    model = WorkingGraduatesSPO
    extra = 1
    fields = ['year', 'all_people', 'working', 'not_working', 'can_not_work', 'employment_percent']
    ordering = ['year']

@admin.register(WorkingGraduatesSPO)
class WorkingGraduatesSPOAdmin(admin.ModelAdmin):
    """
    Настройка отображения модели ``WorkingGraduatesSPO`` в админ-панели.

    Отображает данные о занятости выпускников со средним профессиональным
    образованием по видам экономической деятельности.
    """
    list_display = ['activity_type', 'year', 'all_people', 'working', 'not_working', 'can_not_work', 'employment_percent']
    list_filter = ['year', 'activity_type']
    search_fields = ['activity_type__name']
    # list_editable = ['value']


#---Справочник видов экономической деятельности
@admin.register(EconomicActivityType)
class EconomicActivityTypeAdmin(admin.ModelAdmin):
    """
    Настройка отображения справочника видов экономической деятельности.

    Это основной справочник, объединяющий все связанные данные:
    - занятость по годам
    - рабочие места
    - занятость выпускников (ВО и СПО)

    Inlines подключают связанные модели для удобного редактирования
    всех данных на одной странице.
    """
    list_display = ['name']
    search_fields = ['name']
    inlines = [EmploymentByTypeOfWorkInline, JobsByTypeOfWorkInline, 
               WorkingGraduatesHEInline, WorkingGraduatesSPOInline]
    
#---Трудоустройство выпускников по специальностям. Высшее образование
class WorkInSpecialityHEInline(admin.TabularInline):
    """
    Инлайн-форма для трудоустройства выпускников по специальностям (ВО).

    Отображает данные о том, работают ли выпускники вузов по специальности.
    """
    model = WorkInSpecialityHE
    extra = 1
    fields = ['special_type', 'year', 'all_people', 'works_by_profession', 'works_not_by_profession', 
                    'works_by_profession_percent', 'works_not_by_profession_percent']
    ordering = ['year']


@admin.register(WorkInSpecialityHE)
class WorkInSpecialityHEAdmin(admin.ModelAdmin):
    """
    Настройка отображения модели ``WorkInSpecialityHE`` в админ-панели.

    Отображает данные о трудоустройстве выпускников с высшим образованием
    по специальностям (работают по профессии или нет).
    """
    list_display = ['special_type', 'year', 'all_people', 'works_by_profession', 'works_not_by_profession', 
                    'works_by_profession_percent', 'works_not_by_profession_percent']
    list_filter = ['year', 'special_type']
    search_fields = ['special_type__name']
    # list_editable = ['value']

#---Трудоустройство выпускников по специальностям. Средние профессиональное образование
class WorkInSpecialitySPOInline(admin.TabularInline):
    """
    Инлайн-форма для трудоустройства выпускников по специальностям (СПО).

    Отображает данные о том, работают ли выпускники СПО по специальности.
    """
    model = WorkInSpecialitySPO
    extra = 1
    fields = ['special_type', 'year', 'all_people', 'works_by_profession', 'works_not_by_profession', 
                    'works_by_profession_percent', 'works_not_by_profession_percent']
    ordering = ['year']


@admin.register(WorkInSpecialitySPO)
class WorkInSpecialitySPOAdmin(admin.ModelAdmin):
    """
    Настройка отображения модели ``WorkInSpecialitySPO`` в админ-панели.

    Отображает данные о трудоустройстве выпускников со средним
    профессиональным образованием по специальностям.
    """
    list_display = ['special_type', 'year', 'all_people', 'works_by_profession', 'works_not_by_profession', 
                    'works_by_profession_percent', 'works_not_by_profession_percent']
    list_filter = ['year', 'special_type']
    search_fields = ['special_type__name']
    # list_editable = ['value']

    
#---Справочник специальностей
@admin.register(SpecialtyType)
class SpecialtyTypeAdmin(admin.ModelAdmin):
    """
    Настройка отображения справочника специальностей.

    Это основной справочник специальностей, объединяющий данные о
    трудоустройстве выпускников по специальностям (ВО и СПО).

    Inlines подключают связанные модели для удобного редактирования
    всех данных на одной странице.
    """
    list_display = ['name']
    search_fields = ['name']
    inlines = [WorkInSpecialityHEInline, WorkInSpecialitySPOInline]