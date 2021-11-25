import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useNavigate, useParams} from 'react-router-dom';
import { Modal } from 'antd';
import {useSubstrate} from "./api/contracts";


const HeaderS = styled.div`
  display: flex;
  justify-content: space-between;
`

const FirstB = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  img{
    border-radius: 110px;
    width: 110px;
    height: 110px;
    overflow: hidden;
  }
`;

const Titles = styled.div`
  margin-left: 20px;
`;

const TitleB = styled.div`
  font-size: 26px;
`;

const Second = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 24px;
  flex-shrink: 0;
  //button{
  //    height: 50px;
  //    border-radius: 8px;
  //    margin-left: 20px;
  //    color: #ffffff;
  //    border: 0;
  //    width: 110px;
  //}
 
  i{
  margin-right: 10px;
  }
  .bg{
    //color: #ffffff;
    text-align: center;
    margin-left: 20px;
    cursor: pointer;
     &:hover{
        color: #3241F4; 
  }
  }

`;

const BrdrTop = styled.div`
  border-top: 1px solid #e1e5eb;
  padding: 24px;
   .titleInner{
      font-weight: 500;
      font-size: 16px;
      padding-right: 20px;
    }
`
const ListBrdr = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  .schema{
    padding-right: 20px;
  }
  .lineInner{
    width: 100%;
    display: flex;
  }
  
`
const ModalBg = styled(Modal)`
  border-radius: 8px;
  overflow: hidden;
  padding: 0;
  .ant-modal-footer{
    text-align: left;
    padding: 24px 24px 24px 12px;
    display: flex;
    button{
      height: 40px;
      min-width: 90px;
      &:nth-child(2){
        order: 0!important;
        background: #007bff;
       margin-right: 20px;
      }
      &:first-child{
      order: 1;
      }
    }
  }
  
`;

const TitleH5 = styled.div`
  font-size: 20px;
`;

const TitleTips = styled.div`
  color: #c4183c!important;
  padding-top: 10px;
`;

const About = ()=>{
    const navigate = useNavigate();
    const { id } = useParams();

    const { state,dispatch } = useSubstrate();
    const { serviceList, allAccounts } = state;

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [detailLogo, setDetailLogo] = useState('');
    const [detailName, setDetailName] = useState('');
    const [detailDesc, setDetailDesc] = useState('');
    const [detailPrice, setDetailPrice] = useState('');
    const [detailProviders, setDetailProviders] = useState([]);

    useEffect(()=>{
        // if(pathname.indexOf("edit")>-1){
        //     let arr = pathname.split('/');
        //     let id = arr[arr.length-1];
        //     setNavid(id)
        // }
        console.log("about",id,serviceList);
        if(!serviceList || serviceList.data == null) return;
       const detail = serviceList.data.filter(item=>item.id === id);
       console.log("=====detail",detail[0])
        if(detail.length){
            const { name, logo ,desc,price,providers } = detail[0];
            setDetailName(name);
            setDetailLogo(logo);
            setDetailDesc(desc);
            setDetailPrice(price);
            setDetailProviders(providers);
        }

    },[id,serviceList]);

    const ToEdit = () => {
        if(allAccounts == null){
            dispatch({ type: 'SHOW_ERROR', payload: 'Please connect wallet!' });
            return;
        }
        navigate(`/edit/${id}`)
    }

    const showModal = () => {
        if(allAccounts == null){
            return;
        }
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        navigate(`/about`)

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return  <div>

        <ModalBg title="Delete Service" centered={true} maskClosable={false} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <TitleH5>Do you want delete the service?</TitleH5>
        <TitleTips> {detailName}</TitleTips>
    </ModalBg>
        <HeaderS>
            <FirstB>
                <img src={detailLogo} alt=""/>
                <Titles>
                    <TitleB>
                        {detailName}
                    </TitleB>
                    {/*<div>created at 2021-11-10</div>*/}
                    {/*<div>updated at 2021-11-10</div>*/}
                </Titles>
            </FirstB>
            <Second>
                <span className="bg" onClick={()=>ToEdit()}><i className="fa fa-edit" />Edit</span>
                <span className="bg" onClick={()=>showModal()}><i className="fa fa-trash" />Delete</span>
            </Second>
        </HeaderS>

            <div className="cardB">
                <div>
                    <div className="titleTxt">
                        Description
                    </div>
                    <div className="content">
                        {detailDesc}
                    </div>
                </div>
                <BrdrTop>
                    <ListBrdr>
                        <div className="titleInner">Price Plan</div>
                        <div>{detailPrice}</div>
                    </ListBrdr>
                    <ListBrdr>
                        <div className="titleInner">Providers</div>
                        <div>
                            {
                                !!detailProviders.length && detailProviders.map(p=>(<div className="lineInner" key={p.schema}>
                                    <div className="schema">{p.schema}</div><div className="base">{p.base_url}</div>
                                </div>))
                            }
                        </div>

                    </ListBrdr>
                </BrdrTop>
            </div>

        </div>;
};
export default  About;
