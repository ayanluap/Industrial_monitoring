import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { theme } from './theme/Theme';

import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Loader from './layouts/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('overflow-hidden')
      : document.querySelector('body').classList.remove('overflow-hidden');
  }, [loading]);

  return (
    // <GlobalProvider>
    <ThemeProvider theme={theme}>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {loading ? (
            <motion.div key="loader">
              <Loader setLoading={setLoading} />
            </motion.div>
          ) : (
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route
                  path="*"
                  element={
                    <main style={{ padding: '1rem' }}>
                      <p>There's nothing here!</p>
                    </main>
                  }
                />
              </Routes>
            </BrowserRouter>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </ThemeProvider>
    // </GlobalProvider>
  );
};

export default App;
