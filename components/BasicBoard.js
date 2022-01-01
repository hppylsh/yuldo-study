import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const BasicBoard = () => {
  //함수의리턴값 1.변수, 2.함수
  let [contents, setContents] = useState([]);
  // react에서는 변수의 상태를 바꾸어주어야 인식함(setContents 사용)
  // ☆ 리액트의 불변성
  // 불변성은 어떤 값을 직접적으로 변경하지 않고 새로운 값을 만들어내는 것입니다.
  // 필요한 값을 변형해서 사용하고 싶다면 어떤 값의 사본을 만들어서 사용해야 합니다.

  const getPost = async () => {
    let boardList = await axios.get("http://localhost:3060/post");
    setContents(boardList.data);
  };
  //HOOK
  //- useState와 useEffect를 사용하여 특징적으로 state와 lifecycle과 같은 기능을 사용 가능하게 해준다
  useEffect(() => {
    getPost();
  }, []);

  return (
    <Container>
      <TitleContainer>
        <Category>구분</Category>
        <TextTitle>글제목</TextTitle>
        <IconContainer>작성일</IconContainer>
        <IconContainer>좋아요♡</IconContainer>
      </TitleContainer>
      <ContentsContainer>
        {contents
          ? contents.map((item, index) => (
              <div key={index + item.date}>
                <CategoryContent>{item.category}</CategoryContent>
                <TitleContent>
                  {item.title}
                  <span> [{item.comment_count}]</span>
                </TitleContent>
                <Iconcontent>{item.date}</Iconcontent>
                <Iconcontent>{item.like}</Iconcontent>
              </div>
            ))
          : "내용이 없습니다"}
      </ContentsContainer>
    </Container>
  );
};
export default BasicBoard;

// 리액트에서는 for문대신 map을 사용함

const Container = styled.div`
  width: 100%;
  font-size: 13px;
  color: #1e1e1e;
`;

const TitleContainer = styled.div`
  border-bottom: 1px solid #1e1e1e;
  height: 44px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const Category = styled.div`
  width: 150px;
`;
const TextTitle = styled.div`
  width: 100%;
`;
const IconContainer = styled.div`
  width: 150px;
`;

const CategoryContent = styled.div`
  width: 150px;
  padding-left: 30px;
`;
const TitleContent = styled.div`
  width: 100%;

  span {
    color: #ff4343;
    margin-left: 5px;
  }
`;
const Iconcontent = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
`;

// div를 flex처리해야함
const ContentsContainer = styled.div`
  div {
    display: flex;
  }
`;
