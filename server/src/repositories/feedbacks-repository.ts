export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}//TypeScript a ? vai antes do :, no prisma vai depois da String.

export interface FeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<void>;
}//Quais ações vai estar contidos aqui dentro, quais as ações que minha aplicação pode fazer com os feedback

//Esse é o responsável pelas operações que podemos realizar alteração no banco de dados