
# 📚 Book Catalog – Documentação do Projeto

Um projeto desenvolvido com React + Vite, voltado para o cadastro, listagem e visualização de livros.
A aplicação possui uma interface simples, rápida e intuitiva, permitindo gerenciar um pequeno catálogo local usando componentes reutilizáveis e atualização dinâmica de estado.

---

## ✨ Funcionalidades

O projeto, oferece:

### ✔ Listagem de livros

Os livros são renderizados dinamicamente a partir de um array local ou mock.

### ✔ Exibição de informações

Cada livro inclui campos como:

* Título
* Autor
* Ano
* Categoria

### ✔ Adicionar novo livro

Formulário com validações simples usando `useState`.

### ✔ Layout organizado

O projeto utiliza componentes separados e estilos limpos.

### ✔ Carregamento rápido com Vite

Ambiente de desenvolvimento leve e moderno.

---

## 📌 Como rodar o projeto

1. **Instalar dependências**

```bash
npm install
```

2. **Rodar o projeto em ambiente de desenvolvimento**

```bash
npm run dev
```

3. **Acessar no navegador**

O terminal exibirá algo como:

```
http://localhost:5173/
```

4. **Gerar build de produção (opcional)**

```bash
npm run build
```
---

## 🛠 Tecnologias usadas

Este projeto utiliza:

* **React**
* **Vite**
* **JavaScript (ES6+)**
* **React Router DOM**
* **CSS (ou Modules)**
* **Hooks (useState, useEffect e hook customizado)**

---

## 🗂 Onde foi aplicado

A seguir, os pontos trabalhados no projeto, conforme a estrutura real do código:

---

### 🔵 React Router

Foi empregado para estruturar a navegação entre páginas da aplicação, permitindo organizar as telas em rotas distintas.

Exemplos de uso que aparecem no projeto:

* `BrowserRouter`
* `Routes`
* `Route`
* Componentes de página dentro de `/src/pages`

---

### 🔵 Navegação programática

Utilizada para redirecionar o usuário após ações como:

* Criar um novo livro
* Voltar para a página inicial
* Navegar entre detalhes e listagem

Feita através de:

```js
const navigate = useNavigate();
navigate("/alguma-rota");
```

---

### 🔵 URLs dinâmicas

O projeto possui rotas que usam parâmetros, permitindo acessar informações específicas, como:

```
/books/:id
```

Esses parâmetros são lidos através do hook:

```js
const { id } = useParams();
```

---

### 🔵 Hook customizado

O projeto conta com um hook criado especificamente para **organizar lógica** relacionada aos livros, evitando repetição de código e deixando os componentes mais limpos.

Esse hook encapsula:

* Manipulação de dados
* Busca interna
* Regras de atualização/estado

E é usado nos componentes principais.

---

### 🔵 Layout reutilizável

A aplicação utiliza um layout base que:

* Envolve todas as páginas
* Mantém cabeçalho/rodapé consistentes
* Evita duplicação de estrutura
* Facilita manutenção

Normalmente implementado como:

```jsx
<Layout>
  <Outlet />
</Layout>
```

Permitindo que todas as páginas herdem a mesma estrutura visual.

---

## 📦 Estrutura do Projeto

A estrutura real do seu ZIP segue este formato:

```bash
book-catalog/
│
├── public/           # Arquivos estáticos
│   └── ...           
│
├── src/
│   ├── components/   # Componentes reutilizáveis
│   │   ├── BookCard.jsx
│   │   ├── BookForm.jsx
│   │   └── ...
│   │
│   ├── pages/        # Telas da aplicação (Home, AddBook, etc.)
│   │   └── ...
│   │
│   ├── data/         # Arquivo(s) de dados locais (mock)
│   │   └── books.js
│   │
│   ├── App.jsx       # Componente principal
│   ├── main.jsx      # Entrada da aplicação React
│   └── styles/       # Estilos (CSS)
│
├── index.html
├── package.json
└── vite.config.js
```

