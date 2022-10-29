import React from 'react';
import Home from './Home';

const Tab = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div>
      <>
        <div className="flex flex-wrap">
          <div className="w-8/12 m-auto">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal border-b-2 " +
                    (openTab === 1
                      ? "text-purple-700 border-purple-700"
                      : "text-black")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  <h1>Overview</h1>
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3  rounded block leading-normal border-b-2 " +
                    (openTab === 2
                      ? "text-purple-700 border-purple-700"
                      : "text-black")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  <h1>Details</h1>
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3  rounded block leading-normal border-b-2 " +
                    (openTab === 3
                      ? "text-purple-700 border-purple-700"
                      : "text-black")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  <h1>Features & Amenities</h1>
                </a>
              </li>

              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3  rounded block leading-normal border-b-2 " +
                    (openTab === 4
                      ? "text-purple-700 border-purple-700"
                      : "text-black")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(4);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  <h1>Nearby</h1>
                </a>
              </li>
            </ul>

          </div>
        </div>
      </>

      <div className="relative flex flex-col min-w-0 break-words bg-white  mb-6 ">
        <div className="px-4 py-5 flex-auto">
          <div className="tab-content tab-space">
            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
              <h1>finskkdvbkjdfv</h1>



            </div>
            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
              <Home />

            </div>
            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
              <h1>valoi asos</h1>

            </div>

            <div className={openTab === 4 ? "block" : "hidden"} id="link3">
              <h1> alhamdulillah</h1>

            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Tab;