import styled from "@emotion/styled";
import { createMarkup } from "../../../lib/createMarkup";

const Loader = ({ loader, onClick }) => {
  const { name, css, html } = loader;
  const Wrapper = styled.span`
    ${css}
  `;

  const content = {
    __dangerousHTML: createMarkup(html)
  };

  return (
    <>
      <Wrapper onClick={onClick}>
        <section dangerouslySetInnerHTML={createMarkup(html)} />
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
