/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  GeolocationPosition,
} from '@capacitor/core';

export namespace Components {
  interface AppAbout {}
  interface AppGpssettings {}
  interface AppHistory {}
  interface AppHome {}
  interface AppOffline {}
  interface AppRoot {}
  interface AppTabs {}
  interface GuidingHelper {
    'distanceToClosestGuidingLine': number;
    'isGuidingLineOnRightOrLeft': string;
  }
  interface GuidingInterface {
    'position': GeolocationPosition;
  }
  interface GuidingSetup {
    'onGuidingLinesDefined': Function;
  }
}

declare global {


  interface HTMLAppAboutElement extends Components.AppAbout, HTMLStencilElement {}
  var HTMLAppAboutElement: {
    prototype: HTMLAppAboutElement;
    new (): HTMLAppAboutElement;
  };

  interface HTMLAppGpssettingsElement extends Components.AppGpssettings, HTMLStencilElement {}
  var HTMLAppGpssettingsElement: {
    prototype: HTMLAppGpssettingsElement;
    new (): HTMLAppGpssettingsElement;
  };

  interface HTMLAppHistoryElement extends Components.AppHistory, HTMLStencilElement {}
  var HTMLAppHistoryElement: {
    prototype: HTMLAppHistoryElement;
    new (): HTMLAppHistoryElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppOfflineElement extends Components.AppOffline, HTMLStencilElement {}
  var HTMLAppOfflineElement: {
    prototype: HTMLAppOfflineElement;
    new (): HTMLAppOfflineElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppTabsElement extends Components.AppTabs, HTMLStencilElement {}
  var HTMLAppTabsElement: {
    prototype: HTMLAppTabsElement;
    new (): HTMLAppTabsElement;
  };

  interface HTMLGuidingHelperElement extends Components.GuidingHelper, HTMLStencilElement {}
  var HTMLGuidingHelperElement: {
    prototype: HTMLGuidingHelperElement;
    new (): HTMLGuidingHelperElement;
  };

  interface HTMLGuidingInterfaceElement extends Components.GuidingInterface, HTMLStencilElement {}
  var HTMLGuidingInterfaceElement: {
    prototype: HTMLGuidingInterfaceElement;
    new (): HTMLGuidingInterfaceElement;
  };

  interface HTMLGuidingSetupElement extends Components.GuidingSetup, HTMLStencilElement {}
  var HTMLGuidingSetupElement: {
    prototype: HTMLGuidingSetupElement;
    new (): HTMLGuidingSetupElement;
  };
  interface HTMLElementTagNameMap {
    'app-about': HTMLAppAboutElement;
    'app-gpssettings': HTMLAppGpssettingsElement;
    'app-history': HTMLAppHistoryElement;
    'app-home': HTMLAppHomeElement;
    'app-offline': HTMLAppOfflineElement;
    'app-root': HTMLAppRootElement;
    'app-tabs': HTMLAppTabsElement;
    'guiding-helper': HTMLGuidingHelperElement;
    'guiding-interface': HTMLGuidingInterfaceElement;
    'guiding-setup': HTMLGuidingSetupElement;
  }
}

declare namespace LocalJSX {
  interface AppAbout {}
  interface AppGpssettings {}
  interface AppHistory {}
  interface AppHome {}
  interface AppOffline {}
  interface AppRoot {}
  interface AppTabs {}
  interface GuidingHelper {
    'distanceToClosestGuidingLine'?: number;
    'isGuidingLineOnRightOrLeft'?: string;
  }
  interface GuidingInterface {
    'position'?: GeolocationPosition;
  }
  interface GuidingSetup {
    'onGuidingLinesDefined'?: Function;
  }

  interface IntrinsicElements {
    'app-about': AppAbout;
    'app-gpssettings': AppGpssettings;
    'app-history': AppHistory;
    'app-home': AppHome;
    'app-offline': AppOffline;
    'app-root': AppRoot;
    'app-tabs': AppTabs;
    'guiding-helper': GuidingHelper;
    'guiding-interface': GuidingInterface;
    'guiding-setup': GuidingSetup;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-about': LocalJSX.AppAbout & JSXBase.HTMLAttributes<HTMLAppAboutElement>;
      'app-gpssettings': LocalJSX.AppGpssettings & JSXBase.HTMLAttributes<HTMLAppGpssettingsElement>;
      'app-history': LocalJSX.AppHistory & JSXBase.HTMLAttributes<HTMLAppHistoryElement>;
      'app-home': LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
      'app-offline': LocalJSX.AppOffline & JSXBase.HTMLAttributes<HTMLAppOfflineElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'app-tabs': LocalJSX.AppTabs & JSXBase.HTMLAttributes<HTMLAppTabsElement>;
      'guiding-helper': LocalJSX.GuidingHelper & JSXBase.HTMLAttributes<HTMLGuidingHelperElement>;
      'guiding-interface': LocalJSX.GuidingInterface & JSXBase.HTMLAttributes<HTMLGuidingInterfaceElement>;
      'guiding-setup': LocalJSX.GuidingSetup & JSXBase.HTMLAttributes<HTMLGuidingSetupElement>;
    }
  }
}


