import classes from './Select.module.css';

export default function Select(props) {
  const optionsArr = props.optionsArr;
  const placeholder = props.placeholder;
  const customStyle = props.customStyle;

  function changeHandler(e) {
    props.changeHandler(e.target.value);
  }

  const options = optionsArr.map((option, i) => {
    return (
      <option value={option} key={option + i}>
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </option>
    );
  });

  return (
    <select className={classes.Select} style={customStyle}
      onChange={changeHandler}>
      <option value=''>{placeholder}</option>
      {options}
    </select>
  );
}