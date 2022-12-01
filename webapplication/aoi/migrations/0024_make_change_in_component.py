# Generated by Django 3.1 on 2022-11-17 18:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aoi', '0023_rename_notebook_to_component'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='component',
            name='options',
        ),
        migrations.AddField(
            model_name='component',
            name='command',
            field=models.CharField(blank=True, max_length=400, null=True, verbose_name='Command'),
        ),
        migrations.AddField(
            model_name='component',
            name='sentinel_google_api_key_required',
            field=models.BooleanField(default=False, verbose_name='Sentinel Google API key is required'),
        ),
        migrations.AddField(
            model_name='component',
            name='planet_api_key_required',
            field=models.BooleanField(default=False, verbose_name='Planet API key is required'),
        ),
        migrations.AlterField(
            model_name='component',
            name='path',
            field=models.CharField(blank=True, max_length=200, null=True, unique=True, verbose_name='Path to a notebook'),
        ),
        migrations.AlterField(
            model_name='component',
            name='kernel_name',
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Kernel name'),
        ),
        migrations.RenameField(
            model_name='component',
            old_name='path',
            new_name='notebook_path'
        ),
        migrations.AlterField(
            model_name='component',
            name='name',
            field=models.CharField(max_length=200, unique=True, verbose_name='Component name'),
        ),
        migrations.AlterField(
            model_name='component',
            name='run_on_gpu',
            field=models.BooleanField(default=True, verbose_name='Whether GPU is needed for a component to run'),
        ),
    ]