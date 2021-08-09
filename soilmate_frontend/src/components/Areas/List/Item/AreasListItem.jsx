import React, { useRef, useState } from 'react';
import { isNumber } from 'lodash-es';

import { Checkbox } from 'components/_shared/Checkbox';

import {
  AreasListItemBody,
  AreasListItemSize,
  AreasListItemMenu,
  AreasListItemName,
  AreasListItem,
  AreasListItemButton,
  AreasIconButton,
  AreasIconButtonsHolder
} from './AreasListItem.styles';

import { getPolygonPositions, getElementBottom } from 'utils/helpers';
import { areasEvents } from '_events';
import { SIDEBAR_MODE, MODAL_TYPE } from '_constants';

import { useAreasActions, useMapActions } from 'state';

export const ListItem = ({ area = {}, parent, ...props }) => {
  const {
    setCurrentArea,
    setSidebarMode,
    setSelectedEntityId,
    deleteSelectedEntityId,
    deleteSelectedResult
  } = useAreasActions();
  const { setLayerOpacity } = useMapActions();
  const areaRef = useRef(null);
  const [isTopPosition, setIsTopPosition] = useState(false);
  const coordinatesArray = getPolygonPositions(area).coordinates[0][0];
  const coordinates = [
    ['X', +coordinatesArray[0].toFixed(1)],
    ['Y', +coordinatesArray[1].toFixed(1)]
  ];
  const hasCoordinates = coordinates.some(([, c]) => c && isNumber(c));
  const handleChangeCheckbox = isChecked => {
    if (isChecked) {
      setSelectedEntityId(area.id);
    } else {
      deleteSelectedEntityId(area.id);
    }
  };

  return (
    <AreasListItem
      {...props}
      top={isTopPosition}
      ref={areaRef}
      hasCoordinates={hasCoordinates}
      onClick={() => {
        setCurrentArea(area.id);
        deleteSelectedResult();
        setLayerOpacity(1);
      }}
    >
      <Checkbox onChange={handleChangeCheckbox} />

      <AreasListItemBody>
        <AreasListItemName>{area.name}</AreasListItemName>
        {area.size && <AreasListItemSize>Size: {area.size} m2</AreasListItemSize>}
      </AreasListItemBody>

      <AreasIconButtonsHolder isActive={props.isActive}>
        <AreasIconButton
          icon='Plus'
          onClick={() => setSidebarMode(SIDEBAR_MODE.REQUEST_SETTINGS)}
        ></AreasIconButton>
        <AreasIconButton
          icon='List'
          onClick={() => {
            setCurrentArea(area.id);
            setSidebarMode(SIDEBAR_MODE.REQUESTS);
          }}
        ></AreasIconButton>
      </AreasIconButtonsHolder>

      <AreasListItemMenu
        onClick={() => {
          setIsTopPosition(getElementBottom(parent) <= getElementBottom(areaRef));
        }}
      >
        <AreasListItemButton
          onClick={() => {
            setCurrentArea(area.id);
            setSidebarMode(SIDEBAR_MODE.EDIT);
          }}
        >
          Edit
        </AreasListItemButton>
        <AreasListItemButton onClick={() => setSidebarMode(SIDEBAR_MODE.FIELDS)}>
          Check fields
        </AreasListItemButton>
        <AreasListItemButton
          onClick={() => {
            setCurrentArea(area.id);
            setSidebarMode(SIDEBAR_MODE.REQUESTS);
          }}
        >
          View reports
        </AreasListItemButton>
        <AreasListItemButton
          variantType='danger'
          onClick={() =>
            areasEvents.toggleModal(true, { type: MODAL_TYPE.DELETE, id: area.id })
          }
        >
          Delete
        </AreasListItemButton>
      </AreasListItemMenu>
    </AreasListItem>
  );
};
