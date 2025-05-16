import Category from "./components/Category";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MiniSlider from "./components/MIniSlider";
import Nishat from "./components/Nishat";
import Slider from "./components/Slider";

const App = () => {
  return (
    <>
      <Header />
      <Slider />
      <MiniSlider />
      <Category />
      <Nishat/>
      <Footer/>
    </>
  );
};

export default App;
