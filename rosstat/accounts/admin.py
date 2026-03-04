from django.contrib import admin
# Для управления профилями в админ панели
from .models import Profile
admin.site.register(Profile)

