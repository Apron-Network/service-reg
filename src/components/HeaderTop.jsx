import React from "react";
import styled from "styled-components";

import { Button } from 'antd';

const RhtTop = styled.div`
  height: 60px;
  background: #fff;
  box-shadow: 0 0.125rem 0.625rem rgb(90 97 105 / 12%);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 24px;
  button{
  border-radius: 4px;
  }
`;

const HeaderTop = ()=>{

    return  <RhtTop>
        <Button type="primary">Connect Wallet</Button>
    </RhtTop>;
};
export default  HeaderTop;
