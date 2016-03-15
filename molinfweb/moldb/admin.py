from django.contrib import admin

# Register your models here.

from moldb.models import Structure


@admin.register(Structure)
class Structure(admin.ModelAdmin):
    list_display = ('mol', 'mol_weight')
