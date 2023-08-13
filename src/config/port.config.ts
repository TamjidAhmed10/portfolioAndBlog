// config.ts

export interface PortConfigInterface {
  [key: string]: {
    port: number;
  };
}
const PortConfig: PortConfigInterface = {
  development: {
    port: 3002,
  },
  test: {
    port: 4002,
  },
};

export default PortConfig;
