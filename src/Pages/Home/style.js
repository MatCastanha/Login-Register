import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: rgb(255, 255, 255);
   height: 100vh;
   font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const Header = styled.header`
   display: flex;
   background-color: #F5F5F5;
   height: 100px;
   width: 100%;
   align-items: center;
   justify-content: flex-end;
`;

export const ContentMain = styled.main`
   width: 100%;   
   display: flex;
   justify-content: center;
`;

export const ContentDiv1 = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-end;

`;

export const ContentDiv2 = styled.div`
   display: flex;
   flex-direction: column;
   background-color:#407bff;
   height: 130px;
   width: 100%;
   align-items: center;
   justify-content: center;
`;

export const ContentDiv3 = styled.div`
   display: flex;
   justify-content: center;
   width: 100%;
   padding: 40px 0;
   background-color: white;
`;

export const P = styled.p`
   text-align: center;
   font-size: 12px;
`;

export const P2 = styled(P)`
   font-size: 10px;
`;

export const H1 = styled.h1`
   text-align: center;
   color: white;
   font-weight: bold;
   font-style: Bold;
   font-size: 30px;
`;

export const H2 = styled.h1`
   margin-top: 20px;
   text-align: center;
   font-size: 30px;
   font-weight: bold;
   color: #407bff;
`;

export const TableWrapper = styled.div`
   margin-top: 10px;
   width: 80%;
   max-width: 900px;
   overflow-x: auto;
`;

export const Table = styled.table`
   width: 100%;
   border-collapse: collapse;
`;

export const THead = styled.thead`
`;

export const TBody = styled.tbody`
`;

export const TR = styled.tr`
`;

export const TH = styled.th`
   font-weight: bold;
   padding: 10px;
   text-align: center;
`;

export const TD = styled(TH)`
   font-weight: normal;
`;

export const Button = styled.button`
   margin: 0 30px;
   padding: 4px 20px;
   background-color: #2a74da;
   color: white;
   border: none;
   border-radius: 4px;
   cursor: pointer;

   &:hover{
      background-color: blue;
   }
`;

export const EditButton = styled(Button)`
   padding: 8px 10px;
`;

export const CancelButton = styled(Button)`
   padding: 6px 10px;
   background-color: gray;
   margin-left: 5px;

   &:hover{
      background-color: red;
   }
`;

export const Nome = styled.span`
  color: #407BFF;
  font-weight: bold;
`;