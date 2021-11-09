import React from 'react';
import About from '../About';
import Edit from '../Edit';
import Setting from '../Setting';

import {Route,Routes} from "react-router-dom";

function routerlink() {
    return (
        <Routes>
            <Route path="/" element={<About />}/>
            <Route path="/edit" element={<Edit />} />
            <Route path="/setting" element={<Setting />} />
        </Routes>
   );
}

export default routerlink;
