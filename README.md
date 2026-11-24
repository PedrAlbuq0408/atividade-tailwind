# Atividade Tailwind CSS - Biblioteca de Componentes

Projeto React com Vite e Tailwind CSS, com os componentes Button, Badge, Input, Card e Alert, que mudam de aparência através da prop `variant`.

## Reflexão

**Quais as vantagens e desvantagens de usar Tailwind CSS em vez de arquivos CSS tradicionais na componentização do React?**

### Vantagens

- O estilo fica dentro do próprio componente, sem precisar abrir e manter arquivos CSS separados.
- É rápido de estilizar, porque as classes já vêm prontas (ex.: `bg-blue-600`, `rounded`).
- Combina bem com props: dá pra trocar a cor de um componente só mudando a classe pela `variant`.

### Desvantagens

- O `className` pode ficar grande e poluído quando o componente tem muito estilo.
- Tem uma curva de aprendizado, pois é preciso conhecer os nomes das classes.
- O JSX mistura estrutura e estilo, o que pode atrapalhar a leitura.