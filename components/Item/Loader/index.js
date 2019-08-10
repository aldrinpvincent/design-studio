import styled from "@emotion/styled";

const Loader = ({ loader, onClick }) => {
  const { name, css } = loader;
  const Wrapper = styled.span`
    ${css}}
  `;

  return (
    <>
      <Wrapper onClick={onClick}>
        <div />
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
          border-style: groove;
        }
        .active {
          background-color: rgba(0, 0, 0, 0.05);
          border-style: groove;
        }
      `}</style>
    </>
  );
};

export default Loader;
