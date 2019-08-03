import styled from "@emotion/styled";

const Loader = ({ loader, onClick }) => {
  const { name, css } = loader;
  const Wrapper = styled.span`${css}}`;

  return (
    <>
      <Wrapper>
        <div onClick={onClick}></div>
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

export default Loader;
