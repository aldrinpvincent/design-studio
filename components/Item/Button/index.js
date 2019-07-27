import styled from "@emotion/styled";

const Button = ({ button, onClick }) => {
  const { name, css } = button;
  const Wrapper = styled.span`
    ${css}}
  `;

  return (
    <span>
      <Wrapper>
        <button onClick={onClick}>{name}</button>
      </Wrapper>
      <style jsx>{`
        span {
          margin: 0 12px;
        }
      `}</style>
    </span>
  );
};

export default Button;
