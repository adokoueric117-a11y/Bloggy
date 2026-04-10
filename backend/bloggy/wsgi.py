"""
WSGI config for bloggy project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/6.0/howto/deployment/wsgi/
"""

import os
import sys

# Chemin précis vers le dossier qui contient manage.py
path = '/home/smileypy/https://github.com/adokoueric117-a11y/Bloggy.git/backend'
if path not in sys.path:
    sys.path.append(path)

os.environ['DJANGO_SETTINGS_MODULE'] = 'bloggy.settings'

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bloggy.settings')

application = get_wsgi_application()
