# Generated by Django 4.0 on 2021-12-12 03:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('demo', '0002_book_number'),
    ]

    operations = [
        migrations.CreateModel(
            name='Character',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='demo.book')),
            ],
        ),
    ]
