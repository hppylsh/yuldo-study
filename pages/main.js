import styled from "styled-components";
import RoundButton from "../components/RoundButton";
import LayoutHeader from "../components/LayoutHeader";
import SquareInput from "../components/SquareInput";
import PinkButton from "../components/PinkButton";
import GlobalStyle from "../styled";
import Modal from "../components/Modal";

const Main = () => (
  <div>
    <LayoutHeader /> <RoundButton text="로그인"></RoundButton>
    <SquareInput label="ID" text="아이디를 입력하세요"></SquareInput>
    <PinkButton text="핑크버튼"></PinkButton>
    <Modal title="회원가입"></Modal>
  </div>
);
// 에러펑션

export default Main;
