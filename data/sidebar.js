import DashboardIcon from "../components/icons/dashboard-icon";
import HumanResourcesIcon from "../components/icons/human-resources";
import CorporateIcon from "../components/icons/corporate-icon";
import FinanceIcon from "../components/icons/finance-icon";
import CustomersIcon from "../components/icons/customers-icon";
import SettingsIcon from "../components/icons/settings-icon";
import TemplateIcon from "../components/icons/templates-icon";
const sidebarData = [
  {
    id: 1,
    title: "Dashboard",
    icon: <DashboardIcon />,
    path: "/",
  },
  {
    id: 2,
    title: "Human Resources",
    icon: <HumanResourcesIcon />,
    subMenu: [
      {
        title: "Organisation Structure",
        path: "/organisation-structure",
      },
      {
        title: "Leave-Request",
        path: "/leave-Request",
      },
    ],
  },
  {
    id: 3,
    title: "Corporate",
    icon: <CorporateIcon />,
    subMenu: [
      {
        title: "Business Process",
        path: "/business-process",
      },
    ],
  },
  {
    id: 4,
    title: "Finance",
    icon: <FinanceIcon />,
    subMenu: [
      {
        title: "Cash Request",
        path: "/cash-request",
      },
      {
        title: "Funds Retirement",
        path: "/fund-retirement",
      },
    ],
  },
  {
    id: 5,
    title: "Customers",
    icon: <CustomersIcon />,
    subMenu: [
      {
        title: "Customer List",
        path: "/customer-list",
      },
      {
        title: "Customer Lead",
        path: "/customer-lead",
      },
    ],
  },
  {
    id: 6,
    title: "Settings",
    icon: <SettingsIcon />,
  },
  {
    id: 7,
    title: "Templates",
    icon: <TemplateIcon />,
  },
];
export default sidebarData;
