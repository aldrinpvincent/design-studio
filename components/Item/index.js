import styled from "@emotion/styled";
import { createMarkup } from "../../lib/createMarkup";

const Item = ({ item, onClick }) => {
    const { name, css, html, backgroundColor } = item;
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
          background-color : ${backgroundColor}
        }
        span:hover {
          background-color:  ${backgroundColor || "rgba(0, 0, 0, 0.05)"};
        }
        .active {
          background-color: ${backgroundColor || "rgba(0, 0, 0, 0.05)"};
          border-style: groove;
        }
      `}</style>
        </>
    );
};

export default Item;
