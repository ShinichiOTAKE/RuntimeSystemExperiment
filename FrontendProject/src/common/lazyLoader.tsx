import React, { ComponentType, lazy } from "react";
import { ErrorBoundary } from "@/layout/ErrorBoundary";

const SHOULD_FOUCE_RELOAD_KEY_NAME = "should-force-reload";

export const lazyLoader =
  (factory: () => Promise<{default: ComponentType<any>}>) =>
    lazy(async() => {
      try {
        const component = await factory();
        window.sessionStorage.removeItem(SHOULD_FOUCE_RELOAD_KEY_NAME);
        return component;

      } catch (e) {
        if (!window.sessionStorage.getItem(SHOULD_FOUCE_RELOAD_KEY_NAME)) {
          window.sessionStorage.setItem(SHOULD_FOUCE_RELOAD_KEY_NAME, "should-be");
          //window.location.reload();
          return { default: () => <></> };
        };

        return {
          default: () => <ErrorBoundary />
        };
      };
    }
  );