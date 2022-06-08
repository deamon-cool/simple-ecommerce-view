import classes from './Container.module.css';

export default function Container(props) {
  const customStyle = props.customStyle;

  return (
    <main className={classes.Container} style={customStyle}>
      {props.children}
    </main>
  );
}