import classes from './Product.module.css';

import Button from '../Button/Button';
import defaultImgSrc from '../fakeProducts/product.png';

export default function Product(props) {
  const customStyle = props.customStyle;
  const id = props.product.id;
  let image = props.product.image;
  const title = props.product.title;
  const price = props.product.price;

  if (image === '') {
    image = defaultImgSrc;
  }

  const clickDescriptionHandler = () => {
    props.clickDescriptionHandler(id);
  };

  return (
    <article className={classes.Product} style={customStyle}>
      <img src={image} alt='product image' />
      <h3>{title}</h3>
      <h4>${price}</h4>
      <Button
        clickHandler={clickDescriptionHandler}
        text='Description'
        customStyle={{ display: 'block', margin: '0 auto' }} />
    </article>
  );
}