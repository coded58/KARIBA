import TotalEmployeeIcon from "../components/icons/totalEmployees-icon";
import ActiveEmployeeIcon from "../components/icons/activeEmployees-icon";
import NewEmployeeIcon from "../components/icons/newEmployees-icon";
import OnboardIcon from "../components/icons/onboard-icon";
const OrganizationData = [
  {
    id: 1,
    title: "Total Employees",
    icon: <TotalEmployeeIcon />,
    count: 78,
  },
  {
    id: 2,
    title: "Active Employees",
    icon: <ActiveEmployeeIcon />,
    count: 65,
  },
  {
    id: 3,
    title: "New Employees",
    icon: <NewEmployeeIcon />,
    count: 16,
  },
  {
    id: 4,
    title: "Onboarded Employees",
    icon: <OnboardIcon />,
    count: 9,
  },
];

export default OrganizationData;
