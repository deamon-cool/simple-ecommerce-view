import classes from './Button.module.css';

export default function Button(props) {
  const text = props.text;
  const customStyle = props.customStyle;

  function clickHanlder(e) {
    props.clickHanlder();
  }

  return (
    <button className={classes.Button} style={customStyle}
      onClick={clickHanlder}>
      {text}
    </button>
  );
}