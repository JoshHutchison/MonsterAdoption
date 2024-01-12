pipenv install django psycopg2-binary djangorestframework
pipenv run django-admin startproject ${1}_django .
django-admin startapp ${1}

# add the project name to the /${1}_django/settings installed Apps
# also add rest_framework to installed apps
# also add 'corsheaders'

#Create a settings.sql with:
# CREATE DATABASE ${1};
# CREATE USER ${1}_user WITH PASSWORD '${1}';
# GRANT ALL PRIVILEGES ON DATABASE ${1} TO ${1}user;
# 

psql -f settings.sql

#add the database credentials to the settings file 
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': '${1}',
#         'USER': '${1}_user',
#         'PASSWORD': '${}',
#         'HOST': 'localhost'
#     }
# }
# REST_FRAMEWORK = {
#     # Use Django's standard `django.contrib.auth` permissions,
#     # or allow read-only access for unauthenticated users.
#     'DEFAULT_PERMISSION_CLASSES': [
#         'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly'
#     ] # alternate permissions:  'rest_framework.permissions.AllowAny',
# }

##Crete models

python3 manage.py makemigrations
python3 manage.py migrate 

python3 manage.py createsuperuser

#need input

# add to your ${1}/admin.py
# from django.contrib import admin
# from .models import Team, Player

# # Register your models here.
# admin.site.register(Team)
# admin.site.register(Player)

## log in and add data

## add the app to the /urls.py
# ${1}_django/urls.py
# from django.conf.urls import include
# from django.urls import path
# from django.contrib import admin

# urlpatterns = [
#     path('admin', admin.site.urls),
#     path('', include('tunr.urls')),
#     path('api-auth', include('rest_framework.urls', namespace='rest_framework'))
#     ]

##Create the ${1}/serializers.py

## Create ${1}/views.py

## write the ${1}/urls.py

pipenv install django-cors-headers