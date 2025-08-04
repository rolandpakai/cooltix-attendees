import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './Global.styles';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import Attendees from './pages/Attendees/Attendees';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/event/:eventId/attendees" element={<Attendees />} />
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
