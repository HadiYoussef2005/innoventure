import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home/Home';

export default function AppRoutes() {
  return (
    <Router>
        <MainLayout>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </MainLayout>
    </Router>
  );
}
