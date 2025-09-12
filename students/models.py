from django.db import models


class Student(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField(unique=True)
    enrollment_date = models.DateField()

    def __str__(self):
        return f"{self.name} ({self.email})"
