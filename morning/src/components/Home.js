import useFetch from "../hooks/useFetch";
import Nav from "./Nav/Nav";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
const Home = () => {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/entries/1"
  );
  console.log(data);
  // fetch("http://localhost:1337/api/entries/1")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));

  let showLoading = loading ? <p>Loading....</p> : "";
  let showError = error ? <p>Error :(</p> : "";

  return (
    <>
      {/* <Nav /> */}
      <Main data={data} q />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
