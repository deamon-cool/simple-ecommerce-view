import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import FilterBar from '../FilterBar/FilterBar';
import Input from '../Input/Input';
import Select from '../Select/Select';
import classes from './App.module.css';

function App() {
  const [searchedProduct, setSearchedProduct] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [popularitySorting, setPopularitySorting] = useState('');
  const [priceSorting, setPriceSorting] = useState('');

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
          optionsArr={['aaa', 'bbb', 'ccc']}
          placeholder='Select category' />
      </FilterBar>
    </div>
  );
}

export default App;
