# Generated by Django 3.1 on 2022-11-21 17:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aoi', '0021_jupyternotebook_period_requaired'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jupyternotebook',
            name='period_required',
            field=models.BooleanField(default=True, verbose_name='Start and end dates are required'),
        ),
    ]