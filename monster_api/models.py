from django.db import models

# Create your models here.
class User(models.Model):
    user_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    role = models.CharField(max_length=100)

    def __str__(self):
        return self.user_name
    

class Shelter(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class Pet(models.Model):
    name = models.CharField(max_length=100)
    species = models.CharField(max_length=100)
    breed = models.CharField(max_length=100)
    age = models.CharField(max_length=100)
    description = models.TextField()
    adoption_status = models.CharField(max_length=100)
        
    model_filename = models.CharField(max_length=100, blank=True, null=True)
    model_state = models.JSONField(default=dict, blank=True, null=True) # position, rotation, scale
    
    shelter_id = models.ForeignKey(Shelter, on_delete=models.CASCADE, related_name='pets') 
    
    

    def __str__(self):
        return self.name
    
class AdoptionApplication(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='applications')
    pet_id = models.ForeignKey(Pet, on_delete=models.CASCADE, related_name='applications')    
    application_status = models.CharField(max_length=100)
    application_details = models.CharField(max_length=100)

    def __str__(self):
        return str(self.id)
    

    

    

    
