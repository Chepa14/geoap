# Generated by Django 3.1 on 2023-01-24 13:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0014_user_planet_api_key'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='notification_email',
            field=models.EmailField(null=True, blank=True, verbose_name="Email to receive notifications about available results"),
        ),
        migrations.AddField(
            model_name='user',
            name='notify',
            field=models.BooleanField(default=False, verbose_name="Always notify of a request's result"),
        ),
    ]
