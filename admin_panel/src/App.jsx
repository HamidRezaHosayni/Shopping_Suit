import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add_product_page from './Add_product';
import Home_page from './Home_admin';
import Show_Regester_product from './show_Regester_product';
import Show_product from './show_Regester_product/show_Rgester_product';
import Show_profile_user from './show_Regester_product/show_profile_user';
import Menu_page from './Menu';
import No_page from './No_page';
import Regester_admin from './regester_admin';
import Counter_Slice1 from './redux/story';
import { Provider } from 'react-redux'

import "./library/css/output.css"

function App() {
  return (
    <>
      <Provider store={Counter_Slice1}>
        <BrowserRouter>
          <Menu_page>
        
            <Routes>
              <Route path="/" element={<Regester_admin />} />
              <Route path="/Home_page" element={<Home_page />} />
              <Route path="/Add_product" element={<Add_product_page />} />
              <Route path="/show_Regester_product" element={<Show_Regester_product />} />
              <Route path="/Show_product" element={<Show_product />} />
              <Route path="/Show_profile_user" element={<Show_profile_user />} />
              <Route path="/*" element={<No_page />} />

            </Routes>
        
          </Menu_page>

        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
