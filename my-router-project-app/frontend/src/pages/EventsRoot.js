import EventsNavigation from '../components/EventsNavigation'

import { Outlet } from "react-router-dom";

const EventRootsLayout = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
};

export default EventRootsLayout;
