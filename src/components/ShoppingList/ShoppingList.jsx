import React, { useState } from 'react';

import './ShoppingList.scss';

const emptyInputState = { newProduct: '', productPrice: '' };

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

    setShoppingListState(
      ...[shoppingListState],
      shoppingListState.push(inputState)
    );

    setInputState(emptyInputState);
  }

  function removeProduct(item) {
    const newShoppingList = shoppingListState.filter((e) => e !== item);

    //when you have a duplicate, it removes the two of them. remains to be fixed.

    setShoppingListState(newShoppingList);
  }

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
          {shoppingListState.map((item, idx) => (
            <div key={idx} className="shoppingList__singleProductDiv">
              <p>{item.newProduct}</p>
              <p>{item.productPrice}</p>
              <button onClick={() => removeProduct(item)}>X</button>
            </div>
          ))}
        </div>

        {/* <div>
          <h3>
            Total:{' '}
            {shoppingListState.map((itemPrice, idx) => console.log(itemPrice.productPrice[idx]))}
          </h3>
        </div> */}
      </div>
    </div>
  );
}
