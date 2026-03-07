from django.db import models

class RegionsRF(models.Model):
    """Справочник регионов России"""
    name = models.CharField(max_length=255, unique=True, verbose_name="Название региона")
    code = models.SmallIntegerField(verbose_name="Код региона")
    
    class Meta:
        verbose_name = "Регион"
        verbose_name_plural = "Регионы"
        ordering = ['name']
    
    def __str__(self):
        return self.name

class LaborForceRegion(models.Model):
    """Модель данных о численности рабочей силы по регионам РФ  """
    region = models.ForeignKey(
        RegionsRF,
        on_delete=models.CASCADE,
        related_name='labor_force',
        verbose_name="Регион"
    )
    year = models.SmallIntegerField(verbose_name="год")
    value = models.FloatField(verbose_name="Численность рабочей силы")

    class Meta:
        verbose_name = "Численность рабочей силы по субъектам Российской Федерации"
        verbose_name_plural = "Численность рабочей силы по субъектам Российской Федерации"

    def __str__(self):

        return f"{self.regionrf.name}-{self.year} : {self.value}"
