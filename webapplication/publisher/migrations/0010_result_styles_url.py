# Generated by Django 3.1 on 2020-12-27 15:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('publisher', '0009_acl'),
    ]

    operations = [
        migrations.AddField(
            model_name='result',
            name='styles_url',
            field=models.URLField(max_length=400, null=True, verbose_name='Styles URL'),
        ),
    ]
