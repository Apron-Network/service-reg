import React, { useState } from "react";
import styled from "styled-components";

import { Input,Button } from 'antd';
import { useNavigate } from 'react-router-dom';


const HeaderS = styled.div`
  display: flex;
  justify-content: space-between;
`

const FirstB = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  width: 100%;
  img{
    border-radius: 110px;
    width: 110px;
    height: 110px;
  }
`;

const Titles = styled.div`
  margin-left: 20px;
`;

const TitleB = styled.div`
  font-size: 26px;
`;

const BrdrTop = styled.div`
  padding: 24px;
   .titleInner{
      font-weight: 500;
      font-size: 16px;
      padding-right: 20px;
      width: 250px;
      margin-bottom: 20px;
    }
`;
const ListBrdr = styled.div`
  //display: flex;
  //align-items: center;
  margin-bottom: 30px;
  .inputBr{
  margin-bottom: 0;
  }
 
`;
const BtnGroup = styled.div`
  padding: 24px;
   border-top: 1px solid #e1e5eb;
   button{
   margin-right: 20px;
   padding: 0 24px;
      height: 40px;
   }
`;

const Setting = ()=>{
    const navigate = useNavigate();

    const ToHome = () => {
        navigate('/')
    }
    return  <div>
        <HeaderS>
            <FirstB>

                <Titles>
                    <TitleB>
                        Add New Postfsf
                    </TitleB>
                    {/*<div>created at 2021-11-10</div>*/}
                    {/*<div>updated at 2021-11-10</div>*/}
                </Titles>
            </FirstB>
        </HeaderS>
        <div className="cardB">

            <BrdrTop>
                <ListBrdr>
                    <div className="titleInner">Apron Node RPC</div>
                    <div className="inputBr">
                        <Input placeholder="Apron Node RPC" />
                    </div>
                </ListBrdr>
                <ListBrdr>
                    <div className="titleInner">Apron Gateway Manage API</div>
                    <div className="inputBr">
                        <Input placeholder="Apron Gateway Manage API" />
                    </div>
                </ListBrdr>
            </BrdrTop>
            <BtnGroup>
                <Button type="primary">confirm</Button>
                <Button onClick={()=>ToHome()}>cancel</Button>
            </BtnGroup>
        </div>

    </div>;
};
export default  Setting;
