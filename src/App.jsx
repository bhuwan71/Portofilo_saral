import { Route, Routes } from 'react-router-dom';
import ImageCardDetails from './Components/ImageCardDetails';
// import Portfolio from './page/Portfolio';
import PortfolioLandingPage from './page/PortfolioLandingPage';

function App() {
  return (
    <Routes>
        {/* <Route path='/' element={<ImageCard heading="Image Collections"/>} /> */}
        {/* <Route path='/' element={<Portfolio/>} /> */}
        <Route path='/detailPage/:id' element={<ImageCardDetails />} />
        <Route path='/' element={<PortfolioLandingPage />} />

    </Routes>
  );
}

export default App;