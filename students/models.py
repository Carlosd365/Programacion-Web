from django.db import models


class Student(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField(unique=True)
    enrollment_date = models.DateField()

    def __str__(self):
        return f"{self.name} ({self.email})"


class Teacher(models.Model):
    name = models.CharField(max_length=120)
    department = models.CharField(max_length=120, blank=True)

    def __str__(self):
        return self.name


class Course(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField(blank=True)
    teacher = models.ForeignKey(
        Teacher, on_delete=models.SET_NULL, null=True, blank=True, related_name='courses'
    )
    students = models.ManyToManyField(Student, related_name='courses', blank=True)

    def __str__(self):
        return self.title


class Grade(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='grades')
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='grades')
    score = models.DecimalField(max_digits=5, decimal_places=2)  # e.g. 95.50
    date = models.DateField(auto_now_add=True)

    class Meta:
        unique_together = ('student', 'course', 'date')

    def __str__(self):
        return f"{self.student.name} - {self.course.title}: {self.score}"
