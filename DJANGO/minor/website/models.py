from django.db import models



# Create your models here.
class Meal(models.Model):
    Meal_Id = models.TextField(max_length=500)
    Name = models.TextField(max_length=500)
    Catagory=models.TextField(max_length=500)
    description = models.TextField(max_length=500)
    Veg_Non=models.TextField(max_length=500)
    Nutrient = models.TextField(max_length=500)
    Disease = models.TextField(max_length=500)
    Diet = models.TextField(max_length=500)
    Price = models.TextField(max_length=500)

    
    def __str__(self):
        return self.name

class Meall(models.Model):
    Meal_Id = models.TextField(max_length=500)
    Name = models.TextField(max_length=500)
    Catagory=models.TextField(max_length=500)
    description = models.TextField(max_length=500)
    Veg_Non=models.TextField(max_length=500)
    Nutrient = models.TextField(max_length=500)
    Disease = models.TextField(max_length=500)
    Diet = models.TextField(max_length=500)
    Price = models.TextField(max_length=500)

    
    def __str__(self):
        return self.name

class Contact(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    number=models.BigIntegerField()
    message = models.TextField(max_length=500)
    timestamp=models.DateTimeField(auto_now_add=True,blank=True)
    
    def __str__(self):
        return self.name
    
class Profile(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    number=models.BigIntegerField(primary_key=True)
    gender = models.CharField(max_length=10)
    age=models.IntegerField()
    blood = models.CharField(max_length=10)
    weight = models.IntegerField()
    height = models.CharField(max_length=10)
    favfood = models.CharField(max_length=100)
    foodtype = models.CharField(max_length=15)
    diet = models.TextField(max_length=1500)
    nutrient = models.TextField(max_length=1500)
    disease = models.TextField(max_length=1500)
    cuisines = models.TextField(max_length=1500)
    medicalhistory = models.TextField(max_length=1500)
    image=models.ImageField(upload_to='website/images',default=r"C:\Users\MMG\Desktop\NBMRS\minor\media\website\images\avtar.png")
    second_time = models.BooleanField(default="False") 
    
    def __str__(self):
        return self.name

class Guideline(models.Model):
	name = models.CharField(max_length=50)
	description = models.TextField(max_length=1500)


	def __str__(self):
		return self.ename


