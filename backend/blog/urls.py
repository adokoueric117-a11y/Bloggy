from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ArticlesViewset

router  = DefaultRouter()
router.register(r'articles', ArticlesViewset)

urlpatterns = [
    path('', include(router.urls))
]
