from rest_framework import serializers
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from .models import Produto, UserProfile

class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produto
        fields = ['id', 'nome', 'codigo', 'preco']

class RegisterSerializer(serializers.Serializer):
    username = serializers.CharField(required=True, max_length=150)
    email = serializers.EmailField(required=True)
    contato = serializers.CharField(required=True, max_length=100)
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})

    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise ValidationError("Este nome de usuário já existe.")
        return value

    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise ValidationError("Já existe um usuário com este email.")
        return value

    def validate_password(self, value):
        if len(value) < 8:
            raise ValidationError("A senha deve ter pelo menos 8 caracteres.")
        return value

    def create(self, validated_data):
        username = validated_data['username']
        email = validated_data['email']
        password = validated_data['password']
        contato = validated_data['contato']

        user = User(
            username=username,
            email=email
        )
        user.set_password(password)
        user.save()
        
        profile = UserProfile.objects.create(user=user, contato=contato)
        
        user.profile.contato = contato
        user.profile.save()
        return user
