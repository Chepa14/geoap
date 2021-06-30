import styled, { css } from 'styled-components';

import { rem } from 'styles';

import { Button, ButtonIcon } from '../Button';
import { Paper } from '../Paper';
import { Typography } from '../Typography';

export const SidebarBody = styled.div``;

export const SidebarHeading = styled(Typography).attrs({
  element: 'h2',
  variant: 'h2'
})``;

export const SidebarButtonClose = styled(Button).attrs({
  variant: 'floating',
  icon: 'Cross'
})`
  ${({ theme }) => css`
    position: absolute;
    right: ${rem(theme.spacing[8])};
    top: ${rem(theme.spacing[10])};

    ${ButtonIcon} {
      width: ${rem(12)};
    }
  `}
`;

export const StyledSidebar = styled(Paper).attrs({ padding: 4 })`
  ${({ theme, withUnmountToggle }) => [
    css`
      position: absolute;
      top: 0;
      left: 0;
      width: ${rem(300)};
      height: 100%;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      z-index: ${theme.zIndexes[1]};
    `,
    !withUnmountToggle &&
      css`
        &:not(.isOpen) {
          display: none;
        }
      `
  ]}
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    & button:first-child {
      margin-right: 32px;
      border: 1px solid ${theme.colors.nature.n1};
    }
  `}
`;
