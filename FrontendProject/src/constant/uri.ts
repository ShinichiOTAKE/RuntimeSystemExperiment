const hierarchicalIdentifiers: string = ":";

const runtimeSystemApi = {
  scheme: "http",
  authority: "//localhost:8888",
} as const;

const rootPath = {
  businessScreen: "/v1/screens",
  menu: "/v1/menu/screens",
} as const;

export const base = {
  businessScreen:
    runtimeSystemApi.scheme +
    hierarchicalIdentifiers +
    runtimeSystemApi.authority +
    rootPath.businessScreen,
  menu:
    runtimeSystemApi.scheme +
    hierarchicalIdentifiers +
    runtimeSystemApi.authority +
    rootPath.menu,
} as const;

export const accessTo = {
  businessScreenApi:　(screenId: string, elementId: string, eventName: string) =>
    base.businessScreen + `/${screenId}/${elementId}/${eventName}`,
  menuApi: base.menu,
} as const;