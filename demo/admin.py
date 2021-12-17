from django.contrib import admin
from .models import Book, BookNumber, Character, Author

# Register your models here.

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    # fields = ['title', 'description']
    list_display = ['title', 'description']
    list_filter = ['published', 'price']
    search_fields = ['title', 'description']

# class BookNumberAdmin(admin.ModelAdmin):
#     # fields = ['title', 'description']
#     list_display = ['title', 'description']
#     list_filter = ['published', 'price']
#     search_fields = ['title', 'description']

admin.site.register(BookNumber)
admin.site.register(Character)
admin.site.register(Author)