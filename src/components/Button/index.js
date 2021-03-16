import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { TextStyleVariantsMap } from '../foundation/Text';
import breakpointsMedia from '../theme/utils/breakpointMedia';
import propToStyle from '../theme/utils/propToStyle';
import Link from '../Link';

const ButtonGhost = css`
  background: transparent;
  color:  ${(props) => get(props.theme, `colors.${props.variant}.color`)};
`;

const ButtonDefault = css`
  color:  ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
  background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
`;

const ButtonWrapper = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
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

  &:disabled {
    cursor: not-not-allowed;
    opacity: .2;
  }

  ${({ fullWidth }) => fullWidth && css`
    width: 100%
  `};

  ${propToStyle('display')}
  ${propToStyle('margin')}
`;

function Button({ href, children, ...props }) {
  const hasHref = Boolean(href);

  const tag = hasHref ? Link : 'button';

  return (
    <ButtonWrapper as={tag} href={href} {...props}>
      {children}
    </ButtonWrapper>
  );
}

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  href: undefined,
};

export default Button;
