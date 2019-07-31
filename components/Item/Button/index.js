import styled from "@emotion/styled";

const Button = ({ button, onClick }) => {
  const { name, css } = button;
  const Wrapper = styled.span`
    ${css}}
  `;

  return (
    <>
      <Wrapper>
        <button onClick={onClick}>{name}</button>
      </Wrapper>
      <style jsx>{`
        span {
          margin: 5px 12px;
          display: inline-block;
        }
      `}</style>
    </>
  );
};

export default Button;
