import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { faker } from '@faker-js/faker';
import Collection from '../../src/components/collection';
import { collection } from '../factory/collection';
import { ImageURL } from '../../src/entities/url';

describe('<Collection>', () => {
  describe('Deve exibir uma coleção corretamente quando as informações passadas forem válidas', () => { // Define um bloco de testes usando describe para agrupar os testes relacionados ao componente <Collection>. O nome <Collection> indica o componente sendo testado.
    it('Deve exibir o título da coleção quando ele for passado na prop "title"', () => { //Define um teste que verifica se o título da coleção é exibido corretamente quando ele é passado como prop "title". O teste renderiza o componente <Collection> com uma coleção contendo o título fornecido e verifica se o título está presente no documento usando getByText.
      const title = faker.word.words(2);
      render(<Collection collection={collection({ title })} />);

      expect(screen.getByText(title)).toBeInTheDocument();
    });

    it('Deve exibir o subtítulo da coleção quando ele for passado na prop "subtitle"', () => {
      const subtitle = faker.word.words(7);
      render(<Collection collection={collection({ subtitle })} />);

      expect(screen.getByText(subtitle)).toBeInTheDocument();
    });

    it('Deve exibir o nome do autor da coleção quando ele for passado na prop "author"', () => {
      const author = faker.person.fullName();
      render(<Collection collection={collection({ author })} />);

      expect(screen.getByText(author)).toBeInTheDocument();
    });

    it('Deve exibir o botão de editar coleção quando o componente for renderizado', () => {
      render(<Collection collection={collection()} />);

      expect(screen.getByText('Editar')).toBeInTheDocument();
    });

    it('Deve exibir o botão de excluir coleção quando o componente for renderizado', () => {
      render(<Collection collection={collection()} />);

      expect(screen.getByText('Excluir')).toBeInTheDocument();
    });

    it('Deve exibir uma imagem com o atributo src igual ao valor passado na prop "image"', () => { //Define um teste que verifica se uma imagem é exibida corretamente com o atributo src igual ao valor fornecido na prop "image". O teste renderiza o componente <Collection> com uma coleção contendo a imagem fornecida e verifica se o atributo src da imagem corresponde ao valor esperado.
      const src = faker.image.url();
      render(<Collection collection={collection({ image: new ImageURL(src) })} />);

      expect(screen.getByRole('img').getAttribute('src')).toBe(src);
    });
  });

  describe('Deve executar corretamente as ações da coleção quando o usuário clicar nelas', () => { //Define um bloco de testes aninhado usando describe para agrupar os testes relacionados à execução correta das ações da coleção quando o usuário interage com elas.
    it('Deve chamar a função de editar passada via prop "onEdit" quando o usuário clicar no botão Editar', async () => {
      const onEdit = jest.fn();
      render(<Collection collection={collection()} onEdit={onEdit} />);

      await userEvent.click(screen.getByRole('button', { name: 'Editar' }));

      expect(onEdit).toBeCalledTimes(1);
    });

    it('Deve chamar a função de excluir passada via prop "onDelete" quando o usuário clicar no botão de Excluir', async () => { //Define um teste que verifica se a função de exclusão passada como prop "onDelete" é chamada corretamente quando o usuário clica no botão de excluir. O teste renderiza o componente <Collection> com uma coleção vazia e verifica se a função de exclusão é chamada usando userEvent.click e toBeCalledTimes.
      const onDelete = jest.fn();
      render(<Collection collection={collection()} onDelete={onDelete} />);

      await userEvent.click(screen.getByRole('button', { name: 'Excluir' }));

      expect(onDelete).toBeCalledTimes(1);
    });
  });
});
