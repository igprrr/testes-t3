import { faker } from "@faker-js/faker";
import { ImageURL } from "../../src/entities/url";
import { ICollection } from "../../src/interfaces/collection";

export function collection(initial?: Partial<ICollection>): ICollection { //exporta uma função com nome de collection que aceita um parâmetro opcional initial do tipo Partial<ICollection>, que permite a inicialização parcial do objeto de coleção.
  return { //Retorna um objeto do tipo ICollection com as seguintes propriedades
    title: faker.word.words(2), //Uma palavra aleatória gerada pelo faker.word.words(2).
    author: faker.person.fullName(), //O nome completo de uma pessoa gerado pelo faker.person.fullName().
    subtitle: faker.word.words(7), //: Uma sequência de sete palavras gerada pelo faker.word.words(7).
    image: new ImageURL(`${process.env.NEXT_PUBLIC_DEV_URL}/assets/collection.jpg`),
    ...initial, //Espalha o objeto initial dentro do objeto retornado. Isso permite que as propriedades iniciais sejam substituídas ou adicionadas ao objeto retornado, se initial for fornecido.
  }
}
