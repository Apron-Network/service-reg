import React, { useState,useEffect} from "react";
import styled from "styled-components";
import LogoImg from "../assets/images/apron_logo.svg"
import {useNavigate, useLocation} from "react-router-dom";
import {useSubstrate} from "../api/contracts";

const NavBrdr = styled.div`
  width: 16.6666667%;
  min-width: 250px;
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
  cursor: pointer;
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
  cursor: pointer;
  i{
  margin-right: 10px;
  }
`

const NavBar = ()=>{
    const navigate = useNavigate();

    const { pathname } = useLocation();

    const { state,dispatch } = useSubstrate();
    const {serviceList, allAccounts} = state;
    const [navid, setNavid] = useState('');
    const [list, setList] = useState([

    ]);

    useEffect(()=>{
        if(serviceList==null)return;
        if(pathname.indexOf("about")>-1){
            let arr = pathname.split('/');
            let id = arr[arr.length-1];
            if(serviceList.data.length && id ==='about' ){
                ToUrl(`/about`,serviceList.data[0].id);
                return;
            }else if(!serviceList.data.length){
                ToUrl('/add')
            }
            setNavid(id)
        }
    },[pathname,serviceList]);

    useEffect(()=>{
        if(serviceList == null){
            dispatch({ type: 'RELOAD_SERVICE_LIST', payload: true });
            return;
        }
        let arr = [...serviceList.data]
        setList(arr)
    },[serviceList]);

    const ToUrl = (url,id) => {
        if(id){
            navigate(`${url}/${id}`);
        }else{
            navigate(url)
        }
    }
    const ToAdd = (url) => {
        if(allAccounts == null){
            dispatch({ type: 'SHOW_ERROR', payload: 'Please connect wallet!' });
            return;
        }
        ToUrl(url)
    }

    return  <NavBrdr>
        <div>
            <Logo>
                <img src={LogoImg} alt=""/>
                <div className="logoTit">Gw Panel</div>
            </Logo>
            <AddBar onClick={()=>ToAdd('/add')}>
                <i className="fa fa-plus-square-o" /> Create
            </AddBar>
            <Lft>
                {
                     list.map(item=>(
                        <li key={item.id} className={navid === item.id?'active': ''} onClick={()=>ToUrl('/about',item.id)}>{item.name}</li>
                    ))
                }
            </Lft>
        </div>
        <Setting onClick={()=>ToUrl('/setting')}>
           <i className="fa fa-gear" />
            setting
        </Setting>

    </NavBrdr>;
};
export default  NavBar;
