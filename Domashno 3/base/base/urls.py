from django.contrib import admin
from django.urls import path, include

# urlpatterns defines the routes of the application
# each url corresponds to a certain view or application depending on how it is configured
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('cardealership.urls')),
    path('', include('frontend.urls')),
]
