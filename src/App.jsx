import { Route, Routes } from 'react-router-dom';
import ImageCardDetails from './Components/ImageCardDetails';
// import Portfolio from './page/Portfolio';
// import PortfolioLandingPage from './page/PortfolioLandingPage';
import Portfolio from './page/Portfolio';
import PortfolioDashbaord from './page/PortfolioDashbaord';

function App() {
  return (
    <Routes>
        {/* <Route path='/' element={<ImageCard heading="Image Collections"/>} /> */}
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/detailPage/:id' element={<ImageCardDetails />} />
        <Route path='/detailPage/dashboard' element={<ImageCardDetails />} />

        <Route path='/' element={<PortfolioDashbaord />} />

    </Routes>
  );
}

export default App;