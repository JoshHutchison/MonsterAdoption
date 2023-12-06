from django.contrib import admin
from .models import User, Pet, AdoptionApplication, Shelter

# Register your models here.
admin.site.register(User)
admin.site.register(Pet)
admin.site.register(AdoptionApplication)
admin.site.register(Shelter)
