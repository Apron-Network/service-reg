import { createGlobalStyle } from 'styled-components'
import "../assets/scss/fonts.scss"

const GlobalStyle = createGlobalStyle`
    
    body,html{
      background: #f5f6f8;
      padding: 0;
      margin: 0;
      color: #3d5170;
      font-family: "SF-Pro-Display";
    }
    ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
    }
    .ant-btn.ant-btn-primary, .default{
     background: #007bff;
     border: 0;
      }
    
    a{
      color: #3d5170; 
      
    }
    .ant-btn{
      border-radius: 4px;
    }
    .cardB{
      box-shadow: 0 2px 0 rgb(90 97 105 / 11%), 0 4px 8px rgb(90 97 105 / 12%), 0 10px 10px rgb(90 97 105 / 6%), 0 7px 70px rgb(90 97 105 / 10%);
      background: #fff;
      border-radius: 12px;
      box-sizing: border-box;
        .titleTxt{
          font-weight: 500;
          font-size: 16px;
          border-bottom: 1px solid #e1e5eb;
          padding: 24px;
        }
        .content{
          padding: 24px;
          font-size: 14px;
        }
    }
    .mt30{
    margin-top: 20px;
    }
   .inputBr{
        margin-bottom: 10px;
        min-width:300px;
        .ant-input{
         height: 50px;
         border: 1px solid #e1e5eb;
         border-radius: 4px;
         resize: none;
        }
   }
    .textArea{
     .ant-input{
          height: 150px;
        }
  
  }
`

export default GlobalStyle
