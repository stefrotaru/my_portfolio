/* eslint-disable react/prop-types */

import { ReactComponent as HtmlLogo } from "../assets/icons/html-5-svgrepo-com.svg";
import { ReactComponent as CssLogo } from "../assets/icons/css-3-svgrepo-com.svg";
import { ReactComponent as JsLogo } from "../assets/icons/js-svgrepo-com.svg";
import { ReactComponent as JqueryLogo } from "../assets/icons/jquery-svgrepo-com.svg";
import { ReactComponent as ReactLogo } from "../assets/icons/react.svg";
import { ReactComponent as VueLogo } from "../assets/icons/vue-vuejs-javascript-js-framework-svgrepo-com.svg";
// import { ReactComponent as TsLogo } from "../assets/icons/typescript-icon-svgrepo-com.svg";
import { ReactComponent as TailwindLogo } from "../assets/icons/tailwind-svgrepo-com.svg";
import { ReactComponent as SassLogo } from "../assets/icons/sass-svgrepo-com.svg";
import { ReactComponent as LessLogo } from "../assets/icons/less-svgrepo-com.svg";
import { ReactComponent as BootstrapLogo } from "../assets/icons/bootstrap-svgrepo-com.svg";
import { ReactComponent as NodeLogo } from "../assets/icons/node-js-svgrepo-com.svg";
import { ReactComponent as FigmaLogo } from "../assets/icons/figma-svgrepo-com.svg";
import { ReactComponent as PostmanLogo } from "../assets/icons/postman-icon-svgrepo-com.svg";
import { ReactComponent as JiraLogo } from "../assets/icons/jira-svgrepo-com.svg";

function ToolsStack() {
  return (
    <div className="tool_stack grid place-content-center text-center gap-10 my-20">

      <div className="langs-and-libs hide">
        <h2 className="pb-5 font-bold text-xl">Languages and libraries</h2>
        <div className="flex gap-5 place-content-center flex-wrap">
          <HtmlLogo className="icon" />
          <CssLogo className="icon" />
          <JsLogo className="icon" />
          <JqueryLogo className="icon" />
          <ReactLogo className="icon" />
          <VueLogo className="icon" />
          {/* <TsLogo className="icon" /> */}
          <TailwindLogo className="icon" />
          <SassLogo className="icon" />
          <LessLogo className="icon" />
          <BootstrapLogo className="icon" />
        </div>
      </div>

      <div className="software-and-other hide">
        <h2 className="pb-5 font-bold text-xl">Software and other</h2>
        <div className="flex gap-5 place-content-center flex-wrap">
          <NodeLogo className="icon" />
          <FigmaLogo className="icon" />
          <PostmanLogo className="icon" />
          <JiraLogo className="icon" />
        </div>
      </div>

    </div>
  );
}

export default ToolsStack;
