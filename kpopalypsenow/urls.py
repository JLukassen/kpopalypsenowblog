from django.contrib import admin

# blog/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BlogPostViewSet
from blog.views import BlogPostViewSet

router = DefaultRouter()
router.register(r'posts', BlogPostViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/blog/', include('blog.urls')),  # Include the blog app's URLs
    path('', include('blog.urls')),
]
