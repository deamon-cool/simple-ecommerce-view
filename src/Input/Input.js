import classes from './Input.module.css';

export default function Input(props) {
  const value = props.value;
  const placeholder = props.placeholder;
  const customStyle = props.customStyle;

  function changeHanlder(e) {
    props.changeHandler(e.target.value);
  }

  return (
    <input className={classes.Input} style={customStyle}
      onChange={changeHanlder}
      value={value} 
      placeholder={placeholder}/>
  );
}