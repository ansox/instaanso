import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariantsMap } from '../foundation/Text';
import { breakpointsMedia } from '../theme/utils/breakpointMedia';
import { propToStyle } from '../theme/utils/propToStyle';

const ButtonGhost = css`
  background: transparent;
  color:  ${props => {
    return get(props.theme, `colors.${props.variant}.color`);
  }};
`;

const ButtonDefault = css`
  color:  ${props => {
    return get(props.theme, `colors.${props.variant}.contrastText`);
  }};
  background-color: ${props => {
    return get(props.theme, `colors.${props.variant}.color`);
  }};
`

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${({ ghost }) => ghost ? ButtonGhost : ButtonDefault}
  &:hover,
  &:focus {
    opacity: .5;
  };

  ${breakpointsMedia({
  xs: css`
      ${TextStyleVariantsMap.smallestException}
    `,
  md: css`
      ${TextStyleVariantsMap.paragraph1}
    `,
})}

  ${propToStyle('display')}
  ${propToStyle('margin')}
`;