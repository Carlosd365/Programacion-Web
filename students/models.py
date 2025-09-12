from django.db import models


class Student(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField(unique=True)
    enrollment_date = models.DateField()

    def __str__(self):
        return f"{self.name} ({self.email})"


class Course(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField(blank=True)
    students = models.ManyToManyField(Student, related_name='courses', blank=True)

    def __str__(self):
        return self.title
