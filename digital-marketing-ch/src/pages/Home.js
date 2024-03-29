
import HeroComponent from "../components/HeroComponent/HeroComponent";
import InformationComponent from "../components/InformationComponent/InformationComponent";
import SuccessComponent from "../components/SuccessComponent/SuccessComponent";
import ConceptComponent from "../components/ConceptComponent/ConceptComponent";
import ProgramComponent from "../components/ProgramComponent/ProgramComponent";
import PracticeComponent from "../components/PracticeComponent/PracticeComponent";
import EarningComponent from "../components/EarningComponent/EarningComponent";
import DiplomaComponent from "../components/DiplomaContent/DiplomaComponent";
import AfterAcademyComponent from "../components/AfterAcademy/AfterAcademyComponent";
import BonusComponent from "../components/BonusComponent/BonusComponent";
import TeamMembersComponent from "../components/TeamMembersComponent/TeamMembersComponent";
import OffersComponent from "../components/OffersComponent/OffersComponent";
// import ScheduleComponent from "../components/ScheduleCoordinator/ScheduleComponent";
import HowToFinanceComponent from "../components/HowToFinance/HowToFinanceComponent";
import DuringCreativeHub from "../components/DuringCreativeHub/DuringCreativeHub";
import SuccessStories from "../components/SuccessStories/SuccessStories";
import ArijanaVideoComponent from "../components/ArijanaVideoComponent/ArijanaVideoComponent";
import TestimonialsComponent from "../components/TestimonialsComponent/TestimonialsComponent";
import TeamMembersMobileComponent from "../components/TeamMembersComponent/TeamMemberMobileComponent";
import GetMegaCourse from "../components/Get+MegaCoursesComponent/GetMegaCourse";
import ValidatedDegree from "../components/ValidatedDegreeComponent/ValidatedDegree";
import ContactUsComponent from "../components/ContactUsComponent/ContactUsComponent";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="home-page">
      <HeroComponent />
      <InformationComponent />
      <SuccessComponent />
      <ConceptComponent />

      <ProgramComponent />
      <GetMegaCourse />
      <PracticeComponent />
      <TestimonialsComponent />
      <EarningComponent />
      <DiplomaComponent />
      <ValidatedDegree />
      <AfterAcademyComponent />
      <BonusComponent />
      {isMobile ? <TeamMembersMobileComponent /> : <TeamMembersComponent />}
      <OffersComponent />

      <HowToFinanceComponent />
      <DuringCreativeHub />
      <SuccessStories />
      <ArijanaVideoComponent />
      <ContactUsComponent />
    </div>
  );
};

export default Home;
