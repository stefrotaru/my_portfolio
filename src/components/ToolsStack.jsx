/* eslint-disable react/prop-types */

import { ReactComponent as HtmlLogo } from "../assets/html-5-svgrepo-com.svg";
import { ReactComponent as CssLogo } from "../assets/css-3-svgrepo-com.svg";
import { ReactComponent as JsLogo } from "../assets/js-svgrepo-com.svg";
import { ReactComponent as JqueryLogo } from "../assets/jquery-svgrepo-com.svg";
import { ReactComponent as ReactLogo } from "../assets/react.svg";
import { ReactComponent as ReduxLogo } from "../assets/redux-svgrepo-com.svg";
import { ReactComponent as VueLogo } from "../assets/vue-vuejs-javascript-js-framework-svgrepo-com.svg";
import { ReactComponent as ViteLogo } from "../assets/vite-svgrepo-com.svg";
import { ReactComponent as Pinia } from "../assets/pinia.svg";
import { ReactComponent as Storybook } from "../assets/storybook-icon-svgrepo-com.svg";
import { ReactComponent as GulpLogo } from "../assets/gulp-svgrepo-com.svg";
import { ReactComponent as TsLogo } from "../assets/typescript-icon-svgrepo-com.svg";
import { ReactComponent as TailwindLogo } from "../assets/tailwind-svgrepo-com.svg";
import { ReactComponent as BootstrapLogo } from "../assets/bootstrap-svgrepo-com.svg";
import { ReactComponent as LessLogo } from "../assets/less-svgrepo-com.svg";
import { ReactComponent as SassLogo } from "../assets/sass-svgrepo-com.svg";
import { ReactComponent as NodeLogo } from "../assets/node-js-svgrepo-com.svg";
import { ReactComponent as FigmaLogo } from "../assets/figma-svgrepo-com.svg";
import { ReactComponent as PostmanLogo } from "../assets/postman-icon-svgrepo-com.svg";
import { ReactComponent as JiraLogo } from "../assets/jira-svgrepo-com.svg";
import { ReactComponent as VScode } from "../assets/vs-code-svgrepo-com.svg";
import { ReactComponent as VisualStudio } from "../assets/visual-studio-svgrepo-com.svg";
import { ReactComponent as BrowserStack } from "../assets/browserstack-svgrepo-com.svg";
import { ReactComponent as Firebase } from "../assets/firebase-svgrepo-com.svg";

function ToolsStack() {
  return (
    <div className="tool_stack grid place-content-center text-center gap-10 my-32">

      <div className="langs-and-libs hide">
        <h2 className="title py-5 font-bold text-xl">Languages, libraries and build tools</h2>
        <div className="flex gap-5 place-content-center flex-wrap">
          <HtmlLogo className="icon" />
          <CssLogo className="icon" />
          <JsLogo className="icon" />
          <TsLogo className="icon" />
          <JqueryLogo className="icon" />
          <ReactLogo className="icon" />
          <ReduxLogo className="icon" />
          <ViteLogo className="icon" />
          <VueLogo className="icon" />
          <Pinia className="icon" />
          <Storybook className="icon" />
          <GulpLogo className="icon" />
          <TailwindLogo className="icon" />
          <BootstrapLogo className="icon" />
          <LessLogo className="icon" />
          <SassLogo className="icon" />
        </div>
      </div>

      <div className="software-and-other hide">
        <h2 className="title pb-5 font-bold text-xl">Software and other</h2>
        <div className="flex gap-5 place-content-center flex-wrap">
          <VScode className="icon" />
          <VisualStudio className="icon" />
          <NodeLogo className="icon" />
          <PostmanLogo className="icon" />
          <Firebase className="icon" />
          <JiraLogo className="icon" />
          <FigmaLogo className="icon" />
          <BrowserStack className="icon" />
        </div>
      </div>

    </div>
  );
}

export default ToolsStack;
