import Button from '../Button/Button';
import classes from './Product.module.css';

export default function Product(props) {
  const customStyle = props.customStyle;
  const id = props.product.id;
  const image = props.product.image;
  const title = props.product.title;
  const price = props.product.price;

  const clickDescriptionHandler = () => {
    props.clickDescriptionHandler(id);
  };

  return (
    <article className={classes.Product} style={customStyle}>
      <img src={image} />
      <h4>{title}</h4>
      <h5>{price}</h5>
      <Button clickHandler={clickDescriptionHandler} text='Description' />
    </article>
  );
}