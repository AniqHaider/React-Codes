import AccordionRunner from "./Utility/AccordionRunner";
import TabRunner from "./Utility/TabRunner";
import DropdownRunner from "./Utility/DropdownRunner";
import BreadcrumbsRunner from "./Utility/BreadcrumbsRunner";
import PaginationRunner from "./Utility/PaginationRunner";
import CarouselRunner from "./Utility/CarouselRunner";
import ListgroupRunner from "./Utility/ListgroupRunner";
import NavbarRunner from "./Utility/NavbarRunner";
import BadgeRunner from "./Utility/BadgeRunner";
import TimelineRunner from "./Utility/TimelineRunner";
import TagRunner from "./Utility/TagRunner";
import RatingRunner from "./Utility/RatingRunner";
import DatePickerRunner from "./Utility/DatePickerRunner";
import TimePickerRunner from "./Utility/TimePickerRunner";
import ModalRunner from "./Utility/ModalRunner";
import ProgressTrackerRunner from "./Utility/ProgressTrackerRunner";
import StepperRunner from "./Utility/StepperRunner";
import Form from "./components/Form";
import Menu from "./components/Menu";

const App = () => {
  return (
    <>
      <NavbarRunner />
      <TimePickerRunner />
      <DatePickerRunner />
      <RatingRunner />
      <ModalRunner />
      <BadgeRunner />
      <TimelineRunner />
      <DropdownRunner />
      <TagRunner />
      <TabRunner />
      <AccordionRunner />
      <BreadcrumbsRunner />
      <PaginationRunner />
      <CarouselRunner />
      <ListgroupRunner />
      <ProgressTrackerRunner />
      <StepperRunner />
      <Form />
      <Menu />
    </>
  );
};
export default App;
