# Generated by Django 3.1 on 2021-01-14 12:24

from django.db import migrations


def add_permissions(apps, schema_editor):
    """
    Add permissions for Aoi model.
    :param apps:
    :param schema_editor:
    :return:
    """
    permission = apps.get_model("auth", "Permission")
    content_type = apps.get_model("contenttypes", "ContentType")
    
    model_def = apps.get_model("aoi", "Aoi")
    
    # Content type objects
    model_content_type = content_type.objects.get_for_model(model_def)
    
    db_alias = schema_editor.connection.alias
    
    permissions_data = [
        {"codename": "add_another_user_aoi", "name": "Can add Aoi for another user",
         "content_type": model_content_type},
    ]
    
    permission_list = []
    for permission_data in permissions_data:
        if not permission.objects.filter(codename=permission_data["codename"]).exists():
            permission_list.append(permission(codename=permission_data["codename"], name=permission_data["name"],
                                              content_type=permission_data["content_type"]))
    permission.objects.using(db_alias).bulk_create(permission_list)


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0006_add_notebook_perms_to_client_group'),
    ]

    operations = [
        migrations.RunPython(add_permissions),
    ]