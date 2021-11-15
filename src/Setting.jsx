import React, { useState,useEffect } from "react";
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
const InputText = styled.div`
   opacity: 0.6;
`

const Setting = ()=>{
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [rpc, setRpc] = useState(null);
    const [api, setApi] = useState(null);

    const ToHome = () => {
        navigate('/')
    }

    useEffect(()=>{
        let myLocal = localStorage.getItem('localSetting');
        if(myLocal == null) return;
        let myLocalObj = JSON.parse(myLocal);

        setRpc(myLocalObj.rpc);
        setApi(myLocalObj.api);
        setShow(true);
    },[]);

    const confirmSave = () =>{
        setShow(true);
        let obj = {
            api,
            rpc
        };
        localStorage.setItem('localSetting',JSON.stringify(obj))
    }

    const cancelSave = () =>{
        setShow(true)
    }
    const Edit = () =>{
        setShow(false)
    }
    const handleChange = (e) =>{
        const { name, value} = e.target;
        if(name === 'api'){
            setApi(value)
        }else{
            setRpc(value)
        }
    }

    return  <div>
        <HeaderS>
            <FirstB>

                <Titles>
                    <TitleB>
                        Local Setting
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
                    {
                        !show&& <div className="inputBr">
                        <Input placeholder="Apron Node RPC" value={rpc} name="rpc" onChange={handleChange} />
                        </div>
                    }
                    {
                        show&&<InputText>
                            {rpc}
                        </InputText>
                    }
                </ListBrdr>
                <ListBrdr>
                    <div className="titleInner">Apron Gateway Manage API</div>
                    {
                        !show&& <div className="inputBr">
                            <Input placeholder="Apron Gateway Manage API" value={api} name="api" onChange={handleChange} />
                        </div>
                    }
                    {
                        show&&<InputText>
                            {api}
                        </InputText>
                    }
                </ListBrdr>
            </BrdrTop>
            <BtnGroup>
                {
                    !show&&  <div>
                        <Button type="primary" onClick={()=>confirmSave()}>confirm</Button>
                        <Button onClick={()=>cancelSave()}>cancel</Button>

                    </div>
                }
                {
                    show&& <div>
                        <Button type="primary" onClick={()=>Edit()}>Edit</Button>
                        <Button onClick={()=>ToHome()}>Back to homepage</Button>
                    </div>
                }

            </BtnGroup>
        </div>

    </div>;
};
export default  Setting;
