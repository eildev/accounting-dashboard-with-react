import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import {
  AccountBalanceWallet,
  AlignVerticalTopRounded,
  Article,
  AssignmentInd,
  AutoAwesomeMosaicRounded,
  CurrencyExchangeOutlined,
  DashboardCustomizeRounded,
  GridView,
  RequestQuoteOutlined,
  SavingsOutlined,
} from "@mui/icons-material";
import AssetImage from "../../public/dashboard/assets.png";
import LiabilitiesImage from "../../public/dashboard/liabilities.png";
import IncomeImage from "../../public/dashboard/income.png";
import ExpanseImage from "../../public/dashboard/expanse.png";
import cashImage from "../../public/dashboard/cash.svg";
import bankImage from "../../public/dashboard/bank.svg";
import assetPurchaseImage from "../../public/dashboard/asset.svg";
import marketingImage from "../../public/dashboard/marketing.svg";
import asset1 from "../assets/img/asset-dashboard/asset-1.svg";
import asset2 from "../assets/img/asset-dashboard/asset-2.svg";
import asset3 from "../assets/img/asset-dashboard/asset-3.svg";
import asset4 from "../assets/img/asset-dashboard/asset-4.svg";
import asset5 from "../assets/img/asset-dashboard/asset-5.svg";
import asset6 from "../assets/img/asset-dashboard/asset-6.svg";

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
    segment: "assets-dashboard",
    title: "Assets Dashboard",
    icon: <GridView />,
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

export const options = [
  {
    id: "1",
    title: 2024,
    value: 2024,
  },
  {
    id: "2",
    title: 2023,
    value: 2023,
  },
  {
    id: "3",
    title: 2022,
    value: 2022,
  },
  {
    id: "4",
    title: 2021,
    value: 2021,
  },
  {
    id: "5",
    title: 2020,
    value: 2020,
  },
];

export const statsData = [
  {
    id: 1,
    title: "Cash Balance",
    value: 100,
    revenue: "32.45",
    icon: <Article />,
  },
  {
    id: 2,
    title: "Bank Balance",
    value: 6370,
    revenue: "-11.01",
    icon: <AssignmentInd />,
  },
  {
    id: 3,
    title: "Assets Purchase",
    value: 6370,
    revenue: "-51.01",
    icon: <AlignVerticalTopRounded />,
  },
  {
    id: 4,
    title: "Marketing Cost",
    value: 7245,
    revenue: "41.02",
    icon: <AutoAwesomeMosaicRounded />,
  },
];

export const iconMap = {
  Asset: AssetImage,
  Liabilities: LiabilitiesImage,
  Income: IncomeImage,
  Expense: ExpanseImage,
};

export const statsIconMap = {
  "Cash Balance": cashImage,
  "Bank Balance": bankImage,
  "Assets Purchase": assetPurchaseImage,
  "Marketing Cost": marketingImage,
};

export const assetsImage = {
  "Bank Balance": asset1,
  "Cash Balance": asset2,
  "Fixed Asset": asset3,
  "Stock Value": asset4,
  "Receivable Amount": asset5,
  "Opening Capital": asset6,
};
