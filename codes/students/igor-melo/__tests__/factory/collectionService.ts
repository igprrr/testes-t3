import { ICollectionService } from "../../src/service/collection";
import { collection } from "./collection";

export function collectionService(initial?: Partial<ICollectionService>): ICollectionService { //Exporta uma função chamada collectionService que aceita um parâmetro opcional initial do tipo Partial<ICollectionService>, permitindo a inicialização parcial do objeto de serviço de coleção
  return {
    getValidCollections: () => Promise.resolve([]), // uma função que retorna uma promessa resolvida com um array vazio. Essa função provavelmente é responsável por obter coleções válidas.
    filterCollections: (_, collections) => collections, //uma função que recebe dois parâmetros, mas não realiza nenhuma ação. Ela simplesmente retorna o array de coleções fornecido. Essa função provavelmente é responsável por filtrar coleções com base em algum critério.
    isValidCollection: (_) => true, //uma função que recebe um parâmetro, mas não realiza nenhuma verificação. Ela sempre retorna true, indicando que a coleção é considerada válida. Essa função provavelmente é responsável por verificar se uma coleção é válida.
    saveCollection: (_) => Promise.resolve(collection()), // uma função que recebe um parâmetro, mas não realiza nenhuma ação. Ela retorna uma promessa resolvida com um objeto de coleção gerado pela função collection(). Essa função provavelmente é responsável por salvar uma coleção.
    ...initial,
  }
}
