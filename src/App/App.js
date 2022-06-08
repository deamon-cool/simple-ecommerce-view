import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import FilterBar from '../FilterBar/FilterBar';
import Input from '../Input/Input';
import Select from '../Select/Select';
import classes from './App.module.css';

const PRODUCTS_URL = 'https://fakestoreapi.com/products';

function App() {
  const [loading, setLoading] = useState('Loading...');
  const [error, setError] = useState('');
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState(['Loading...']);
  const [searchedProduct, setSearchedProduct] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [popularitySorting, setPopularitySorting] = useState('');
  const [priceSorting, setPriceSorting] = useState('');

  useEffect(() => {
    const abortController = new AbortController();

    function getCategories(data) {
      let l_categories = [];

      data.forEach(product => {
        if (!l_categories.includes(product.category)) {
          l_categories.push(product.category);
        }
      });

      return l_categories;
    }

    function downloadData() {
      const init = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        signal: abortController.signal
      };

      fetch(PRODUCTS_URL, init)
        .then(res => res.json())
        .then(data => {
          setData(data);
          const categories = getCategories(data);
          setCategories(categories);
          setLoading('');
        })
        .catch(err => {
          setError('Cannot download products')
        });
    }

    downloadData();

    return () => {
      if (!data) {
        abortController.abort();
      }
    }
  }, []);
  const searchHandler = (val) => {
    setSearchedProduct(val)
  };

  const changePriceHandler = (val) => {
    setMaxPrice(val);
    // validation number
    //parse float maxPrice to search products
  };

  const popularityClickHandler = () => {
    //setPopularitySorting
  };

  const priceClickHandler = () => {
    //setPriceSorting
  };

  const selectHandler = (val) => {
    console.log(val)
  };

  return (
    <div className={classes.App}>
      <Container>
        {error}
        {loading}
        {/* {products} */}
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
