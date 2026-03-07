from django.db import models


class PopulationData(models.Model):
    """Модель для хранения данных о численности населения России.
    
    Содержит информацию о общей численности, городском и сельском населении
    с разбивкой по годам.
    """
    year = models.IntegerField(verbose_name="Год")
    total_population = models.FloatField(verbose_name="Численность населения")
    urban_population = models.FloatField(
        verbose_name="Городское население",
        null=True,
        blank=True
        )
    rural_population = models.FloatField(
        verbose_name="Сельское население",
        null=True,
        blank=True
        )
    urban_percentage = models.FloatField(
        verbose_name="Процент городского населения",
        null=True,
        blank=True
        )
    rural_percentage = models.FloatField(
        verbose_name="Процент сельского населения",
        null=True,
        blank=True
        )

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
    """
    year = models.IntegerField(verbose_name="Год")
    month = models.CharField(max_length=20, verbose_name="Месяц")
    labor_force = models.FloatField(
        verbose_name="Рабочая сила",
        null=True,
        blank=True
        )
    employ_people = models.FloatField(
        verbose_name="Занятые",
        null=True,
        blank=True
        )
    unemployed_people = models.FloatField(
        verbose_name="Безработные",
        null=True,
        blank=True
        )
    percent_in_labor = models.FloatField(
        verbose_name="Уровень участия в составе рабочей силы, в %",
        null=True,
        blank=True
        )
    percent_employed = models.FloatField(
        verbose_name="Уровень занятости, в %",
        null=True,
        blank=True
    )
    percent_unemployed = models.FloatField(
        verbose_name="Уровень безработицы, в %",
        null=True,
        blank=True
    )

    class Meta:
 
        verbose_name = "Данные о занятости населения"
        verbose_name_plural = "Данные о занятости населения"



class EconomicActivityType(models.Model):
    """Справочник видов экономической деятельности."""
    name = models.CharField(max_length=255, unique=True, verbose_name="Название")
    
    class Meta:
        verbose_name = "Вид экономической деятельности"
        verbose_name_plural = "Виды экономической деятельности"
        ordering = ['name']
    
    def __str__(self):
        return self.name

class EmploymentByTypeOfWork(models.Model):
    """Значения занятости по годам для каждого вида деятельности."""
    
    activity_type = models.ForeignKey(
        EconomicActivityType, 
        on_delete=models.CASCADE,
        related_name='employment_values', # имя для обратной связи
        verbose_name="Вид деятельности" # Человекочитаемое имя
    )
    year = models.PositiveSmallIntegerField(verbose_name="Год")
    value = models.FloatField(verbose_name="Численность занятых (тыс. человек)")
    
    class Meta:
        verbose_name = "Занятость по годам"
        verbose_name_plural = "Занятость по годам"
        unique_together = ['activity_type', 'year']  # Запретить дубликаты
        ordering = ['activity_type', 'year']
        indexes = [
            models.Index(fields=['activity_type', 'year']),
        ]
    
    def __str__(self):
        return f"{self.activity_type.name} - {self.year}: {self.value}"

class JobsByTypeOfWork(models.Model):
    """Модель данных о динамике рабочих мест по видам экономической деятельности.
    
    Содержит информацию о создании и ликвидации рабочих мест в разрезе отраслей
    за период с 2017 по 2021 годы. Данные представлены в абсолютных значениях.
    """
    activity_type = models.ForeignKey(
        EconomicActivityType, 
        on_delete=models.CASCADE,
        related_name='jobs_values', # имя для обратной связи
        verbose_name="Вид деятельности", 
    )
    year = models.PositiveSmallIntegerField(verbose_name="Год")
    created = models.FloatField(
        verbose_name="Создано рабочих мест (тыс.)",
        help_text="Количество созданных рабочих мест",
        null=True,
        blank=True
    )
    liquidated = models.FloatField(
        verbose_name="Ликвидировано рабочих мест (тыс.)",
        help_text="Количество ликвидированных рабочих мест",
        null=True,
        blank=True
    )
    
    class Meta:
        verbose_name = "Данные о рабочих местах по годам"
        verbose_name_plural = "Данные о рабочих местах по годам"
        unique_together = ['activity_type', 'year']  # запрет дубликатов
        ordering = ['activity_type', 'year']
        indexes = [
            models.Index(fields=['activity_type', 'year']),
        ]
    
    def __str__(self):
        return f"{self.activity_type.name} - {self.year}: +{self.created} / -{self.liquidated}"
    
    
class WorkingGraduatesHE(models.Model):
    """Модель данных о занятости выпускников вузов. Высшее образование"""

    activity_type = models.ForeignKey(
        EconomicActivityType, 
        on_delete=models.CASCADE,
        related_name='work_grad_he_values', # имя для обратной связи
        verbose_name="Вид отрасли" 
    )
    year = models.PositiveSmallIntegerField(
        verbose_name="Год"
    )
    all_people = models.FloatField(
        verbose_name="Общая численность выпускников (человек)",
        help_text="Общая численность выпускников",
        null=True,
        blank=True
    )

    working = models.FloatField(
        verbose_name="Занятые (человек)",
        help_text="Число занятых выпускников",
        null=True,
        blank=True
    )
    not_working = models.FloatField(
        verbose_name="Безработные (человек)",
        help_text="Число безработных выпускников",
        null=True,
        blank=True
    )
    can_not_work = models.FloatField(
        verbose_name="Не входящие в рабочую силу (человек)",
        help_text="Число выпускников, не входящих в состав рабочей силы",
        null=True,
        blank=True
    )
    employment_percent = models.FloatField(
        verbose_name="Уровень занятости (%)",
        help_text="Доля занятых среди рабочей силы",
        null=True,
        blank=True
    )

    class Meta:
        verbose_name = "Занятость выпускников. Высшее образование"
        verbose_name_plural = "Занятость выпускников. Высшее образование"
        ordering = ['-year', 'activity_type']
        unique_together = ['activity_type', 'year']

    def __str__(self):

        return f"{self.activity_type.name}: {self.all_people}"
    
class WorkingGraduatesSPO(models.Model):
    """Модель данных о занятости выпускников вузов. 
    Средние профессиональное образование"""

    activity_type = models.ForeignKey(
        EconomicActivityType, 
        on_delete=models.CASCADE,
        related_name='work_grad_spo_values', # имя для обратной связи
        verbose_name="Вид отрасли" 
    )
    year = models.PositiveSmallIntegerField(
        verbose_name="Год"
    )
    all_people = models.FloatField(
        verbose_name="Общая численность выпускников (тыс.чел.)",
        help_text="Общая численность выпускников",
        null=True,
        blank=True
    )

    working = models.FloatField(
        verbose_name="Занятые (тыс.чел.)",
        help_text="Число занятых выпускников",
        null=True,
        blank=True
    )
    not_working = models.FloatField(
        verbose_name="Безработные (тыс.чел.)",
        help_text="Число безработных выпускников",
        null=True,
        blank=True
    )
    can_not_work = models.FloatField(
        verbose_name="Не входящие в рабочую силу (тыс.чел.)",
        help_text="Число выпускников, не входящих в состав рабочей силы",
        null=True,
        blank=True
    )
    employment_percent = models.FloatField(
        verbose_name="Уровень занятости (%)",
        help_text="Доля занятых среди рабочей силы",
        null=True,
        blank=True
    )

    class Meta:
        verbose_name = "Занятость выпускников. Среднее профессиональное образование"
        verbose_name_plural = "Занятость выпускников. Среднее профессиональное образование"
        ordering = ['-year', 'activity_type']
        unique_together = ['activity_type', 'year']

    def __str__(self):

        return f"{self.activity_type.name}: {self.all_people}"


class SpecialtyType(models.Model):
    """Справочник специальностей."""
    name = models.CharField(max_length=255, unique=True, verbose_name="Название")
    
    class Meta:
        verbose_name = "Специальность"
        verbose_name_plural = "Специальности"
        ordering = ['name']
    
    def __str__(self):
        return self.name

class WorkInSpecialityHE(models.Model):
    """Модель данных о трудоустройстве выпускников по специальностям
    Высшее образование"""

    special_type = models.ForeignKey(
        SpecialtyType, 
        on_delete=models.CASCADE,
        related_name='special_he_values', # имя для обратной связи
        verbose_name="Специальность" 
    )
    year = models.PositiveSmallIntegerField(
        verbose_name="Год"
    )
    all_people = models.FloatField(
        verbose_name="Общая численность выпускников ",
        help_text="Общая численность выпускников (тыс. человек)",
        null=True,
        blank=True
    )

    works_by_profession = models.FloatField(
        verbose_name="Работающие по специальности",
        help_text="Число выпускников, работающих по специальности (тыс. человек)",
        null=True,
        blank=True
    )
    works_not_by_profession = models.FloatField(
        verbose_name="Работающие не по специальности",
        help_text="Число выпускников, работающих не по специальности (тыс. человек)",
        null=True,
        blank=True
    )
    works_by_profession_percent = models.FloatField(
        verbose_name="Доля работающих по специальности",
        help_text="Число выпускников, работающих по специальности, %",
        null=True,
        blank=True
    )
    works_not_by_profession_percent = models.FloatField(
        verbose_name="Доля не работающих по специальности",
        help_text="Число выпускников, работающих не по специальности, %",
        null=True,
        blank=True
    )

    class Meta:
        verbose_name = "Данные о выпускниках, работающих по специальности. Высшее образование"
        verbose_name_plural = "Данные о выпускниках, работающих по специальности. Высшее образование"
        ordering = ['-year', 'special_type']
        unique_together = ['special_type', 'year']

    def __str__(self):

        return f"{self.special_type.name}: {self.all_people}"
    

class WorkInSpecialitySPO(models.Model):
    """Модель данных о трудоустройстве выпускников по специальностям
    Средние профессиональное образование"""

    special_type = models.ForeignKey(
        SpecialtyType, 
        on_delete=models.CASCADE,
        related_name='special_spo_values', # имя для обратной связи
        verbose_name="Специальность" 
    )
    year = models.PositiveSmallIntegerField(
        verbose_name="Год"
    )
    all_people = models.FloatField(
        verbose_name="Общая численность выпускников ",
        help_text="Общая численность выпускников (тыс. человек)",
        null=True,
        blank=True
    )

    works_by_profession = models.FloatField(
        verbose_name="Работающие по специальности",
        help_text="Число выпускников, работающих по специальности (тыс. человек)",
        null=True,
        blank=True
    )
    works_not_by_profession = models.FloatField(
        verbose_name="Работающие не по специальности",
        help_text="Число выпускников, работающих не по специальности (тыс. человек)",
        null=True,
        blank=True
    )
    works_by_profession_percent = models.FloatField(
        verbose_name="Доля работающих по специальности",
        help_text="Число выпускников, работающих по специальности, %",
        null=True,
        blank=True
    )
    works_not_by_profession_percent = models.FloatField(
        verbose_name="Доля не работающих по специальности",
        help_text="Число выпускников, работающих не по специальности, %",
        null=True,
        blank=True
    )

    class Meta:
        verbose_name = "Данные о выпускниках, работающих по специальности. Средние профессиональное образование"
        verbose_name_plural = "Данные о выпускниках, работающих по специальности. Средние профессиональное образование"
        ordering = ['-year', 'special_type']
        unique_together = ['special_type', 'year']

    def __str__(self):

        return f"{self.special_type.name}: {self.all_people}"