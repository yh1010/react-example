import ThemeContext from "../context/theme_context";

export default function ThemeHoc(OriginComponent) {
  return (props) => {
    return (
      <div>
        <ThemeContext.Consumer>
          {(value) => {
            console.log("1", props);

            return <OriginComponent {...value} />;
          }}
        </ThemeContext.Consumer>
      </div>
    );
  };
}
