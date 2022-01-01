import styled from "styled-components";
import RoundButton from "../components/RoundButton";
import LayoutHeader from "../components/LayoutHeader";
import SquareInput from "../components/SquareInput";
import PinkButton from "../components/PinkButton";
import GlobalStyle from "../styled";
import Modal from "../components/Modal";
import BasicBoard from "../components/BasicBoard";
import CommentsBox from "../components/CommentsBox";

const Main = () => (
  <div>
    <LayoutHeader />
    <BasicBoard></BasicBoard>
    <CommentsBox />
  </div>
);
// 에러펑션

export default Main;
