# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'Статистика России'
copyright = '2026, Кононова А.А., Кузнецова М.С.'
author = 'Кононова А.А., Кузнецова М.С.'
release = '1.0'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    'sphinx.ext.autodoc',      # автодокументация из docstring
    'sphinx.ext.viewcode',     # ссылки на исходный код
    'sphinx.ext.napoleon',     # поддержка Google/NumPy стиля docstring
    'sphinx.ext.todo',         # поддержка TODO
]

templates_path = ['_templates']
exclude_patterns = []


language = 'ru'

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'alabaster'
html_static_path = ['_static']

import sys
import os
import django

# Путь к папке с manage.py (на два уровня выше docs/source/)
sys.path.insert(0, os.path.abspath('../..'))


os.environ['DJANGO_SETTINGS_MODULE'] = 'rosstat.settings'

# Инициализация Django
django.setup()