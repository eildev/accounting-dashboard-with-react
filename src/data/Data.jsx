import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import {
  AccountBalanceWallet,
  CurrencyExchangeOutlined,
  RequestQuoteOutlined,
  SavingsOutlined,
} from "@mui/icons-material";

export const navigation = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Accounting",
  },
  {
    segment: "bank",
    title: "Bank",
    icon: <ShoppingCartIcon />,
  },
  {
    segment: "loan-management",
    title: "Loan Management",
    icon: <ShoppingCartIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Analytics",
  },
  {
    segment: "reports",
    title: "Reports",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "sales",
        title: "Sales",
        icon: <DescriptionIcon />,
      },
      {
        segment: "traffic",
        title: "Traffic",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "integrations",
    title: "Integrations",
    icon: <LayersIcon />,
  },
];

export const dashBoardCardData = [
  {
    id: 1,
    name: "Assets",
    value: 9102,
    icon: <AccountBalanceWallet />,
  },
  {
    id: 2,
    name: "Liabilities",
    value: 27891,
    icon: <CurrencyExchangeOutlined />,
  },
  {
    id: 3,
    name: "Income",
    value: 46828,
    icon: <SavingsOutlined />,
  },
  {
    id: 4,
    name: "Expanse",
    value: 34258,
    icon: <RequestQuoteOutlined />,
  },
];