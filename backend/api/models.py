from django.db import models
from django.contrib.auth.models import User

class Produto(models.Model):
    nome = models.CharField(max_length=100)
    codigo = models.CharField(max_length=50, unique=True)
    preco = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.nome

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    contato = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.user.username} - {self.contato}'
