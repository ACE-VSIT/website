import styled from 'styled-components'
import { FlexCenter } from '../../styles/sharedStyles'

export const FacultyWrapper = styled(FlexCenter)`
  flex-direction: column;
  padding: 0.5rem 0 5.5rem 0;

  @media (max-width: 768px) {
    padding: 0.5rem 0 2rem 0;
  }
`
