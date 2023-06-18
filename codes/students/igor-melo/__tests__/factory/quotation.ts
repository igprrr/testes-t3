import { faker } from "@faker-js/faker";
import { IQuotation } from "src/interfaces/quoatation";

export function quotation(initial?: Partial<IQuotation>): IQuotation { //Exporta uma função chamada quotation que aceita um parâmetro opcional initial do tipo Partial<IQuotation>, permitindo a inicialização parcial do objeto de cotação.
  return {
    quote: faker.word.words(10), // Uma sequência de 10 palavras gerada pelo faker.word.words(10). Essa propriedade representa a citação em si.
    author: faker.person.fullName(), //O nome completo de uma pessoa gerado pelo faker.person.fullName(). Essa propriedade representa o autor da citação.
    collection: faker.word.words(2), //Uma sequência de duas palavras gerada pelo faker.word.words(2). Essa propriedade representa a coleção à qual a citação pertence.
    ...initial,
  }
}
