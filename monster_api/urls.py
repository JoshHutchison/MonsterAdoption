from django.urls import path, include
from rest_framework import routers

from .views import (
    UserViewSet,
    ShelterViewSet,
    PetViewSet,
    AdoptionApplicationViewSet,
)

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'shelters', ShelterViewSet)
router.register(r'pets', PetViewSet)
router.register(r'adoption-applications', AdoptionApplicationViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # Other URL patterns if any
]
