import React, { useState,useEffect } from "react";
import styled from "styled-components";

import { Input,Button,Select,Modal } from 'antd';
import { useNavigate,useParams,useLocation } from 'react-router-dom';
import { customAlphabet } from 'nanoid';
import {useSubstrate} from "./api/contracts";

import apiInterface from './api/api';

const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 10);
const { Option } = Select;
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
      display: flex;
      justify-content: flex-start;
      width: 100%;
  }
`;
const ListNew = styled.div`
  display: flex;
  align-items: flex-start;
  line-height: 50px;
  margin-bottom: 30px;
  .inputBr{
      margin-bottom: 0;
      display: flex;
      width: 100%;
      align-items: stretch;
  }
  .providers{
    width: 100%;
  }
  .template{
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom:20px;
  }
`;

const SelectNew = styled(Select)`
 
  display: flex;
  margin-right: 20px;
  .ant-select-selector{
   height: 50px!important;
   width: 200px!important;
   border-radius: 4px!important;
  }
  .ant-select-selector .ant-select-selection-item,.ant-select-selector .ant-select-selection-placeholder{
    line-height: 50px;
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
    cursor: pointer;
    position: relative;
    overflow: hidden;
    .close{
      position: absolute;
      left: 0;
      bottom: 0;
      font-size: 16px;
      cursor: pointer;
      background: rgba(0,0,0,0.6);
      width: 100%;
      height: 30px;
      line-height: 30px;
      z-index: 99;
    }
`;

const Plusdiv =styled.div`
    opacity: 0.4;
    margin-left: 20px;
    cursor: pointer;
    font-size: 24px;
`;


const ModalBg = styled(Modal)`
  border-radius: 8px;
  overflow: hidden;
  padding: 0;
  .ant-modal-footer{
    text-align: left;
    padding: 24px 24px 24px 12px;
    display: flex;
 
    
  }
`;

const ListBrdr2 = styled.div`
  display: flex;
  align-items: center;
  .inputBr{
      margin-bottom: 0;
      display: flex;
      justify-content: flex-start;
      width: 100%;
      margin-left: 20px;
  }
`;
const Edit = ()=>{
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { id } = useParams();
    const { state, dispatch } = useSubstrate();
    const { allAccounts,serviceList } = state;

    const [schema] = useState(['ws','http']);
    const [thisId, setThisId] = useState('');
    const [logo, setLogo] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price_plan, setPricePlan] = useState('');
    const [providers, setProviders] = useState([
        {
            schema: undefined,
            base_url: '',
        }
    ]);

    useEffect(()=>{
        console.log(pathname,id)
        if(pathname.indexOf('edit') !== -1) {
            setThisId(id)

        }
    },[pathname])

    useEffect(()=>{
        if ( serviceList == null) return;
        const detail = serviceList.data.filter(item => item.id === id);
        if(detail.length){
            const { name, logo ,desc,price_plan,providers } = detail[0];
            setName(name);
            setLogo(logo);
            setDesc(desc);
            setPricePlan(price_plan);
            setProviders(providers);
        }
    },[thisId,serviceList])


    const ToHome = () => {
        if(id){
            navigate(`/about/${id}`)
        }else{
            navigate(`/`)
        }

    }
    const handleChange = (e) =>{
        const { name, value} = e.target;
        switch (name) {
            case 'logo':
                setLogo(value);
                break;
            case 'name':
                setName(value);
                break;
            case 'desc':
                setDesc(value);
                break;
            case 'price_plan':
                setPricePlan(value);
                break;
            default:break;
        }
    }
    const handleSelect = (value,index) =>{
        let obj = [ ...providers];
        if (index) {
            obj[index].schema = value;
        }else{
            obj.map((item,i) => {
                if (index === i ){
                    obj[i].schema = value;
                }else{
                    obj[i].schema = undefined;
                }
                return item;
            })
        }
        setProviders(obj);
    }
    const addOptions = () =>{
        let obj = [ ...providers];
        obj.push( {
            schema: undefined,
            base_url: '',
        });
        setProviders(obj);
    }
    const removeOptions = () =>{
        let obj = [ ...providers];
        obj.splice(1,1);
        setProviders(obj)
    }
    const handleBaseURL = (e,index) =>{
        const { value } = e.target;

        let obj = [ ...providers];
        obj[index].base_url = value;
        setProviders(obj);
    }
    const showUpload = () =>{
        setShowModal(true)
    }
    const noUpload = () =>{
        setShowModal(false)
    }
    const removeLogo = () =>{
        setLogo('')
    }
    const confirmSubmit = async () =>{
        if(allAccounts == null){
            dispatch({ type: 'SHOW_ERROR', payload: 'Please connect wallet!' });
            return;
        }
        let obj = {
            name,
            desc,
            logo,
            price_plan,
            user_id: allAccounts[0].address,
            providers
        };
        if(thisId){
            obj.id = thisId;
        }else{
            obj.id = nanoid();
        }
        dispatch({ type: 'SET_LOADING', payload: true });
        await apiInterface.AddNew(obj).then((data)=>{
            dispatch({ type: 'SET_LOADING', payload: null });
            dispatch({ type: 'RELOAD_SERVICE_LIST', payload: true });
            navigate(`/about/${obj.id}`)
        })
    }

    return  <div>
        <ModalBg title="Logo"
                 visible={showModal}
                 centered={true}
                 maskClosable={false}
                 footer={null}
                 onCancel={noUpload}
             >
            <ListBrdr2>
                <div className="titleInner">Logo</div>
                <div className="inputBr">
                    <Input placeholder="Logo Address" allowClear={true} value={logo} name="logo"  onChange={handleChange}/>
                </div>
            </ListBrdr2>
        </ModalBg>
        <HeaderS>
            <FirstB>
                {
                    logo && <ServiceLogo>
                        <img src={logo} alt=""/>
                        <div className="close" onClick={removeLogo}>
                            <i className="fa fa-trash" />
                        </div>
                    </ServiceLogo>

                }
                {
                    !logo &&<ServiceLogo onClick={()=>showUpload()}>
                        <i className="fa fa-plus"/>

                    </ServiceLogo>
                }

                <Titles>
                    <TitleB>
                        <div className="inputBr">
                            <Input placeholder="Service Name" value={name} name="name"  onChange={handleChange}/>
                        </div>
                    </TitleB>
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
                            <TextArea value={desc} name="desc"  onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <BrdrTop>
                    <ListBrdr>
                        <div className="titleInner">Price Plan</div>
                        <div className="inputBr">
                            <Input placeholder="Price Plan" value={price_plan} name="price_plan"  onChange={handleChange}/>
                        </div>
                    </ListBrdr>

                    <ListNew>
                        <div className="titleInner">Providers</div>
                        <div className="providers">
                            {
                                providers.map((item,index)=>(
                                    <div className="template" key={index}>
                                        <div className="inputBr">
                                            <SelectNew value={item.schema}  onChange={(e)=>handleSelect(e,index)} placeholder="Schema">
                                                {
                                                    schema.map(schemaitem=>( <Option key={schemaitem} disabled={index && providers[0].schema === schemaitem} value={schemaitem}>{schemaitem}</Option>))
                                                }
                                            </SelectNew>
                                            <Input placeholder="Base Url" value={item.base_url} name="base_url" onChange={e=>handleBaseURL(e,index)}/>
                                        </div>
                                        {
                                            !index && providers.length < 2  &&  <Plusdiv onClick={()=>addOptions()}>
                                                <i className="fa fa-plus-square-o"/>
                                            </Plusdiv>
                                        }
                                        {
                                            !!index  &&  <Plusdiv onClick={()=>removeOptions()}>
                                                <i className="fa fa-minus-square-o"/>
                                            </Plusdiv>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </ListNew>
                </BrdrTop>
                <BtnGroup>
                    <Button type="primary" onClick={()=>confirmSubmit()}>confirm</Button>
                    <Button onClick={()=>ToHome()}>cancel</Button>
                </BtnGroup>
            </div>

        </div>;
};
export default  Edit;
