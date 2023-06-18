import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { faker } from '@faker-js/faker';
import Button from '../../src/components/button';

describe('<Button />', () => { //Define um bloco de testes usando describe para agrupar os testes relacionados ao componente <Button />. O nome <Button /> indica o componente sendo testado.
  it('Deve ser igual ao snapshot salvo anteriormente quando o botão for renderizado', () => { //Define um teste usando it que verifica se o componente renderizado é igual ao snapshot anteriormente salvo. O snapshot captura a estrutura e o estado do componente no momento do teste. Isso é útil para detectar alterações indesejadas no componente ao longo do tempo.
    const words = faker.word.words(3); // Gera uma sequência de três palavras aleatórias usando o faker.word.words() e atribui à variável words. Essa sequência de palavras será usada como título do botão nos testes seguintes.
    render(<Button title={words} />); // Renderiza o componente <Button /> com o título fornecido como prop title usando a função render do pacote de testes. Isso simula a renderização do componente em um ambiente de teste.

    const button = screen.getByRole('button'); //Obtém o elemento do botão renderizado utilizando a função getByRole do pacote de testes. Isso permite selecionar o botão com base no seu papel semântico na interface.

    expect(button).toMatchSnapshot(); //Compara o elemento do botão com o snapshot salvo anteriormente usando a função toMatchSnapshot do pacote de testes. Isso verifica se a estrutura e o estado do botão correspondem ao snapshot.
  });

  describe('Deve exibir o botão corretamente quando ele for renderizado', () => { //Define um bloco de testes aninhado usando describe para agrupar os testes relacionados à renderização correta do botão.
    it('Deve exibir o título do botão quando o valor for passado via prop "Title"', () => { //Define um teste que verifica se o título do botão é exibido corretamente quando o valor é passado via prop "title". O teste renderiza o botão, procura o elemento com o texto do título usando getByText e verifica se ele está presente no documento usando toBeInTheDocument.
      const words = faker.word.words(3); // Gera uma sequência de três palavras aleatórias usando o faker.word.words() e atribui à variável words. Essa sequência de palavras será usada como título do botão nos testes seguintes.
      render(<Button title={words} />); //Renderiza o componente <Button /> com o título fornecido como prop title usando a função render do pacote de testes. Isso simula a renderização do componente em um ambiente de teste.

      const button = screen.getByText(words); //Obtém o elemento do botão renderizado utilizando a função getByRole do pacote de testes. Isso permite selecionar o botão com base no seu papel semântico na interface.

      expect(button).toBeInTheDocument();
    });

    it('Deve chamar a função de "onClick" quando o botão for clicado', async () => {
      const onClick = jest.fn();
      render(<Button onClick={onClick} />);

      const button = screen.getByRole('button');
      await userEvent.click(button);

      expect(onClick).toBeCalledTimes(1);
    });
  });
});
