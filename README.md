## POC-ANIME

# Leonardo Luppi Vanni - RA: 10436603
# Pedro Henrique Gonçalves - RA: 

## Tecnologias

- **React** e **Next.js** para construir a interface.
- **CSS Modules** para estilização.
- **Jikan API** para buscar dados dos animes.

## Como Rodar

1. **Clone o repositório**:
    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd <diretorio_do_projeto>
    ```

2. **Instale as dependências**:
    ```bash
    npm install
    ```

3. **Inicie o servidor**:
    ```bash
    npm run dev
    ```

4. **Abra o navegador** e acesse:
    ```
    http://localhost:3000
    ```

## Estrutura do Projeto

```
meu-projeto-animes/
├── components/
│   └── AnimeCard.jsx        # Exibe os cards dos animes
├── pages/
│   └── index.js             # Página inicial
└── styles/
    └── page.module.css      # Estilos
```

## API Utilizada

- **Jikan API**: Busca os animes da temporada de **primavera de 2021**.
  ```bash
  GET https://api.jikan.moe/v4/seasons/2021/spring?sfw
  ```
