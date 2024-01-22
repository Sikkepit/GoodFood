import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RecipeDetail from './pages/RecipeDetail'
import ScrollToTop from './components/ScrollToTop'
import AboutUs from './pages/AboutUs'

export default function App() {
  
    return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/recipe' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/recipe/:id' element={<RecipeDetail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
