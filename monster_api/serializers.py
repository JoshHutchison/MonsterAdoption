from rest_framework import serializers
from .models import User, Shelter, Pet, AdoptionApplication

class UserSerializer(serializers.HyperlinkedModelSerializer):    
    applications = serializers.HyperlinkedRelatedField(
        view_name='adoptionapplication-detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = User
        fields = ('user_name', 'email', 'password', 'role', 'applications')

class ShelterSerializer(serializers.HyperlinkedModelSerializer):
    pets = serializers.PrimaryKeyRelatedField(
        many=True,
        read_only=True
    )

    class Meta:
        model = Shelter
        fields = ('name', 'address', 'phone_number', 'pets')

class PetSerializer(serializers.HyperlinkedModelSerializer):
    shelter = ShelterSerializer(
        read_only=True
    )

    class Meta:
        model = Pet
        fields = ('name', 'species', 'breed', 'age', 'description', 'adoption_status', 'model_filename', 'model_state', 'shelter')

class AdoptionApplicationSerializer(serializers.HyperlinkedModelSerializer):
    user = UserSerializer(
        read_only=True
    )

    pet = PetSerializer(
        read_only=True
    )

    class Meta:
        model = AdoptionApplication
        fields = ('id', 'user', 'pet', 'application_status', 'application_details')
