>> SPA <<
Single Page Application
- Back-End e Front-End trabalham em paralelo, onde a requisição feita em JSON pelo Node.js pelo Back, direcionada ao Front que será programada em React e React Native, somente com as informações necessárias e converte em HTML/CSS/JS ao User final.


>> REACT <<
- Instalando pacotes NPM.
  - npm create vite@latest = para criar projeto com react e TypeScript.
  - vite@latest = JS mais avançado, para conseguir que nossa aplicação fique pareada com todos navegadores e versões.
  - npm install = para instalar as dependências.
  - npm install phosphor-react = biblioteca para imgs diretamente importada pelo react.
    - <h1><ChatTeardropDots size="200" weight="duotone"/></h1>.
    - necessário import, podendo ser desestruturado ou não: import { ChatTeardropDots } from 'phosphor-react'.
  - npm install @headlessui/react = pacote para acessibilidade feito pela TailWind 

- o React faz com que não precisamos criar o HTML diretamente, fazemos isso diretamente com JS.
- <React.StrictMode> = Para evitar erros comuns em React, ele vem ativado o modo Strict.

- O React quando utilizando um array com variáveis indicando a mudança de Estado, para fazer o uso da mudança tem que ser via função

- condicional dentro de um HTML = { isWidgetOpen ? <p>Hello world</p> : null }.
- condicional sendo reduzida para React = { isWidgetOpen && <p>Hello world</p> }, ele so executa o Hello world se for verdadeiro a condicional, somente quando não tem ELSE.

- bibliotecas para acessibilidade = reakit / radix-ui / headlessui.

- para salvar informações no react, a melhor forma é construir via useState

- const [feedbackTypes, setFeedbackTypes] = useState(null), neste comando temos um useState, com feedbackTypes sendo a variável que vai receber as informações e o setFeedbackTypes é a função que vai fazer alterações desses dados.

- onClick={() => setFeedbackTypes(key)}, este é o formato para acessar a função somente quando ocorrer o click, é necessário a inclusão de uma arrow function.

- Ctrl + . = atalho para fazer import

- export function FeedbackTypeStep(props: FeedbackTypeStepProps), posso fazer assim ou desestruturar o props, que ficaria assim, export function FeedbackTypeStep({onFeedbackTypeChanged}: FeedbackTypeStepProps).

- interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void
} = para importar propriedades de outros arquivos.

- todo conteúdo de html tende a ser envolvido de uma div, porém se perde a estilização, com isso usamos <></>, para fragmentar a tag trazendo com o seu style mas sem mostrar uma nova tag no HTML.

- onFeedbackRestartRequested: () => void; = a questão do void no final, significa que não tem retorno

- const canvas = await html2canvas(document.querySelector('html')!) = o ! no final é para forçar ao canvas dizendo que não vai dar nulo nunca, pois a tag HTML sempre vai ter na página.

- style={{
    backgroundImage: `url(${screenshot})`
  }} = aqui usamos duas vezes a {}, para indicar que é um objeto e outra para indicar que é do JavaScript

- onChange={event => setComment(event.target.value)} = onChange é quando o valor do conteúdo for alterado, ele captura o evento e seguindo com arrow function (event.target.value) vai direcionar o text ou conteúdo para dentro do setComment

>Conceito
- Componente = Função que retorna um HTML
  - Primeira letra maiúscula na função, e o mesmo nome do arquivo (é um padrão, mas não necessário), a primeira letra da função sempre com    maiúscula para evitar que a função seja confundida com comandos, assim pode haver conflitos entre comandos e funções.
  - Para vários componentes é necessário envolver os componentes em TAG HTML, por exemplo uma DIV, o react sempre espera um único elemento e dentro dele pode haver quantos componentes desejar.
  - Atributos do HTML, no React é propriedade
  - Toda importação de arquivo, quando utilizado o React, sempre fazer pelo JS

