import React from 'react';
import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import CollectionList from '../../src/components/collectionList';
import { collection } from '../factory/collection';
import { ICollection } from '../../src/interfaces/collection';

describe('<CollectionList>', () => { // Define um bloco de testes usando describe para agrupar os testes relacionados ao componente <CollectionList>. O nome <CollectionList> indica o componente sendo testado.
  describe('Deve renderizar uma lista de coleções em branco', () => { //Define um bloco de testes aninhado usando describe para agrupar os testes relacionados à renderização correta de uma lista de coleções vazia.
    it('Deve exibir um elemento em branco quando uma lista de coleções vazia for injetada via prop', () => { //Define um teste que verifica se é exibido um elemento em branco quando uma lista vazia de coleções é passada como prop "collections". O teste renderiza o componente <CollectionList> com a lista de coleções vazia e verifica se o primeiro elemento do container está vazio usando toBeEmptyDOMElement.
      const collections = [] as ICollection[];
      const { container } = render(<CollectionList collections={collections} />);

      expect(container.firstChild).toBeEmptyDOMElement();
    });

    it('Deve exibir corretamente o nome de todas as coleções passadas via prop', () => { //Define um teste que verifica se os nomes de todas as coleções são exibidos corretamente quando a lista de coleções é passada como prop "collections". O teste renderiza o componente <CollectionList> com a lista de coleções e verifica se cada título está presente no documento usando getByText e toBeInTheDocument.
      const collections = Array.from(Array(faker.number.int({ min: 1, max: 10 }))).map(() =>
        collection()
      );
      render(<CollectionList collections={collections} />);

      collections.forEach(({ title }) => expect(screen.getByText(title)).toBeInTheDocument());
    });

    it('Deve renderizar o mesmo numero de coleções passadas via prop "collections"', () => { //Define um teste que verifica se o número de coleções renderizadas corresponde ao número de coleções passadas como prop "collections". O teste cria uma lista de coleções aleatórias, renderiza o componente <CollectionList> com a lista de coleções e verifica se o número de elementos filho do container corresponde ao comprimento da lista de coleções usando childNodes.length e toBe.
      const collections = Array.from(Array(faker.number.int({ min: 1, max: 10 }))).map(() =>
        collection()
      );

      const { container } = render(<CollectionList collections={collections} />);

      expect(container.firstChild?.childNodes.length).toBe(collections.length);
    });
  });
});
