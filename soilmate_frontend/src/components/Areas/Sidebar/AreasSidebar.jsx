import React, { useEffect, useRef, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { StyledAreasSidebar } from './AreasSidebar.styles';

import { AreasSidebarToggle } from './Toggle';
import { AreasEdit } from './AreasEdit';
import { AreasList } from './AreasList';
import { Requests } from './Requests';
import { RequestSettings } from './RequestSettings';
import { Fields } from './Fields';

import {
  selectAreasList,
  selectSidebarMode,
  selectCurrentArea,
  useAreasActions
} from 'state';
import { areasEvents } from '_events';
import { SIDEBAR_MODE, AOI_TYPE } from '_constants';

const { AREAS, EDIT, REQUESTS, REQUEST_SETTINGS, FIELDS } = SIDEBAR_MODE;

const sidebarHeaders = {
  [AREAS]: 'My areas',
  [EDIT]: 'Edit my area',
  [REQUESTS]: 'All reports - ',
  [REQUEST_SETTINGS]: 'Settings',
  [FIELDS]: 'My fields'
};

export const AreasSidebar = ({ ...props }) => {
  const rootRef = useRef(null);

  const areas = useSelector(selectAreasList);
  const sidebarMode = useSelector(selectSidebarMode);
  const currentAreaId = useSelector(selectCurrentArea);
  const { getLayers, deleteSelectedResult } = useAreasActions();

  const currentArea = areas.find(area => area.id === currentAreaId);
  const sidebarHeader = `${sidebarHeaders[sidebarMode]} ${
    sidebarMode === REQUESTS ? currentArea.name : ''
  }`;

  useEffect(() => {
    if (sidebarMode === FIELDS || sidebarMode === AREAS) {
      deleteSelectedResult();
    }
  }, [sidebarMode, deleteSelectedResult]);

  useEffect(() => {
    return areasEvents.onToggleSidebar(event => {
      rootRef.current.toggle(event.isOpen);
    });
  }, []);

  useEffect(() => {
    getLayers();
  }, [getLayers]);

  const fields = useMemo(
    () => areas.filter(field => field.type === AOI_TYPE.FIELD),
    [areas]
  );
  const areasList = useMemo(
    () => areas.filter(field => field.type === AOI_TYPE.AREA),
    [areas]
  );

  const getSidebarContent = () => {
    switch (sidebarMode) {
      case AREAS:
        return <AreasList areas={areasList} />;
      case EDIT:
        return <AreasEdit currentArea={currentArea} />;
      case REQUESTS:
        return <Requests areaType={currentArea.type} />;
      case REQUEST_SETTINGS:
        return <RequestSettings areas={areas} currentArea={currentArea} />;
      case FIELDS:
        return <Fields fields={fields} />;
      default:
        return null;
    }
  };

  return (
    <>
      <AreasSidebarToggle />
      <StyledAreasSidebar
        {...props}
        ref={rootRef}
        heading={sidebarHeader}
        withUnmountToggle={false}
      >
        {getSidebarContent()}
      </StyledAreasSidebar>
    </>
  );
};