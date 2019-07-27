import styled from '@emotion/styled';

const Button = ({ button, onClick }) => {

  const { name, css } = button;
  const Wrapper = styled.section`${css}}`;

  return (
    <Wrapper>
      <button onClick={onClick}>{name}</button>
    </Wrapper>
  );
};

export default Button;
