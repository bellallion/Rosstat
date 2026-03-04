from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.dispatch import receiver
from .models import Profile

@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    """Создает профиль при создании пользователя"""
    if created:
        Profile.objects.create(user=instance)
    else:
        # Если профиль уже есть, но нужно обновить
        instance.profile.save()

@receiver(post_save, sender=User)
def save_profile(sender, instance, **kwargs):
    """Сохраняет профиль при сохранении пользователя"""
    instance.profile.save()