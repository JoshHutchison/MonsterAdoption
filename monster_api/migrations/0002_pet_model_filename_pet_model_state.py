# Generated by Django 5.0 on 2023-12-04 20:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('monster_api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='pet',
            name='model_filename',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='pet',
            name='model_state',
            field=models.JSONField(blank=True, default=dict, null=True),
        ),
    ]
