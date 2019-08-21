import styled from "@emotion/styled";
import { createMarkup } from "../../../lib/createMarkup";

const Button = ({ button, onClick }) => {
  const { name, css, html } = button;
  const Wrapper = styled.span`
    ${css}}
  `;

  const content = {
    __dangerousHTML: createMarkup(html)
  };


  return (
    <>
      <Wrapper onClick={onClick}>
        <div dangerouslySetInnerHTML={createMarkup(html)} />
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
