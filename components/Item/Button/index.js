import styled from '@emotion/styled';

const Item = props => {

  const { data, onClick } = props;
  const Thing = styled.div`
 ${data.css}
  }
`

  return (
    <Thing>
      <button onClick={onClick} className={data.name}>{data.name}</button>
    </Thing>
  );
};

export default Item;
