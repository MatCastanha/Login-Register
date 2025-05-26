import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   background-color:rgb(255, 255, 255);
   background-size: cover;
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
export const Content2 = styled.div`
   align-items: center;
   justify-content: center;
   width: 100%;
   max-width: 400px;
   margin-right: 50px;
   padding: 0 50px;
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
`;

export const Label = styled.label`
   display: block;
   font-size: 14px;
   margin-left: 5px;
`;

export const Input = styled.input`
   padding: 10px;
   margin: 0 0 10px;
   border-radius: 10px;
   border: 1px solid;
   width: 404px;
   height: 32px fixed;
   gap: 10px;
`;

export const CheckInput = styled.input`
   border-radius: 10px;
   border: 1px solid;
   height: 32px fixed;
   cursor: pointer;
`;

export const Button = styled.button`
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
   border-radius: 10px;
   margin: 5px 0;
   padding: 0.5px 180px;
   background-color: blue;
   color: white;
`;