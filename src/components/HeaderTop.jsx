import React, { useState,useEffect }  from "react";
import styled from "styled-components";
import { useSubstrate } from "../api/contracts";
import Accounts from '../api/Account';
import apiInterface from '../api/api';
import { Button, Select, Alert } from 'antd';
import { Loading3QuartersOutlined } from '@ant-design/icons';

const AlertBg = styled(Alert)`
    position: fixed;
    top:60px;
    width: 100%;
    z-index: 99;
`

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

const SelectWidth = styled(Select)`
  width: 200px;
  position: relative;
`;

const Addr = styled.div`
  i{
    margin:0 10px 0 20px;
  }
`;

const Logout = styled.span`
  margin-left: 20px;
  cursor: pointer;
`;

const Mask = styled('div')`
    position: fixed;
    z-index: 9999;
    background:rgba(0,0,0,0.5);
    width: 100vw;
    height: 100vh;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeaderTop = ()=>{
    const { dispatch, state } = useSubstrate();
    const { errorTips,reloadList,loading } = state;

    const [allList, setallList] = useState([]);
    const [selected, setselected] = useState([]);


    useEffect(()=>{
        console.log("===reloadList==",reloadList)
        if(reloadList === false) return;
        const getData = async () =>{
            dispatch({ type: 'SET_LOADING', payload: true });
           await apiInterface.getList().then(data=>{
                dispatch({ type: 'SERVICE_LIST', payload: data });
                dispatch({ type: 'RELOAD_SERVICE_LIST', payload: false });
                dispatch({ type: 'SET_LOADING', payload: null });
            }).catch(err=>{
                console.error("======",err)
               getData();
            })
        }
        getData();
    },[reloadList]);
    useEffect(() => {
        let selectedStorage = JSON.parse(sessionStorage.getItem('account'));
        if (selectedStorage) {
            setselected(selectedStorage)
            dispatch({ type: 'SET_ALLACCOUNTS', payload: selectedStorage });
        }
        dispatch({ type: 'RELOAD_SERVICE_LIST', payload: true });
    }, []);

    const connectWallet = async () => {
        const accoutlist = await Accounts.accountlist();
        if(accoutlist.status && accoutlist.allAccounts.length){
            setallList(accoutlist.allAccounts);
        }

    }
    const AddresstoShow = (address) => {
        let frontStr = address.substring(0, 4);
        let afterStr = address.substring(address.length - 4, address.length);
        return `${frontStr}...${afterStr}`
    }
    const selectAccounts = async (val) => {
        let selected = allList.filter(i => i.address === val);
        setselected(selected);
        sessionStorage.setItem("account",JSON.stringify(selected));
        dispatch({ type: 'SET_ALLACCOUNTS', payload: selected });
        dispatch({ type: 'SHOW_ERROR', payload: null });
    }

    const exitAccount = () => {
        sessionStorage.removeItem('account');
        dispatch({ type: 'LOAD_ALLACCOUNTS' });
        setselected([]);
        window.location.reload()

    }
    return <div>
        {
             errorTips!=null &&  <AlertBg  type="error" message={errorTips} showIcon />
        }
        {
            loading !=null &&<Mask>
                <Loading3QuartersOutlined style={{ fontSize: 100, color: 'rgba(255,255,255,0.6)' }} spin  />
            </Mask>
        }

        <RhtTop>
            {
                !selected.length && !allList.length && <Button type="primary" onClick={() => connectWallet()}>Connect Wallet</Button>
            }
            {!!selected.length &&
            <Addr>Hi, <span>{selected[0].meta.name}</span>
                <i className="fa fa-database" />
                {AddresstoShow(selected[0].address)}
            </Addr>
            }
            {
                !selected.length && <div>
                    {
                        !!allList.length &&<SelectWidth onChange={selectAccounts}>
                            {
                                allList && allList.length && allList.map((opt) =><Select.Option value={opt.address} key={opt.address}>{opt.meta.name}</Select.Option>)
                            }
                        </SelectWidth>
                    }
                </div>
            }
            {
                !!selected.length && <Logout onClick={() => exitAccount()}>
                    Logout
                </Logout>
            }
        </RhtTop>
        </div> ;
};
export default  HeaderTop;
