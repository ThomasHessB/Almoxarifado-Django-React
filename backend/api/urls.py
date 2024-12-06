from django.urls import path, include
from rest_framework import routers
from .views import ProdutoViewSet, CustomTokenObtainPairView, RegisterView

router = routers.DefaultRouter()
router.register(r'produtos', ProdutoViewSet, basename='produto')

urlpatterns = [
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', RegisterView.as_view(), name='register'),
    path('', include(router.urls)),
]
