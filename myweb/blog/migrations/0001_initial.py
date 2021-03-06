# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-29 04:49
from __future__ import unicode_literals

from django.conf import settings
import django.contrib.auth.models
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0008_alter_user_username_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('first_name', models.CharField(blank=True, max_length=30, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=30, verbose_name='last name')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('email', models.CharField(max_length=150, unique=True, verbose_name='\u90ae\u7bb1')),
                ('username', models.CharField(max_length=128, unique=True, verbose_name='\u7528\u6237\u540d')),
                ('password_hash', models.CharField(max_length=128, verbose_name='\u5bc6\u7801')),
                ('about_me', models.CharField(max_length=800, verbose_name='\u5173\u4e8e')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'ordering': ['-id'],
                'verbose_name': '\u7528\u6237',
                'verbose_name_plural': '\u7528\u6237',
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=500, verbose_name='\u6587\u7ae0\u6807\u9898')),
                ('desc', models.CharField(max_length=200, verbose_name='\u6587\u7ae0\u6458\u8981')),
                ('img_link', models.CharField(max_length=800, verbose_name='\u5c01\u9762\u56fe\u7247\u94fe\u63a5')),
                ('music_link', models.CharField(max_length=1000, verbose_name='\u97f3\u4e50\u94fe\u63a5')),
                ('body', models.CharField(max_length=5000000, verbose_name='\u6587\u7ae0\u5185\u5bb9')),
                ('body_html', models.CharField(max_length=5000000, verbose_name='\u6587\u7ae0html')),
                ('click_count', models.IntegerField(default=0, verbose_name='\u70b9\u51fb\u6b21\u6570')),
                ('date_publish', models.DateTimeField(auto_now_add=True, verbose_name='\u53d1\u5e03\u65f6\u95f4')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='\u7528\u6237')),
            ],
            options={
                'ordering': ['-date_publish'],
                'verbose_name': '\u6587\u7ae0',
                'verbose_name_plural': '\u6587\u7ae0',
            },
        ),
    ]
