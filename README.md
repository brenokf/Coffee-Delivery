# Coffee Delivery ☕🚚

> Projeto completo, responsivo e funcional de e-commerce de cafés, desenvolvido em React + TypeScript + Vite.

---

## Demonstração

![Demonstração do Coffee Delivery](src/assets/Demo/Video%20Screen1751761577535.gif)

---

## Descrição

O **Coffee Delivery** é uma aplicação web de delivery de cafés, com foco em experiência do usuário, responsividade e fluxo de compra realista. O usuário pode:
- Navegar por uma lista de cafés filtráveis por categoria
- Adicionar/remover cafés ao carrinho e ajustar quantidades
- Preencher um formulário de checkout com validação visual e autocomplete
- Selecionar método de pagamento
- Visualizar um resumo completo do pedido na tela de sucesso

---

## Funcionalidades
- **Responsividade total**: layout adaptado para mobile, tablet e desktop
- **Filtro de cafés** por categoria/tags
- **Carrinho dinâmico**: ajuste de quantidades, remoção e visualização do total
- **Formulário de checkout** com validação visual, autocomplete e feedback de erro
- **Seleção de método de pagamento** (dinheiro, cartão de crédito/débito)
- **Resumo do pedido**: endereço completo, produtos, método de pagamento e valores
- **Navegação protegida**: só avança para sucesso se todos os campos obrigatórios estiverem preenchidos

---

## Contexto Técnico e Arquitetura
- **React + TypeScript**: componentes funcionais, tipagem forte
- **Vite**: build rápido e moderno
- **Styled-components**: estilização com temas e media queries
- **React Hook Form + Zod**: gerenciamento e validação de formulários
- **Context API**: gerenciamento global do carrinho e informações do usuário
- **React Router DOM**: navegação SPA

### Estrutura de Pastas

```
src/
  App.tsx
  main.tsx
  Router.tsx
  assets/
    ...imagens e ícones...
  components/
    Header/
      index.tsx
      styles.ts
  contexts/
    Marketcontext.tsx
  layout/
    DefaultLayout/
      index.tsx
      styles.ts
  pages/
    Home/
      index.tsx
      styles.ts
      CoffeList/
        index.tsx
        styles.ts
      Intro/
        index.tsx
        styles.ts
    Checkout/
      index.tsx
      styles.ts
      CoffeCard/
        index.tsx
        styles.ts
      Frame/
        index.tsx
        styles.ts
    Success/
      index.tsx
      styles.ts
      OrderInfo/
        index.tsx
        styles.ts
  styles/
    global.ts
    themes/
      default.ts
```

---

## Rotas e Navegação
- `/` — Home: lista de cafés e filtro
- `/checkout` — Checkout: formulário, carrinho e seleção de pagamento
- `/success` — Sucesso: resumo completo do pedido

---

## Instalação e Uso

```bash
# Instale as dependências
npm install

# Rode o projeto em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

---

## Tecnologias Utilizadas
- React
- TypeScript
- Vite
- Styled-components
- React Hook Form
- Zod
- React Router DOM
- Phosphor React Icons

---

## Observações e Diferenciais
- 100% responsivo, UX refinada e acessível
- Validação visual e feedback imediato no checkout
- Fluxo de compra realista e seguro
- Código limpo, modular e fácil de manter
- Pronto para deploy em qualquer serviço estático

---

> Projeto desenvolvido por Breno Melo — 2025
