import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import paintingData from "./assets/data.json";
import PaintingCard from "./Components/PaintingCard";
import PaintingDetail from "./Components/PaintingDetail";
import NotFound from "./Components/NotFound";



function App() {
  return (
      <Router>
        
          <div className="min-h-screen font-white lg:mx-auto font-primary">
              
              <Routes>
                  {/* Home route */}
                  <Route path="/" element={
                      <>
                          <Header /> 
                          <div className="flex flex-col max-w-6xl lg:mx-auto m-4">
                              {paintingData.map(painting => (
                                  <PaintingCard
                                      key={painting.name}
                                      imgSrc={painting.images.thumbnail}
                                      title={painting.name}
                                      artist={painting.artist.name}
                                  />
                              ))}
                          </div>
                         
                      </>
                  } />

                  {/* Details route */}
                  <Route path="/details/:paintingName" element={
                      <>
                          <Header />
                          <PaintingDetail />
                      </>
                  } />

                  {/* 404 route */}
                  <Route path="/404" element={<NotFound />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
