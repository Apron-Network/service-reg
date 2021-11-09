import React from "react";
import styled from "styled-components";
import LogoImg from "../assets/images/apron_logo.svg"
import {useNavigate} from "react-router-dom";

const NavBrdr = styled.div`
  width: 16.6666667%;
  background: #fff;
  box-shadow: 0 0.125rem 9.375rem rgb(90 97 105 / 10%), 0 0.25rem 0.5rem rgb(90 97 105 / 12%), 0 0.9375rem 1.375rem rgb(90 97 105 / 10%), 0 0.4375rem 2.1875rem rgb(165 182 201 / 10%);
  z-index: 9;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const  Logo = styled.div`
  border-bottom: 1px solid #e1e5eb;
  height: 59px;
  font-weight: bold;
  font-size:18px;
  display: flex;
  padding-left: 25px;
  align-items: center;
  img{
    height: 20px;
    margin-right: 10px;
    display: inline-block;
  }
  .logoTit{
    margin-bottom: -3px;
  }
`;

const Lft = styled.ul`
    height: calc(100vh - 200px);
    overflow-y: auto;
  li{
    padding: 15px 0 15px 25px;
    border-left: 2px solid white;
    &.active,&:hover{
        background: #fbfbfb;
       border-left: 2px solid #007bff;
       color: #007bff;
       cursor: pointer;
      }
  }
  
`;

const Setting = styled.div`
  padding: 24px;
  font-size: 16px;
  height: 70px;
  box-sizing: border-box;
color: #007bff;
  i{
  margin-right: 10px;
  }
`;

const AddBar = styled.div`
    padding: 24px;
    background: #f5f6f8;
  border-bottom: 1px solid #e1e5eb;
  font-size: 18px;
   height: 80px;
  box-sizing: border-box;
  text-transform: uppercase;
  
  i{
  margin-right: 10px;
  }
    //color: #ffffff;
`

const NavBar = ()=>{
    const navigate = useNavigate();

    const ToUrl = (url) => {
        navigate(url)
    }

    return  <NavBrdr>
        <div>
            <Logo>
                <img src={LogoImg} alt=""/>
                <div className="logoTit">Gw Panel</div>
            </Logo>
            <AddBar>
                <i className="fa fa-plus-square-o" />Create</AddBar>
            <Lft>
                <li className="active">service1</li>
                <li>service1</li>
                <li>service1</li>
                <li>service1</li>
            </Lft>
        </div>
        <Setting onClick={()=>ToUrl('/setting')}>
           <i className="fa fa-gear" />
            setting
        </Setting>
    </NavBrdr>;
};
export default  NavBar;
