import styled, { css } from 'styled-components';
import { em, rem, sidebarTopButtons, sidebarBtnMargin } from 'styles';
import { Typography } from 'components/_shared/Typography';

import { Icon } from 'components/_shared/Icon';
import { Select } from 'components/_shared/Select';
import { Button } from 'components/_shared/Button';

export const RequestsSidebarMessage = styled(Typography).attrs({
  element: 'p',
  variant: 'body2'
})`
  ${({ theme }) => css`
    text-align: center;
    padding: ${em([theme.spacing[11], theme.spacing[11], theme.spacing[8]])};
  `}
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${em(sidebarBtnMargin)};
    text-align: right;
    button:first-child {
      margin-right: ${em(11)};
      border: ${theme.borders.default(theme.fontSizes[2])};
    }
  `}
`;

export const StyledIcon = styled(Icon)`
  display: inline-flex;
  transform: rotate(${props => (props.up ? `0` : `180deg`)});
`;

export const ButtonTopWrapper = styled.div`
  ${sidebarTopButtons};
`;

export const TabsWrapper = styled.div`
  display: flex;
`;

export const TabItem = styled.div`
  ${({ theme, isActive }) => css`
    width: 50%;
    border-bottom: ${theme.borders.default({ fontSize: theme.fontSizes[1] })};
    color: ${isActive ? theme.colors.primary.p2 : theme.colors.nature.n3};
    border-color: ${isActive ? theme.colors.primary.p2 : theme.colors.nature.n3};
    cursor: pointer;
    text-align: center;
  `}
`;

export const StyledSelect = styled(Select)`
  ${({ theme }) => css`
    max-width: 68%;
    & > div {
      border: none;
      color: ${theme.colors.nature.n4};
      font-size: ${rem(13)};
    }
  `}
`;

export const DeleteButton = styled(Button)`
  margin-left: auto;
`;
export const ModalButtonsWrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    & button:first-child {
      margin-right: ${em(32, theme.fontSizes[2])};
      border: ${theme.borders.default(theme.fontSizes[2])};
    }
  `}
`;
