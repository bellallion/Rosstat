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
