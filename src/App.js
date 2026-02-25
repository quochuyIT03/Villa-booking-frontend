import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { routes } from './Routes';
import HeaderComponent from './Component/HeaderComponent/HeaderComponent';
import FooterComponent from './Component/FooterComponent/FooterComponent';

// Tạo một instance của QueryClient
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Router>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <React.Fragment>
                    {route.isShowHeader && <HeaderComponent />}
                    <route.page />
                    {route.isShowFooter && <FooterComponent />}
                  </React.Fragment>
                }
              />
            ))}
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
