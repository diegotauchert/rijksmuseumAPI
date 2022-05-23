import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import WrapperContent from './components/WrapperContent';
import Header from './components/Header';

const CollectionRead = lazy(() => import("./components/CollectionRead"));
const SearchContent = lazy(() => import("./components/SearchContent"));
const NotFound = lazy(() => import("./components/NotFound"));

function App(){
  return (
    <WrapperContent>
      <Header />
      <Suspense fallback={<>...</>}>
        <Routes>
          <Route path="/" element={<SearchContent />} />
          <Route path="/collections/:page" element={<SearchContent />} />
          <Route path="/collections/:title/:id" element={<CollectionRead />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </WrapperContent>
  )
}

export default App;