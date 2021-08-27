import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  margin-left: 1rem;

  > h4 {
    margin: 0;
  }
`;

const Image = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
`;

export { Image, Wrapper, Description };
