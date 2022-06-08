import classes from './Select.module.css';

export default function Select(props) {
  const optionsArr = props.optionsArr;
  const placeholder = props.placeholder;
  const customStyle = props.customStyle;

  function changeHanlder(e) {
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
      onChange={changeHanlder}>
      <option>{placeholder}</option>
      {options}
    </select>
  );
}