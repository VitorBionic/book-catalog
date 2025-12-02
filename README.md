
# 📚 *Book Catalog – Documentação do Projeto*

João Praxedes - 01710907
Larissa Angelote - 01712747
Thamyres Beatriz - 01594672
Vitor Queiroz Guerra -  01718322
Kaynan Freitas - 01702989

Um projeto desenvolvido com *React + Vite*, voltado para o cadastro, listagem e visualização de livros.
A aplicação possui uma interface simples, rápida e intuitiva, permitindo gerenciar um pequeno catálogo local usando componentes reutilizáveis e atualização dinâmica de estado.

---

## ✨ *Funcionalidades*

O projeto oferece:

### ✔ *Listagem de livros*

Os livros são renderizados dinamicamente a partir de um array local de um arquivo mockado.

### ✔ *Exibição de informações*

Cada livro inclui campos como:

* Título
* Autor
* Ano
* Categoria

### ✔ *Adicionar novo livro*

Formulário com validações simples usando useState.

### ✔ *Layout organizado*

O projeto utiliza componentes separados e estilos limpos.

---

## 📌 *Como rodar o projeto*

### *1. Instalar dependências*

bash
npm install


### *2. Rodar o projeto*

bash
npm run dev


### *3. Acessar no navegador*

Acesse o link do terminal:


http://localhost:5173/


---

## 🛠 *Tecnologias usadas*

* *React*
* *Vite*
* *JavaScript (ES6+)*
* *React Router DOM*
* *CSS / Modules*
* *Hooks (useState, useEffect, hook customizado)*

---

## 🗂 *Onde foi aplicado*

### 🔵 *React Router*

Utilizado para estruturar a navegação da SPA, com:

* BrowserRouter
* Routes
* Route
* Páginas organizadas em /src/pages

---

### 🔵 *Navegação programática*

Usada para redirecionar o usuário após ações como:

* Ver detalhes
* Voltar telas
* Navegar entre páginas

Exemplo real do projeto:

js
const navigate = useNavigate();
navigate("/alguma-rota");
navigate(-1)


---

### 🔵 *URLs dinâmicas*

A aplicação utiliza parâmetros para acessar detalhes específicos:


/books/:id


Lidos com:

js
const { id } = useParams();


---

### 🔵 *Hook customizado*

O projeto utiliza um hook próprio para:

* Gerenciar dados
* Salvar busca/localStorage
* Evitar repetição de lógica
* Organizar o estado

Deixando os componentes mais limpos e reutilizáveis.

---

### 🔵 *Layout reutilizável*

A aplicação usa um layout-base que mantém padrão entre as páginas:

Utilizando 
Route (MainLayout, contendo Header, Content e Footer)
  Outlet (Para exibir no content as rotas filhas | Home, Catalog e BookDetails )


Isso garante:

* Cabeçalho fixo
* Rodapé consistente
* Estrutura compartilhada
* Menos repetição e mais organização



