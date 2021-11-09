import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { Modal } from 'antd';


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
  align-items: center;
  margin-bottom: 30px;
  
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
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [imgUrl, setimgUrl] = useState('');

    const ToEdit = () => {

        navigate('/edit')
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return  <div>

        <ModalBg title="Delete Service" centered={true} maskClosable={false} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <TitleH5>Do you want delete the service?</TitleH5>
        <TitleTips>Polkadot Push Notification</TitleTips>
    </ModalBg>
        <HeaderS>
            <FirstB>
                <img src="https://img1.baidu.com/it/u=2353090175,990247533&fm=26&fmt=auto" alt=""/>
                <Titles>
                    <TitleB>
                        Add New Postfsf
                    </TitleB>
                    <div>created at 2021-11-10</div>
                    <div>updated at 2021-11-10</div>
                </Titles>
            </FirstB>
            <Second>
                <span className="bg" onClick={()=>ToEdit()}><i className="fa fa-edit" />Edit</span>
                <span className="bg" onClick={showModal}><i className="fa fa-trash" />Delete</span>
            </Second>
        </HeaderS>

            <div className="cardB">
                <div>
                    <div className="titleTxt">
                        Description
                    </div>
                    <div className="content">
                        A decentralized platform that provides infrastructure services for DApp developers,DApp users,and operators.A decentralized platform that provides infrastructure services for DApp developers,DApp users,and operators.A decentralized platform that provides infrastructure services for DApp developers,DApp users,and operators.A decentralized platform that provides infrastructure services for DApp developers,DApp users,and operators.
                    </div>
                </div>
                <BrdrTop>
                    <ListBrdr>
                        <div className="titleInner">Price Plan</div>
                        <div>Free</div>
                    </ListBrdr>
                    <ListBrdr>
                        <div className="titleInner">Endpoint</div>
                        <div>api.example.com</div>
                    </ListBrdr>
                    <ListBrdr>
                        <div className="titleInner">Schema</div>
                        <div>websocket</div>
                    </ListBrdr>
                </BrdrTop>

            </div>

        </div>;
};
export default  About;
