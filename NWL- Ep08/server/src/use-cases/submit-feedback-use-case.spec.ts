import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();
//jest.fn = função espiã

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy },
)

describe('Submite feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'data:image/png;base64, testando',
    })).resolves.not.toThrow();// quando chegar nessa parte, significa que ela seja resolvida e não dispare nenhum erro.

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit a feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'example comment',
      screenshot: 'data:image/png;base64, testando',
    })).rejects.toThrow();// quando chegar nessa parte, significa que ela seja negadae e dispare um erro.
  });

  it('should not be able to submit a feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64, testando',
    })).rejects.toThrow();// quando chegar nessa parte, significa que ela seja negadae e dispare um erro.
  });

  it('should not be able to submit a feedback with an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Tudo bugado!',
      screenshot: 'test.jpg',
    })).rejects.toThrow();// quando chegar nessa parte, significa que ela seja negadae e dispare um erro.
  });
});

//describe = cria uma switch de teste, categorizando os testes
//posso usar keyword test('') ou it('should be able')

//Estou testando as dependências do Submite feedback, que são create e sendMail

//Afinal o que estamos testando, estamos testando o conteúdo da função, em relação ao funcionamento, desprezado o conteúdo gerado, como o formato do email por exemplo

//spies - são espiões, formas de conseguir conhecimento se uma função foi chamada