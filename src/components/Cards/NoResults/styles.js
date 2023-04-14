import styled from "styled-components";

export const ListSection = styled.header`
  width: 90rem;
  height: 18.75rem;
  display: flex;
  background-color: var(--light-gray);
  margin: auto;

  @media screen and (max-width: 768px) {
    height: 50rem;
    width: 48rem;
    gap: 5rem
  }
`;

export const ListDisplay = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 48rem;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ListNoOptionWrapper = styled.div``;

export const ListNoOptionTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 2.813rem;
  line-height: 3.438rem;
  color: var(--grayish);

  @media screen and (max-width: 768px) {
    font-size: 5rem;
    width: 28rem;
    margin-bottom: 4rem;
  }
`;

export const ListNoOptionDesc = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.688rem;
  color: var(--grayish);
  width: 13.75rem;
  word-wrap: break-word;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 768px) {
    width: 18rem;
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 5rem;
}
`;

export const NoResultsIcon = styled.img`
  width: 6.5rem;
  height: 12.688rem;

  @media screen and (max-width: 768px) {
    width: 9rem;
    height: 16.5rem;
  }
`;