import styled from 'styled-components'

export const NonEssentialWrapper = styled.main`
  text-align: left;
  padding: 0 calc(5vw + 0.5rem);

  ul,
  ol {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0.5rem;
    font-weight: 400;
    font-size: 1.05rem;

    @media (max-width: 768px) {
      font-size: 1.15rem;
    }
  }

  ul li,
  ol li {
    padding: 0.5rem 0;
  }

  h3 {
    font-size: 2rem;
    font-weight: 300;
    padding: 1.5rem 0 0.25rem 0;

    @media (max-width: 768px) {
      font-size: 1.35rem;
      font-weight: 500;
      padding: 1rem 0 0.25rem 0;
    }
  }

  h6 {
    font-size: 1.25rem;
    font-weight: 400;
    padding: 1.5rem 0 0.25rem 0;

    @media (max-width: 768px) {
      font-size: 1.25rem;
      font-weight: 500;
    }
  }

  p {
    font-weight: 400;
    font-size: 1.05rem;

    @media (max-width: 768px) {
      font-size: 1.15rem;
    }
  }
`
