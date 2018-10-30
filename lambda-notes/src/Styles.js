import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  background-color: #f2f1f2;
  border: 1px solid black;
  position: relative;
  top: -10px;
  max-height: 100%;
  height: auto;
`;

export const CardList = styled.div`
  padding-top: 20px;
`;

export const LeftBar = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  height: 1000px;
  background-color: #d3d2d3;
  border: 1px solid grey;
  position: fixed;
  text-align: center;
  top: -1px;
  left: 0px;
`;

export const TitleH1 = styled.h1`
  font-weight: bold;
  font-size: 40px;
  margin-left: 5%;
  margin-bottom: 10px;
  width: 10px;
`;

export const NotesH2 = styled.h2`
  font-weight: bold;
  margin-left: 23%;
`;

export const StyledLink = styled(Link)`
  background-color: #24b8bd;
  font-size: 18px;
  font-weight: bold;
  color: black;
  text-decoration-line: none;
  margin-top: 10px;
  width: 75%;
  padding: 15px;
  margin-left: 5%;
  color: white;
  text-align: center;
`;

export const StyledLinkCard = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  color: black;
  text-decoration-line: none;
`;

export const ContainCards = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: 25%;
  text-align: center;
`;

export const Cards = styled.div`
  display: flex;
  width: 30%;
  height: 200px;
  overflow: hidden;
  border: 1px solid black;
  justify-content: center;
  background-color: white;
  margin-bottom: 40px;
`;

export const CardsH2 = styled.h2`
  color: black;
  font-weight: bold;
  text-decoration-line: none;
`;

export const CardsHr = styled.hr`
  width: 70%;
`;

export const CardsP = styled.p`
  color: black;
  font-size: 16px;
  padding: 5px;
  overflow: hidden;
  height: 50px;
`;

export const Modal = styled.div`
  display: none;
  width: 100vw;
  height: 100vh;
  background: rgba(216, 216, 216, 0.377);
  z-index: 1000;
  justify-content: center;
  align-self: center;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ModalH3 = styled.h3`
  font-size: 20px;
  text-align: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormH1 = styled.h1`
  font-size: 20px;
  text-align: center;
  margin-left: -42.5%;
`;

export const TitleInput = styled.input`
  font-size: 20px;
  margin-left: 23%;
  width: 30%;
  margin-bottom: 20px;
  border: 1.5px solid gray;

  ::-webkit-input-placeholder {
    padding-left: 3%;
  }
`;

export const BodyInput = styled.textarea`
  font-size: 20px;
  margin-left: 23%;
  width: 60%;
  height: 400px;
  border: 1.5px solid gray;

  ::-webkit-input-placeholder {
    padding-top: 1%;
    padding-left: 3%;
  }
`;

export const Formbtn = styled.button`
  width: 196px;
  height: 46px;
  color: white;
  background-color: #24b8bd;
  margin-left: 23%;
  margin-top: 1%;
`;

export const FormContainer = styled.div`
  width: 100vw;
  height: 150vh;
  padding-top: 80px;
`;

export const NoteCardContainer = styled.div`
  width: 70%;
  margin-left: 21%;
  text-align: center;
  height: auto;
`;

export const NoteTitle = styled.h2`
  margin-right: 62%;
  margin-top: 3%;
  font-size: 25px;
`;

export const NoteP = styled.p`
  padding: 5px;
  text-align: start;
  margin-left: 4%;
  line-height: 1.5;
`;

export const EditNoteLink = styled.p`
  padding: 5px;
  text-align: start;
  display: inline-flex;
  margin-left: 85%;
  text-decoration-line: underline;
`;

export const DeleteNoteLink = styled.p`
  padding: 5px;
  text-align: start;
  margin-left: 2%;
  display: inline-flex;
  text-decoration-line: underline;
`;

export const EditFormH1 = styled.h1`
  font-size: 20px;
  text-align: center;
  margin-left: -47.5%;
`;