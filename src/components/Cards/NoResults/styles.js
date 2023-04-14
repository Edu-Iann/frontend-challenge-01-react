import styled from "styled-components";

export const ListSection = styled.header`
  width: 90rem;
  height: 300px;
  display: flex;
  background-color: #F6F6F6;
  margin: auto;

  @media screen and (max-width: 768px) {
    height: 50rem;
    width: 48rem;
    /* flex-direction: column; */
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

    /* height: 35rem; */
  }
`;

export const ListNoOptionWrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

export const ListNoOptionTitle = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 55px;
  color: #A9A9A9;

  @media screen and (max-width: 768px) {
    font-size: 80px;
    width: 28rem;
    margin-bottom: 4rem;
    /* margin-top: 2rem; */
  }
`;

export const ListNoOptionDesc = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #A9A9A9;
  width: 220px;
  word-wrap: break-word;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 768px) {
    width: 18rem;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 5rem;
}
`;

export const NoResultsIcon = styled.img`
  width: 104px;
  height: 203px;

  @media screen and (max-width: 768px) {
    width: 144px;
    height: 264px;
  }
`;