- Estado = Quando necessário a mudança de alguma coisa derivada de uma ação, usa-se o conceito de Estado do React
  - Estado é uma variável, fica ele fica observando e toda vez que essa variável tiver seu valor alterado, ele recria a interface com o o novo valor
  - useState sempre retorna um vetor, duas informações [valor do estado, função para alterar o valor

  const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de uma exclamação envolta de um balão de ideias',
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma interrogação envolta de um balão de ideias',
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um check envolta de um balão de ideias'
    }
  },
}

Object.entries(feedbackTypes) => [
  ['BUG', {conteúdo apos o BUG}],
  ['IDEA', {conteúdo apos o IDEA}],
  ['OTHER', {conteúdo apos o OTHER}]
]
- Ele retorna um array com arrays dentro, e dentro deles possui duas posições, a chave do objeto e depois o conteúdo

      <div className=" flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map((item) => {
          item[1]
          return ();
        })}
      </div>

- Por exemplo acima temos a função .map que percorre todo array e retorna alguma coisa dentro dele, no caso aqui ele retorna um array que tem vetores de duas posições que são a chave e o conteúdo, no caso está pegando o conteúdo pelo item[1].

- key={key}, quando renderizamos vários properties em tela, temos que fazer uma identificação única dos objetos setados, para o React poder reconhecer qual o objeto correto para fazer a ação, podendo ser um CPF, um ID, algo único que define o objeto.


>> NODE.JS <<
- sempre verificar se a porta está em uso
- cd [nome da pasta] = para acessar pastas
- npm create vite@latest
- npm install
- npm install -D tailwindcss
- npm install html2canvas para captura de screenshot da tela de usuário


>> TSX(TypeScript) <<
- TS + JSX = TSX, é o JS com tipagem estática (JSX = JS + XML)
- Por padrão o TS não permite incluir propriedades que não são esperados pela tag
- Em Ts as propriedades vem por parâmetro dentro de uma função, que pode ser acessado ex: function Button(props) {}, o (props) puxa as propriedades, podendo fazer desestruturação, pois o props é um objeto, ex: function Button({ text })  {}
- necessário informar sua interface, pelo motivo do uso do TYPESCRIPT
EX - 1:
interface ButtonProps {
  text: string;
}

function Button(props: ButtonProps) {
  return <button>{props.text}</button>//nesse formato
}
function App() {
  return (
    <div>
      <Button text="Enviar" />
      <Button text="Ok" />
    </div>
  )
}
export default App
-------------------------------------------------------
EX - 2:
interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return <button>{props.text ?? 'Default'}</button>//nesse formato
}
function App() {
  return (
    <div>
      <Button text="Enviar" />
      <Button text="Ok" />
      <Button />
    </div>
  )
}
export default App

- Neste caso, o uso do ? é tido quando há um Button sem a propriedade text, ele adiciona um padrão 'Default' nele


>> TailwindCSS <<
- Ferramenta de utilitários CSS
- npm install -D tailwindcss postcss autoprefixer
- npm install -D tailwindcss = para instalação do pacote
- npx tailwindcss init = criando config
- npm install -D @tailwindcss/forms = plugin form
- npm install --save-dev tailwind-scrollbar = para estilizar barra de rolagem
- Substituir no tailwind.config a linha do content por = content: ["./src/**/*.tsx"], para usar o arquivo .tsx
- TW sempre é utilizado com classes, no React é className=""
- Posso também colocar no arquivo no .CSS caso desejar, 
EX 
.button {
  @apply bg-violet-500 px-4 h-10 rounded;
} - La no arquivo no className = "button"

- Posso usar a cor que eu deseja também, no caso bg-[#efefef], so incluir um []

- quando usar a propriedade group, significa que toda propriedade para trás faz parte do group

- md:w-auto = é a media Queries do CSS


>> OUTRAS INFO<<
- sempre que for usar um array no React, usar CamelCase e também usar o nome para identificar o caso, por exemplo isWidgetOpen, indicando o botão do Widget
- pixel perfect - importante para o Front-end



Feito com ❤ pela