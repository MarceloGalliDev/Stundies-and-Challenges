import { ReactNode } from 'react';//usado para importar arquivos HTML .JSX ou .TSX
import cx from 'classnames';//pacote npm para simplificar tamanho de comandos 
import './styles.scss';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighLighted?: boolean;
}

export function Question({
  content,
  author,
  isAnswered,
  isHighLighted,
  children,
}: QuestionProps) {
  return (
    <div
      className={cx(
        'question',
        { answered: isAnswered },
        { highLighted: isHighLighted && !isAnswered },
      )}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>
          {children}
        </div>
      </footer>
    </div>
  )
}
//quando desestruturar um dado, não a necessidade de utilizar props.content por exemplo, extraio somente a informação que for utilizar

//usamos pacote 'npm install classnames', para reduzir comandos grandes em uma linha.