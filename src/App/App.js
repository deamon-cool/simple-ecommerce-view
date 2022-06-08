import { useEffect, useState } from 'react';
import classes from './App.module.css';

import products from '../fakeProducts/products.json';

import Button from '../Button/Button';
import Container from '../Container/Container';
import FilterBar from '../FilterBar/FilterBar';
import Input from '../Input/Input';
import Product from '../Product/Product';
import Select from '../Select/Select';
// const PRODUCTS_URL = 'https://fakestoreapi.com/products';

function App() {
  const [searchedProduct, setSearchedProduct] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [popularitySorting, setPopularitySorting] = useState('');
  const [priceSorting, setPriceSorting] = useState('');

  // useEffect(() => {
  //   const abortController = new AbortController();

  //   function getCategories(products) {
  //     let l_categories = [];

  //     products.forEach(product => {
  //       if (!l_categories.includes(product.category)) {
  //         l_categories.push(product.category);
  //       }
  //     });

  //     return l_categories;
  //   }

  //   function downloadProducts() {
  //     const init = {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       signal: abortController.signal
  //     };

  //     fetch(PRODUCTS_URL, init)
  //       .then(res => res.json())
  //       .then(products => {
  //         setProducts(products);
  //         const categories = getCategories(products);
  //         setCategories(categories);
  //         setLoading('');
  //       })
  //       .catch(err => {
  //         setError('Cannot download products');
  //         setLoading('');
  //       });
  //   }

  //   downloadProducts();

  //   return () => {
  //     if (!products) {
  //       abortController.abort();
  //     }
  //   }
  // }, []);

  const searchHandler = (val) => {
    // setSearchedProduct(val);
  };

  const changePriceHandler = (val) => {
    // validation number
    // setMaxPrice(val);
    //parse float maxPrice to search products
  };

  const popularityClickHandler = () => {
    //setPopularitySorting
  };

  const priceClickHandler = () => {
    //setPriceSorting
  };

  const selectHandler = (val) => {

  };

  function getCategories(products) {
    let l_categories = [];

    products.forEach(product => {
      if (!l_categories.includes(product.category)) {
        l_categories.push(product.category);
      }
    });

    return l_categories;
  }
  
  const categories = getCategories(products);

  const productCards = products.map(product => {
    return <Product key={product.id} product={product} />
  });

  return (
    <div className={classes.App}>
      <Container>
        {productCards}
      </Container>

      <FilterBar>
        <Input
          changeHandler={searchHandler}
          value={searchedProduct}
          placeholder='Search...' />
        <Input
          changeHandler={changePriceHandler}
          value={maxPrice}
          placeholder='Max price' />
        <Button
          clickHandler={popularityClickHandler}
          text='Popularity' />
        <Button
          clickHandler={priceClickHandler}
          text='Price' />
        <Select
          changeHandler={selectHandler}
          optionsArr={categories}
          placeholder='Select category' />
      </FilterBar>
    </div>
  );
}

export default App;
