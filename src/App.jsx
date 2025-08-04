import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './Global.styles';
import Layout from './Layout';
import Home from './pages/Home/Home';
import Attendees from './pages/Attendees/Attendees';
import attendeesInitialState from './pages/Attendees/initialState';
import { FormProvider } from './contexts/Form/FormProvider';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/event/:eventId/attendees" element={<FormProvider initialState={attendeesInitialState}><Attendees /></FormProvider>} />
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
