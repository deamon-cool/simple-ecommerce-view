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
  const [searchedWord, setSearchedWord] = useState('');
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
    setSearchedWord(val);
  };

  const changePriceHandler = (val) => {
    if (!isNaN(val)) {
      setMaxPrice(val);
    }
  };

  const popularityClickHandler = () => {
    setPopularitySorting(state => (
      state === '↑' ? '↓' : '↑'
    ));
    setPriceSorting('');
  };

  const priceClickHandler = () => {
    setPriceSorting(state => (
      state === '↑' ? '↓' : '↑'
    ));
    setPopularitySorting('');
  };

  const selectHandler = (val) => {

  };

  const clearFilters = () => {
    setSearchedWord('');
    setMaxPrice('');
    setPopularitySorting('');
    setPriceSorting('');
  }

  function getCategories(products) {
    let l_categories = [];

    products.forEach(product => {
      if (!l_categories.includes(product.category)) {
        l_categories.push(product.category);
      }
    });

    return l_categories;
  }

  function sortingByPopularity(a, b) {
    if (popularitySorting === '↑') {
      return a.rating.count - b.rating.count;
    }

    if (popularitySorting === '↓') {
      return b.rating.count - a.rating.count;
    }

    return a.rating.count - b.rating.count;
  }

  function sortingByPrice(a, b) {
    if (priceSorting === '↑') {
      return a.price - b.price;
    }

    if (priceSorting === '↓') {
      return b.price - a.price;
    }

    return a.price - b.price;
  }

  const categories = getCategories(products);

  let filterPrice = maxPrice === '' ? Infinity : parseFloat(maxPrice);
  const filteredProducts = products.filter(product =>
    product.title.toLocaleLowerCase().startsWith(searchedWord) &&
    parseFloat(product.price) <= filterPrice
  );

  let buttonPopularityText = 'Popularity';
  if (popularitySorting !== '') {
    filteredProducts.sort((a, b) =>
      sortingByPopularity(a, b)
    );

    buttonPopularityText += ` ${popularitySorting}`;
  }

  let buttonPriceText = '$';
  if (priceSorting !== '') {
    filteredProducts.sort((a, b) =>
      sortingByPrice(a, b)
    );

    buttonPriceText = `$ ${priceSorting}`;
  }

  const productCards = filteredProducts.map(product => {
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
          value={searchedWord}
          placeholder='Search...' />
        <Input
          changeHandler={changePriceHandler}
          value={maxPrice}
          placeholder='Max price' />
        <Button
          clickHandler={popularityClickHandler}
          text={buttonPopularityText} />
        <Button
          clickHandler={priceClickHandler}
          text={buttonPriceText} />
        <Select
          changeHandler={selectHandler}
          optionsArr={categories}
          placeholder='Select category' />
        <Button
          clickHandler={clearFilters}
          text='Clear filters' />
      </FilterBar>

      <Button
        text='In Basket (5)'
        customStyle={{ display: 'block', margin: '0 auto 15px auto' }} />
    </div>
  );
}

export default App;
