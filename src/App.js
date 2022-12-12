import React from "react";

import 'antd/dist/antd.css';

import GlobalStyle from './utils/GlobalStyle';
import Routerlink from './router/router';
import NavBar from './components/navbar';
import HeaderTop from './components/HeaderTop';
import Btm from './components/btm';
import styled from "styled-components";
import {HashRouter as Router} from "react-router-dom";

import { SubstrateContextProvider } from "./api/contracts";

const MainBrdr = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: stretch;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
const Rht = styled.div`
  width: 83.3333333%;
`;
const HomeB = styled.div`
  padding: 24px 24px 50px;
  height:calc(100vh - 110px);
  box-sizing: border-box;
  overflow-y: auto;
 
`

function App() {
    return (
        <SubstrateContextProvider>
            <Router>
                <MainBrdr>
                    <NavBar />
                    <Rht>
                        <HeaderTop />
                        <HomeB>
                            <Routerlink />
                        </HomeB>
                        <Btm />
                    </Rht>
                    <GlobalStyle/>

                </MainBrdr>
            </Router>
        </SubstrateContextProvider>
);
}

export default App;
