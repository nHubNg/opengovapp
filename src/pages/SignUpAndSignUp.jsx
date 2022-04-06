import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import LoginPage from "./Login";
import RegisterPage from "./Register";

// assets
import side_1 from "../assets/Group 207.png";
import side_2 from "../assets/Group 100.png";

import glogo from "../assets/open-global.png";

import logo from "../assets/logo.png";

import 'react-tabs/style/react-tabs.css';


const SignUpAndSignUp = () => {
  const [tabIndex, setTabIndex] = useState(0);
  console.log(tabIndex);

  return (
    <div className="logn-wrapper bg-primary h-auto ">
      <div className="header bg-white py-4 ">
      <div className="logo items-center flex mx-48">
              <img class="block h-8 w-auto mr-2" src={glogo} alt="Workflow" />
              <img class="block w-8 h-8 " src={logo} alt="Workflow" />

              <h1 className="font-bold text-secondary text-xl">
                pen
                <span className="text-primary text-center mt-auto">
                  Government Partnership
                </span>
              </h1>
            </div>
      </div>

      <div className="auth-content py-20 grid grid-cols-1 md:grid-cols-2 w-full mx-10 md:text-sm md:w-3/4 md:mx-auto ">
        <div className="img w-1/">
          <div className="text-4xl text-white invisible md:mb-0 md:visible flex flex-row mx-[-46px] ">
            <img src={side_1} alt="" className="mr-28 mb-8"/> 
            <img src={side_2} alt="" className=" ml-18 mb-3"/>
          </div>
        </div>
        <div className="form w-3/4">
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList className="w-3/4 flex mx-auto" >
              <Tab  >
                <p className="text-secondary font-extrabold uppercase text-lg">Login</p>
              </Tab>
              <Tab className="ml-6">
                <p className=" text-secondary pt-2 font-extrabold uppercase text-lg">Register</p>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="login mt-8">
                <LoginPage />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="login mt-8">
                <RegisterPage />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SignUpAndSignUp;
