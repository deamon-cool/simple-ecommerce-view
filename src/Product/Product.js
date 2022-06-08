import classes from './Product.module.css';

import Button from '../Button/Button';
import defaultImgSrc from '../fakeProducts/product.png';

export default function Product(props) {
  const customStyle = props.customStyle;
  let image = props.product.image;
  const title = props.product.title;
  const price = props.product.price;
  const showDescription = props.showDescription;

  if (image === '') {
    image = defaultImgSrc;
  }

  const clickDescriptionHandler = () => {
    props.clickDescriptionHandler();
  };

  let description = '';
  if (showDescription) {
    description = props.product.description;
  }

  return (
    <article className={classes.Product} style={customStyle}>
      <img src={image} alt='product image' />
      <h3>{title}</h3>
      <h4>${price}</h4>
      <Button
        clickHandler={clickDescriptionHandler}
        text='Description'
        customStyle={{ display: 'block', margin: '0 auto 5px auto' }} />
      <div>
        {description}
      </div>
    </article>
  );
}