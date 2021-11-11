import React, { useState,useEffect } from "react";
import styled from "styled-components";

import { Input,Button } from 'antd';
import { useNavigate,useParams,useLocation } from 'react-router-dom';

const { TextArea } = Input;

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
  border-top: 1px solid #e1e5eb;
  padding: 24px;
   .titleInner{
      font-weight: 500;
      font-size: 16px;
      padding-right: 20px;
      width: 100px;
    }
`;
const ListBrdr = styled.div`
  display: flex;
  align-items: center;
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

const ServiceLogo = styled.div`
    border-radius: 110px;
    width: 109px;
    height: 109px;
    background: #fff;
    border: 1px solid #e1e5eb;
    text-align: center;
    line-height: 109px;
    color: #e1e5eb;
    font-size: 26px;
`

const Edit = (props)=>{
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [imgUrl, setimgUrl] = useState('');
    const { id } = useParams();

    useEffect(()=>{
        // if(pathname.indexOf("edit")>-1){
        //     let arr = pathname.split('/');
        //     let id = arr[arr.length-1];
        //     setNavid(id)
        // }
        console.log(id)
    },[id])

    const ToHome = () => {
        if(id){
            navigate(`/about/${id}`)
        }else{
            navigate(`/`)
        }

    }
    return  <div>
        <HeaderS>
            <FirstB>
                {
                    imgUrl &&  <img src={imgUrl} alt=""/>
                }
                {
                    !imgUrl &&<ServiceLogo>
                        <i className="fa fa-plus"/>
                    </ServiceLogo>
                }

                <Titles>
                    <TitleB>
                        <div className="inputBr">
                            <Input placeholder="Service Name" />
                        </div>
                    </TitleB>
                    {/*<div>created at 2021-11-10</div>*/}
                    {/*<div>updated at 2021-11-10</div>*/}
                </Titles>
            </FirstB>
        </HeaderS>
            <div className="cardB">
                <div>
                    <div className="titleTxt">
                        Description
                    </div>
                    <div className="content">
                        <div className="inputBr textArea">
                            <TextArea  />
                        </div>
                    </div>
                </div>
                <BrdrTop>
                    <ListBrdr>
                        <div className="titleInner">Price Plan</div>
                        <div className="inputBr">
                            <Input placeholder="Price Plan" />
                        </div>
                    </ListBrdr>
                    <ListBrdr>
                        <div className="titleInner">Endpoint</div>
                        <div className="inputBr">
                            <Input placeholder="Endpoint" />
                        </div>
                    </ListBrdr>
                    <ListBrdr>
                        <div className="titleInner">Schema</div>
                        <div className="inputBr">
                            <Input placeholder="Schema" />
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
export default  Edit;
