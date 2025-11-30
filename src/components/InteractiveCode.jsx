import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { githubLight, githubDark } from "@codesandbox/sandpack-themes";

export default function InteractiveCode({
  code,
  template = "vanilla",
  dark = true,
}) {
  return (
    <Sandpack
      theme={dark ? githubDark : githubLight}
      template={template}
      files={{
        "/index.js": code,
        "/index.html": `<!doctype html><div id="app"></div>`,
      }}
      options={{
        showLineNumbers: true,
        showTabs: false,
        wrapContent: true,
        recompileMode: "delayed",
      }}
    />
  );
}
