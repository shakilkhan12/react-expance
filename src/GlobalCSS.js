import styled from "styled-components"

export const Navbar = styled.nav`
     width: 100%;
     height: 70px;
     background: #fff;
     display: flex;
     align-items: center;
     justify-content: center;
`;
export const Button = styled.button`
     border: none;
     background: linear-gradient(to right, #6547e3, skyblue);
     color: #fff;
     border-radius: 4px;
     padding: 10px 20px;
     box-shadow: 0 10px 20px rgba(0,0,0,.2);
     cursor: pointer;
     outline:none;
`;
export const ExpenceTracker = styled.div`
     display: flex;
     flex-direction: column;
     width: 400px;
     height: auto;
     margin: 20px auto;
`;
export const TotalExpence = styled.div`
    width: 100%;
    background: #fff;
    padding: 7px 20px;
    color: #3F51B5;
    min-height: 80px;
    border-right: 4px solid #3F51B5;
    display: flex;
    align-items: center;
`;
export const Income = styled(TotalExpence)`
    border-right: 4px solid #7bed9f;
    margin-top: 7px;
    color: #7bed9f;
`;
export const TotalExp = styled(TotalExpence)`
     border-right: 4px solid #e74c3c;
     margin-top:7px; 
     color: #e74c3c; 
     text-decoration: line-through;  
`;
export const Heading = styled.div`
    width: 40%;
    text-align: left;
    color: #333;
    font-size: 17px;
`;
export const ExpenceNumber = styled.div`
    width: 60%;
    text-align: right;
    font-size: 20px;
    font-weight: normal;
`;
export const HistoryContainer = styled.div`
    width: 450px;
    margin: 20px auto;
`;
export const HistoryHeading = styled.div`
    font-size: 16px;
    margin-bottom: 10px;
    border-bottom: 1px dotted #333;
    padding-bottom: 7px;
`;
export const IncomeHistory = styled.div`
    width: 100%;
    padding: 10px 8px;
    background: #fff;
    border-right: 4px solid #7bed9f;
    display: flex;
    margin-top: 6px;

`;

export const ExpencesHistory = styled(IncomeHistory)`
    border-right: 4px solid #e74c3c;
    margin-top: 6px;
    text-decoration: line-through;
    color:red;
`;

export const HistoryTitle = styled.div`
    width: 60%;
    text-align: left;
    color: #333;
`;

export const HistoryNumber = styled.div`
    width: 40%;
    text-align: right;
    color: #333;
    font-weight: 300;
`;
export const ModelContainer = styled.div`
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    display:flex;
    align-items: center;
    justify-content: center;
`;
export const ModelContent = styled.div`
    width: 400px;
    background: #fff;
    padding: 24px;
    border-radius: 3px;
`;
export const Group = styled.div`
    margin: 10px 0;
`;
export const LgButton = styled(Button)`
     width: 100%;
     padding: 13px 20px;
     font-weight: bold;
     text-transform: uppercase;
`;
export const MainHeading = styled.h3`
     font-size: 20px;
     font-weight: 300;
     margin-bottom: 20px;
`;
export const Input = styled.input`
  width: 100%;
  padding: 15px 13px;
  background: #edf2f7;
  border:none;
  outline: none;
  border-radius: 3px;
`;
export const SpanTag = styled.span`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 35px;
   height: 35px;
   background:#7bed9f;
   border-radius: 50%;
   text-align: center;
   color:#fff;
`;
export const Empty = styled.span`
   display: inline-block;
`;
export const ExpTag = styled(SpanTag)`
   background: #e74c3c;
   color: #fff;
`;
export const TotalTag = styled(SpanTag)`
 background: #3F51B5;
 color: #fff;
`;