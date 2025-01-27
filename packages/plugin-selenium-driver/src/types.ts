import {RemoteOptions} from 'webdriverio';

export type SeleniumPluginConfig = RemoteOptions & {
    chromeDriverPath?: string;
    recorderExtension: boolean;
    clientCheckInterval: number;
    clientTimeout: number;
    host?: string; // fallback for configuration. In WebdriverIO 5 field host renamed to hostname
    desiredCapabilities?: WebDriver.DesiredCapabilities[]; // fallback for configuration. In WebdriverIO 5 field renamed
};
