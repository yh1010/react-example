export default function loginAuth(OriginComponent) {
  return (props) => {
    const token = localStorage.getItem("token");
    console.log(props);

    if (token) {
      return <OriginComponent {...props} />;
    } else {
      return <h2>token失效</h2>;
    }
  };
}
