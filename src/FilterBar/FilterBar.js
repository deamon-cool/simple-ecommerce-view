import classes from './FilterBar.module.css';

export default function FilterBar(props) {
  const customStyle = props.customStyle;

  return (
    <nav className={classes.FilterBar} style={customStyle}>
      {props.children}
    </nav>
  );
}