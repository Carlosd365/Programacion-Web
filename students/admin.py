from django.contrib import admin
from .models import Student, Teacher, Course, Grade


@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'enrollment_date')
    search_fields = ('name', 'email')
    list_filter = ('enrollment_date',)


@admin.register(Teacher)
class TeacherAdmin(admin.ModelAdmin):
    list_display = ('name', 'department')
    search_fields = ('name', 'department')


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'teacher')
    search_fields = ('title',)
    list_filter = ('teacher',)
    filter_horizontal = ('students',)


@admin.register(Grade)
class GradeAdmin(admin.ModelAdmin):
    list_display = ('student', 'course', 'score', 'date')
    search_fields = ('student__name', 'course__title')
    list_filter = ('date', 'course')
