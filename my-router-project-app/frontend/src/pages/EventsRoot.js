import { Outlet } from "react-router-dom";

import EventsNavigation from '../components/EventsNavigation'

const EventRootsLayout = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
};

export default EventRootsLayout;
