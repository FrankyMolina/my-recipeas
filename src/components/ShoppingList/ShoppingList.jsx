import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import './ShoppingList.scss';

const emptyInputState = { newProduct: '', productPrice: '', productId: '' };

export default function ShoppingList() {
  const [inputState, setInputState] = useState(emptyInputState);
  const [shoppingListState, setShoppingListState] = useState([]);

  function handleInputChange(ev) {
    const inputName = ev.target.name;
    const value = ev.target.value;

    setInputState({
      ...inputState,
      [inputName]: value,
    });
  }

  function handleSubmit(ev) {
    ev.preventDefault();

    setShoppingListState([
      ...shoppingListState,
      { ...inputState, productId: uuidv4() },
    ]);

    setInputState(emptyInputState);
  }

  function removeProduct(idToRemove) {
    const newShoppingList = shoppingListState.filter((e) => e.productId !== idToRemove);

    setShoppingListState(newShoppingList);
  }

  const listTotalPrice = shoppingListState.reduce(
    (acc, next) => acc + Number(next.productPrice),
    0
  );

  const { newProduct, productPrice } = inputState;

  return (
    <div className="shoppingList__container">
      <div className="shoppingList__formContainer">
        <form onSubmit={handleSubmit}>
          <label htmlFor="newProduct">
            <input
              type="text"
              name="newProduct"
              placeholder="Insert item"
              value={newProduct}
              onChange={handleInputChange}
            />
          </label>

          <label htmlFor="price">
            <input
              type="number"
              step=".01"
              min="0"
              name="productPrice"
              placeholder="Insert item price"
              value={productPrice}
              onChange={handleInputChange}
            />
          </label>
          <input type="submit" />
        </form>
      </div>

      <div className="shoppingList__productsList">
        <h2>LIST</h2>
        <div>
          {shoppingListState.map((item) => (
            <div key={item.productId} className="shoppingList__singleProductDiv">
              <p>{item.newProduct}</p>
              <p>{item.productPrice}</p>
              <button onClick={() => removeProduct(item.productId)}>X</button>
            </div>
          ))}
        </div>

        <div>
          <h3>Total: {Number.isNaN(listTotalPrice) ? ' ' : listTotalPrice}€</h3>
        </div>
      </div>
    </div>
  );
}
