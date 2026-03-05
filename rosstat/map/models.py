from django.db import models


class PopulationData(models.Model):
    """Модель для хранения данных о численности населения России.
    
    Содержит информацию о общей численности, городском и сельском населении
    с разбивкой по годам.

    Attributes:
        year (int): Год сбора данных
        total_population (float): Общая численность населения (млн человек)
        urban_population (float): Численность городского населения (млн человек)
        rural_population (float): Численность сельского населения (млн человек)
        urban_percentage (float): Доля городского населения (%)
        rural_percentage (float): Доля сельского населения (%)
    """
    year = models.IntegerField(verbose_name="Год")
    total_population = models.FloatField(verbose_name="Численность населения")
    urban_population = models.FloatField(verbose_name="Городское население")
    rural_population = models.FloatField(verbose_name="Сельское население")
    urban_percentage = models.FloatField(verbose_name="Процент городского населения")
    rural_percentage = models.FloatField(verbose_name="Процент сельского населения")

    class Meta:
        """Мета-класс для дополнительных настроек модели."""
        verbose_name = "Численность населения"
        verbose_name_plural = "Численность населения"

    def __str__(self):
        """Строковое представление объекта.
        
        Returns:
            str: Строка в формате "Год - Численность населения"
        """
        return f"{self.year} - {self.total_population}"
    

class EmploymentRussia(models.Model):
    """Модель для хранения данных о занятости и безработице в России по месяцам.
    
    Содержит статистику по рабочей силе, занятости и безработице с помесячной детализацией.
    Все процентные показатели рассчитываются относительно общей численности рабочей силы.

    Attributes:
        year (int): Год данных (например, 2023)
        month (str): Название месяца (например, "Январь")
        labor_force (int): Общая численность рабочей силы (тыс. человек)
        employ_people (int): Численность занятого населения (тыс. человек)
        unemployed_people (int): Численность безработных (тыс. человек)
        percent_in_labor (float): Уровень участия в рабочей силе (% от трудоспособного населения)
        percent_employed (float): Уровень занятости (% от рабочей силы)
        percent_unemployed (float): Уровень безработицы (% от рабочей силы)
    """
    year = models.IntegerField(verbose_name="Год")
    month = models.CharField(max_length=20, verbose_name="Месяц")
    labor_force = models.FloatField(verbose_name="Рабочая сила")
    employ_people = models.FloatField(verbose_name="Занятые")
    unemployed_people = models.FloatField(verbose_name="Безработные")
    percent_in_labor = models.FloatField(verbose_name="Уровень участия в составе рабочей силы, в %")
    percent_employed = models.FloatField(verbose_name="Уровень занятости, в %")
    percent_unemployed = models.FloatField(verbose_name="Уровень безработицы, в %")

    class Meta:
 
        verbose_name = "Данные о занятости населения"
        verbose_name_plural = "Данные о занятости населения"
