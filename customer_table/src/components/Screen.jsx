export default function Screen(props) {
  return (
    <div className="h-full w-full bg-light-gray grid place-content-center">
      {props.children}
    </div>
  );
}
