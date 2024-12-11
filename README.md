
# Sistema de Almoxarifado com Django e React

Este é um sistema de almoxarifado desenvolvido com **Django** no backend e **React** no frontend. Ele permite o gerenciamento de produtos no estoque, incluindo funcionalidades de login, registro de usuários e autenticação via JWT. O projeto utiliza **MySQL** como banco de dados e é estilizado com **DaisyUI** e **TailwindCSS**.

---

## 📋 Funcionalidades

- **Login e Registro de Usuários:**
  - Registro de novos usuários com validação de senha.
  - Login com autenticação JWT.
- **Gestão de Produtos:**
  - CRUD (Create, Read, Update, Delete) para produtos.
  - Atributos: Nome, Código, Preço.
- **Frontend Estilizado:**
  - Interface criada com DaisyUI e TailwindCSS.

---

## 🛠️ Tecnologias Utilizadas

### Backend
- **Django**: Framework web para o backend.
- **Django REST Framework (DRF)**: Criação de APIs RESTful.
- **MySQL**: Banco de dados relacional.
- **django-cors-headers**: Configuração de CORS.

### Frontend
- **React**: Biblioteca para construção da interface.
- **Vite**: Ferramenta para desenvolvimento e build do frontend.
- **TailwindCSS** e **DaisyUI**: Estilização.

---

## 🚀 Configuração do Ambiente

Siga os passos abaixo para configurar e rodar o projeto.

---

### 🔧 Backend (Django)

#### 1. Clonar o Repositório
No terminal (Git Bash), clone o repositório:

```bash
git clone https://github.com/SeuUsuario/almoxarifado-django-react.git
cd almoxarifado-django-react/backend
```

#### 2. Instalar Dependências
Instale as dependências listadas no arquivo `requirements.txt`:

```bash
pip install -r requirements.txt
```

#### 3. Configurar o Banco de Dados
Certifique-se de que o **MySQL** está rodando na máquina e crie um banco de dados chamado `almoxarifado`. Você pode usar o seguinte comando no MySQL:

```sql
CREATE DATABASE almoxarifado;
```

Atualize as configurações de banco de dados no arquivo `backend/almoxarifado/settings.py`:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'almoxarifado',
        'USER': 'seu_usuario_mysql',
        'PASSWORD': 'sua_senha_mysql',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

#### 4. Aplicar as Migrações
Execute as migrações para criar as tabelas no banco de dados:

```bash
python manage.py makemigrations
python manage.py migrate
```

#### 5. Criar um Superusuário
Crie um superusuário para acessar o painel administrativo:

```bash
python manage.py createsuperuser
```

#### 6. Rodar o Servidor
Inicie o servidor local do Django:

```bash
python manage.py runserver
```

A API estará disponível em `http://localhost:8000`.

---

### 🌐 Frontend (React)

#### 1. Instalar Dependências
Entre na pasta do frontend e instale as dependências:

```bash
cd ../frontend
npm install
```

#### 2. Configurar o Ambiente
Crie um arquivo `.env` na pasta `frontend` para configurar o backend URL:

```bash
VITE_API_URL=http://localhost:8000/api
```

#### 3. Rodar o Servidor de Desenvolvimento
Inicie o servidor local do Vite:

```bash
npm run dev
```

O frontend estará disponível em `http://localhost:5173`.

---

## 🖥️ Uso

1. Acesse `http://localhost:5173` no navegador.
2. Faça o registro de um novo usuário ou use o superusuário criado.
3. Após o login, acesse a página de produtos para gerenciar o estoque.

---

## 🧪 Testes

### Backend
Para executar os testes automatizados no backend, use:

```bash
python manage.py test
```

### Frontend
O React não tem testes configurados por padrão neste projeto. No entanto, você pode configurar bibliotecas como Jest e React Testing Library para adicionar testes.

---

## 🗂️ Estrutura do Projeto

```
almoxarifado-django-react/
├── backend/
│   ├── api/
│   │   ├── migrations/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   ├── almoxarifado/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   ├── manage.py
│   ├── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   ├── public/
│   ├── .env
│   ├── vite.config.js
│   ├── package.json
├── README.md
```

---

## 🛡️ Segurança

- Use variáveis de ambiente (`.env`) para armazenar informações sensíveis, como credenciais do banco de dados e chaves secretas.
- Para produção, desative o modo `DEBUG` no Django e configure corretamente o `ALLOWED_HOSTS`.

---

## 📖 Recursos Úteis

- [Documentação do Django](https://docs.djangoproject.com)
- [Documentação do Django REST Framework](https://www.django-rest-framework.org/)
- [Documentação do React](https://reactjs.org/)
- [Documentação do Vite](https://vitejs.dev/)
- [Documentação do TailwindCSS](https://tailwindcss.com/)
- [Documentação do DaisyUI](https://daisyui.com/)

---

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests no repositório.

---

## 📜 Licença

Este projeto é de uso livre. Você pode modificar e usar conforme sua necessidade.

---

