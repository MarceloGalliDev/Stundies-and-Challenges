import { ButtonHTMLAttributes } from 'react'
import '../style/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
}

export function Button({isOutlined = false, ...props}: ButtonProps) {
  return (
    <button
      className={`button ${isOutlined ? 'outlined' : ''}`}
      {...props}
    />
  )
}

//spread operator, transferencia de Propss
//aqui passamos as props/atributos html para dentro do botão, assim podendo usar qualquer atributo do html nele

//& { isOutlined: boolean } = indicando que quero adicionar mais algumas propriedades chamada isOutlined ?(opcional): boolean
//Button({isOutlined, ...props}: ButtonProps) = nesse pedaço de código indicamos que vamos utilizar a isOutlined e o que não for dessa propriedade vem no ...props(rest operator)

//`` = acento grave