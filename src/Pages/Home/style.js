import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   background-color:rgb(255, 255, 255);
   height: 100vh;
   align-items: center;
   justify-content: center;
`;

export const Content1 = styled.div`
   align-items: center;
   justify-content: center;
   width: 100%;
   max-width: 400px;
   margin-left: 50px;
   padding: 0 50px;
`;
export const Content2 = styled(Content1)`
`;

export const H2 = styled.h2`
   color: black;
   margin: 0;
`;

export const P = styled.p`
   color: black;
   padding: 2.5px 0 16px 0;
`;

export const FormContainer = styled.form`
   display: block;
`;

export const CheckFormContainer = styled.form`
   display: flex;
   align-items: center;
   gap: 8px;
`;

export const Label = styled.label`
   display: block;
   font-size: 14px;
   margin-left: 2.5px;
`;

export const Input = styled.input`
   padding: 10px;
   margin: 0 0 10px;
   border-radius: 10px;
   border: 1px solid;
   width: 100%;
   max-width: 404px;
   box-sizing: border-box;
   gap: 8px;
`;

export const CheckInput = styled.input`
   margin: 0;
   height: 32px;
   cursor: pointer;
`;

export const Button = styled.button`
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
   width: 100%;
   max-width: 404px;
   border-radius: 10px;
   margin: 0;
   padding: 0.5px 120px;
   background-color: blue;
   color: white;
`;