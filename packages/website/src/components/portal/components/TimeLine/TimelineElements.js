import styled from 'styled-components'
import { FlexCenter } from '../../../../styles/sharedStyles'

export const TimelineWrapper = styled(FlexCenter)`
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  padding-bottom: 5rem;

  &::before {
    content: '';
    position: absolute;
    height: ${props => props.height && props.height};
    width: 2px;
    left: 50%;
    transform: translateX(-50%);
    overflow: visible !important;
    background: ${props => props.theme.font + 75};

    @media (max-width: 1200px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }
`
