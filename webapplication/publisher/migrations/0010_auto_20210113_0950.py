# Generated by Django 3.1 on 2021-01-13 09:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('publisher', '0009_acl'),
    ]

    operations = [
        migrations.AlterField(
            model_name='result',
            name='description',
            field=models.TextField(blank=True, default='', verbose_name='Layer description'),
        ),
        migrations.AlterField(
            model_name='result',
            name='name',
            field=models.CharField(blank=True, default='', max_length=200, verbose_name='Layer name'),
        ),
    ]