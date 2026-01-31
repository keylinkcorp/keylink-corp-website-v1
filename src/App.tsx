import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CompanyFormation from "./pages/services/CompanyFormation";
import CompanyLiquidation from "./pages/services/CompanyLiquidation";
import CommercialRegistration from "./pages/services/CommercialRegistration";
import CRAmendment from "./pages/services/CRAmendment";
import CRRenewal from "./pages/services/CRRenewal";
import VisaImmigration from "./pages/services/VisaImmigration";
import PROServices from "./pages/services/PROServices";
import Accounting from "./pages/services/Accounting";
import AccountingServices from "./pages/services/AccountingServices";
import BusinessLicense from "./pages/services/BusinessLicense";
import SinglePersonCompany from "./pages/services/SinglePersonCompany";
import MOA from "./pages/services/MOA";
import BranchOffice from "./pages/services/BranchOffice";
import LeaseRegistration from "./pages/services/LeaseRegistration";
import WLLCompany from "./pages/services/WLLCompany";
import BusinessConsulting from "./pages/services/BusinessConsulting";
import ManagementConsulting from "./pages/services/ManagementConsulting";
import TaxServices from "./pages/services/TaxServices";
import LegalConsulting from "./pages/services/LegalConsulting";
import BankAccount from "./pages/services/BankAccount";
import DocumentClearance from "./pages/services/DocumentClearance";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/company-formation" element={<CompanyFormation />} />
          <Route path="/services/company-liquidation" element={<CompanyLiquidation />} />
          <Route path="/services/commercial-registration" element={<CommercialRegistration />} />
          <Route path="/services/cr-amendment" element={<CRAmendment />} />
          <Route path="/services/cr-renewal" element={<CRRenewal />} />
          <Route path="/services/visa-immigration" element={<VisaImmigration />} />
          <Route path="/services/pro-services" element={<PROServices />} />
          <Route path="/services/accounting" element={<Accounting />} />
          <Route path="/services/accounting-services" element={<AccountingServices />} />
          <Route path="/services/business-license" element={<BusinessLicense />} />
          <Route path="/services/single-person-company" element={<SinglePersonCompany />} />
          <Route path="/services/moa" element={<MOA />} />
          <Route path="/services/branch-office" element={<BranchOffice />} />
          <Route path="/services/lease-contract-registration" element={<LeaseRegistration />} />
          <Route path="/services/wll-company" element={<WLLCompany />} />
          <Route path="/services/business-consulting" element={<BusinessConsulting />} />
          <Route path="/services/management-consulting" element={<ManagementConsulting />} />
          <Route path="/services/tax-services" element={<TaxServices />} />
          <Route path="/services/legal-consulting" element={<LegalConsulting />} />
          <Route path="/services/bank-account" element={<BankAccount />} />
          <Route path="/services/document-clearance" element={<DocumentClearance />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
