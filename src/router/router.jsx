import React from 'react';
import About from '../About';
import Edit from '../Edit';
import Setting from '../Setting';

import {Route,Routes,Navigate} from "react-router-dom";

function routerlink() {
    return (
        <Routes>

            <Route path="/" element={<Navigate to="/about" />}/>
            <Route path="/about/:id" element={<About />}/>
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/add" element={<Edit />} />
            <Route path="/setting" element={<Setting />} />
        </Routes>
   );
}

export default routerlink;
