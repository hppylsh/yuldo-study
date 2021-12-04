import styled from "styled-components";

const RoundButton = ({ text, color, size = 217 }) => {
  // 글자, 색, 가로크기를 조정할 수있는 버튼 생성
  return (
    <RButton color={color} size={size}>
      {text}
    </RButton>
  );
};

export default RoundButton;

//컴포넌트
const RButton = styled.div`
  background: ${(props) => (props.color ? props.color : "#393535")};
  width: ${(props) => props.size}px;
  height: 44px;
  border-radius: 22px;
  opacity: 1;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 가로정렬 justify-content: center;
// 세로정렬 align-items: center;
// flex-direction row/column 주의하기
