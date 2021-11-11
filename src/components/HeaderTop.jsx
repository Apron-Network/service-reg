import React, { useState }  from "react";
import styled from "styled-components";
import { useSubstrate } from "../api/contracts";
import Accounts from '../api/Account';

import { Button,Select } from 'antd';

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

const HeaderTop = ()=>{
    const { state, dispatch } = useSubstrate();

    const [allList, setallList] = useState([]);
    const [selected, setselected] = useState([]);

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
        dispatch({ type: 'SET_ALLACCOUNTS', payload: selected });
    }

    const exitAccount = () => {
        // sessionStorage.removeItem('account');
        dispatch({ type: 'LOAD_ALLACCOUNTS' });
        setselected([]);
        // createHashHistory.push('/home');
        window.location.reload()

    }
    return  <RhtTop>
        {
            !allList.length && <Button type="primary" onClick={() => connectWallet()}>Connect Wallet</Button>
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


    </RhtTop>;
};
export default  HeaderTop;
