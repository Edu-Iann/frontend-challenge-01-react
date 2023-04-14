import styled from 'styled-components';

export const SectionWrapper = styled.div`
  width: 90rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7.75rem;
  margin: auto;
  background-color: var(--white);

  @media screen and (max-width: 768px) {
    width: 48rem;
    margin: auto;
    flex-direction: column;
    height: 80rem;
    gap: 5rem
  }
`;
