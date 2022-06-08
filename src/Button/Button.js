import classes from './Button.module.css';

export default function Button(props) {
  const text = props.text;
  const customStyle = props.customStyle;

  function clickHandler() {
    props.clickHandler();
  }

  return (
    <button className={classes.Button} style={customStyle}
      onClick={clickHandler}>
      {text}
    </button>
  );
}