import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-fly-by-low-ii-masculino/99/HZM-0832-999/HZM-0832-999_detalhe2.jpg?ims=326x"
          alt="tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$213,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>

          <span> ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-fly-by-low-ii-masculino/99/HZM-0832-999/HZM-0832-999_detalhe2.jpg?ims=326x"
          alt="tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$213,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>

          <span> ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-fly-by-low-ii-masculino/99/HZM-0832-999/HZM-0832-999_detalhe2.jpg?ims=326x"
          alt="tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$213,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>

          <span> ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-fly-by-low-ii-masculino/99/HZM-0832-999/HZM-0832-999_detalhe2.jpg?ims=326x"
          alt="tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$213,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span> ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-fly-by-low-ii-masculino/99/HZM-0832-999/HZM-0832-999_detalhe2.jpg?ims=326x"
          alt="tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$213,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 4
          </div>

          <span> ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-fly-by-low-ii-masculino/99/HZM-0832-999/HZM-0832-999_detalhe2.jpg?ims=326x"
          alt="tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$213,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>

          <span> ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
