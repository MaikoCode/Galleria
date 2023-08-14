import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import paintingData from "/assets/data.json";
import PaintingCard from "./Components/PaintingCard";
import PaintingDetail from "./Components/PaintingDetail";
import NotFound from "./Components/NotFound";
import { ExpositionProvider } from "./context/ExpositionContext";
import data from "../src/assets/data.json";
import Masonry from 'react-masonry-css';

function App() {
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    return (
        <Router basename="/Galleria/">
            <ExpositionProvider tableaux={data}>
                <div className="min-h-screen font-white lg:mx-auto font-primary">
                    <Routes>
                        {/* Home route */}
                        <Route path="/" element={
                            <>
                                <Header />
                                <div className="max-w-6xl lg:mx-auto m-4">
                                    <Masonry
                                        breakpointCols={breakpointColumnsObj}
                                        className="my-masonry-grid"
                                        columnClassName="my-masonry-grid_column"
                                    >
                                        {paintingData.map(painting => (
                                            <PaintingCard
                                                key={painting.name}
                                                imgSrc={painting.images.thumbnail}
                                                title={painting.name}
                                                artist={painting.artist.name}
                                            />
                                        ))}
                                    </Masonry>
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
            </ExpositionProvider>
        </Router>
    );
}

export default App;
