import styled from "@emotion/styled";

const Button = ({ button, onClick }) => {
  const { name, css } = button;
  const Wrapper = styled.span`
    ${css}}
  `;

  return (
    <>
      <Wrapper onClick={onClick}>
        <button>{name}</button>
      </Wrapper>
      <style jsx>{`
        span {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100px;
          box-sizing: border-box;
        }
        span:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }
        .active {
          background-color: rgba(0, 0, 0, 0.05);
          border-style: groove;
        }
      `}</style>
    </>
  );
};

export default Button;
