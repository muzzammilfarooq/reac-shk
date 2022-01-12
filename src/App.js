import React from "react";
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
// import HomeV2 from './pages/HomeV2'
// import ShopHomePage from './pages/ShopHomePage'
// import Shop from './pages/Shop'
// import ProductDetailsPage from "./pages/ProductDetailsPage";
// import CartPage from "./pages/CartPage";
// import CheckoutPage from "./pages/CheckoutPage";
// import About_Page from './pages/About_Page'
// import TeamGrid from './pages/TeamGrid'
import MohammadAlharoun from './pages/MohammadAlharoun'
import YousufZalmeSaid from './pages/YousufZalmeSaid'
import KashifAli from './pages/KashifAli'
// import TestimonialPage from './pages/TestimonialPage'
// import FAQ from './pages/FAQ'
// import OurPricing from './pages/PricingPage'
// import SignUp from './pages/SignUpPage'
// import Login from './pages/LoginPage'
// import ForgotPassword from './pages/ForgotPassword'
// import ServicePage from './pages/ServicePage'
// import ServiceDetailsPage from './pages/ServiceDetailsPage'
// import Portfolio from './pages/PortfolioPage'
// import PortfolioDetailsPage from './pages/PortfolioDetailsPage'
// import BlogFullPage from './pages/BlogFullPage'
// import BlogGridPage from './pages/BlogGridPage'
// import BlogDetailsPage from './pages/BlogDetailsPage'
import ContactPage from './pages/ContactPage'
import ClientServices from './pages/ClientServices';
import TechnologyMedia from './pages/TechnologyMedia';
import IslamicFinance from './pages/IslamicFinance';
import Aviation from './pages/Aviation';
import BankingFinance from './pages/BankingFinance';
import DebtRecovery from './pages/DebtRecovery';
import DisputeResolution from './pages/DisputeResolution';
import HealthCare from './pages/HealthCare';
import InsuranceReinsurance from './pages/InsuranceReinsurance';
import LaborEmployment from './pages/LaborEmployment';
import MariTime from './pages/MariTimeLaw';
import ProjectInfrastructure from './pages/ProjectInfrastructure';
import RealEstate from './pages/RealEstate';

import CorporateCommercial from './pages/CorporateCommercial';
import IntellectualProperty from './pages/IntellectualProperty';
import TermsServices from './pages/TermsServices';
import Alerts from './pages/Alerts';




// import OurTeam from './pages/OurTeam';

import Error from './pages/Error'
import "./assets/css/style.css";
import "./App.css";



function App() {
  return (
    <React.Fragment>
      <Route>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          {/* <Route path="/home-v2" component={HomeV2} /> */}
          {/* <Route path="/shop-home" component={ShopHomePage} /> */}
          {/* <Route path="/shop" component={Shop} /> */}
          {/* <Route path="/product-details" component={ProductDetailsPage} /> */}
          {/* <Route path="/cart" component={CartPage} /> */}
          {/* <Route path="/checkout" component={CheckoutPage} /> */}
          {/* <Route path="/about" component={About_Page} /> */}
          {/* <Route path="/team-grid" component={TeamGrid} /> */}
          {/* <Route path="/our-team/mohammad-alharoun" component={MohammadAlharoun} />
          <Route path="/our-team/yousaf-zalme-said" component={YousufZalmeSaid} />
          <Route path="/our-team/kashif-ali" component={KashifAli} /> */}
          {/* <Route path="/testimonial" component={TestimonialPage} /> */}
          {/* <Route path="/faq" component={FAQ} /> */}
          {/* <Route path="/our-pricing" component={OurPricing} /> */}
          {/* <Route path="/sign-up" component={SignUp} /> */}
          {/* <Route path="/login" component={Login} /> */}
          {/* <Route path="/forgot-password" component={ForgotPassword} /> */}
          {/* <Route path="/services" component={ServicePage} /> */}
          {/* <Route path="/service-details" component={ServiceDetailsPage} /> */}
          {/* <Route path="/portfolio-grid" component={Portfolio} /> */}
          {/* <Route path="/portfolio-details" component={PortfolioDetailsPage} /> */}
          {/* <Route path="/blog-full-width" component={BlogFullPage} /> */}
          {/* <Route path="/blog-grid" component={BlogGridPage} /> */}
          {/* <Route path="/blog-details" component={BlogDetailsPage} /> */}
          <Route exact path="/client-services" component={ClientServices} />
          <Route path="/client-services/technology-media" component={TechnologyMedia} />
          <Route path="/client-services/islamic-finance" component={IslamicFinance} />
          <Route path="/client-services/banking-finance" component={BankingFinance} />
          <Route path="/client-services/aviation" component={Aviation} />
          <Route path="/client-services/debt-recovery" component={DebtRecovery} />
          <Route path="/client-services/dispute-resolution" component={DisputeResolution} />
          <Route path="/client-services/healthcare" component={HealthCare} />
          <Route path="/client-services/insurance-and-reinsurance" component={InsuranceReinsurance} />
          <Route path="/client-services/labor-and-employment" component={LaborEmployment} />
          <Route path="/client-services/Maritime" component={MariTime} />
          <Route path="/client-services/project-infrastructure" component={ProjectInfrastructure} />
          <Route path="/client-services/real-estate" component={RealEstate} />
          <Route path="/client-services/corporate-commercial" component={CorporateCommercial} />
          <Route path="/client-services/intellectual-property" component={IntellectualProperty} />
          {/* <Route exact path="/our-team" component={OurTeam} /> */}
          <Route path="/terms-of-services" component={TermsServices} />
          <Route path="/alerts" component={Alerts} />
          <Route path="/contact" component={ContactPage} />
          <Route component={Error} />
        </Switch>
      </Route>
    </React.Fragment>
  );
}

export default App;
