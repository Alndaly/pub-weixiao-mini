const solarTerm = [
  "\u5c0f\u5bd2",
  "\u5927\u5bd2",
  "\u7acb\u6625",
  "\u96e8\u6c34",
  "\u60ca\u86f0",
  "\u6625\u5206",
  "\u6e05\u660e",
  "\u8c37\u96e8",
  "\u7acb\u590f",
  "\u5c0f\u6ee1",
  "\u8292\u79cd",
  "\u590f\u81f3",
  "\u5c0f\u6691",
  "\u5927\u6691",
  "\u7acb\u79cb",
  "\u5904\u6691",
  "\u767d\u9732",
  "\u79cb\u5206",
  "\u5bd2\u9732",
  "\u971c\u964d",
  "\u7acb\u51ac",
  "\u5c0f\u96ea",
  "\u5927\u96ea",
  "\u51ac\u81f3",
];
const sTermInfo = [
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c3598082c95f8c965cc920f",
  "97bd0b06bdb0722c965ce1cfcc920f",
  "b027097bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c359801ec95f8c965cc920f",
  "97bd0b06bdb0722c965ce1cfcc920f",
  "b027097bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c359801ec95f8c965cc920f",
  "97bd0b06bdb0722c965ce1cfcc920f",
  "b027097bd097c36b0b6fc9274c91aa",
  "9778397bd19801ec9210c965cc920e",
  "97b6b97bd19801ec95f8c965cc920f",
  "97bd09801d98082c95f8e1cfcc920f",
  "97bd097bd097c36b0b6fc9210c8dc2",
  "9778397bd197c36c9210c9274c91aa",
  "97b6b97bd19801ec95f8c965cc920e",
  "97bd09801d98082c95f8e1cfcc920f",
  "97bd097bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36c9210c9274c91aa",
  "97b6b97bd19801ec95f8c965cc920e",
  "97bcf97c3598082c95f8e1cfcc920f",
  "97bd097bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36c9210c9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c3598082c95f8c965cc920f",
  "97bd097bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c3598082c95f8c965cc920f",
  "97bd097bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c359801ec95f8c965cc920f",
  "97bd097bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c359801ec95f8c965cc920f",
  "97bd097bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf97c359801ec95f8c965cc920f",
  "97bd097bd07f595b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9210c8dc2",
  "9778397bd19801ec9210c9274c920e",
  "97b6b97bd19801ec95f8c965cc920f",
  "97bd07f5307f595b0b0bc920fb0722",
  "7f0e397bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36c9210c9274c920e",
  "97b6b97bd19801ec95f8c965cc920f",
  "97bd07f5307f595b0b0bc920fb0722",
  "7f0e397bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36c9210c9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bd07f1487f595b0b0bc920fb0722",
  "7f0e397bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf7f1487f595b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf7f1487f595b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf7f1487f531b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c965cc920e",
  "97bcf7f1487f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b97bd19801ec9210c9274c920e",
  "97bcf7f0e47f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "9778397bd097c36b0b6fc9210c91aa",
  "97b6b97bd197c36c9210c9274c920e",
  "97bcf7f0e47f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "9778397bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36c9210c9274c920e",
  "97b6b7f0e47f531b0723b0b6fb0722",
  "7f0e37f5307f595b0b0bc920fb0722",
  "7f0e397bd097c36b0b6fc9210c8dc2",
  "9778397bd097c36b0b70c9274c91aa",
  "97b6b7f0e47f531b0723b0b6fb0721",
  "7f0e37f1487f595b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc9210c8dc2",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f595b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "9778397bd097c36b0b6fc9274c91aa",
  "97b6b7f0e47f531b0723b0787b0721",
  "7f0e27f0e47f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "9778397bd097c36b0b6fc9210c91aa",
  "97b6b7f0e47f149b0723b0787b0721",
  "7f0e27f0e47f531b0723b0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "9778397bd097c36b0b6fc9210c8dc2",
  "977837f0e37f149b0723b0787b0721",
  "7f07e7f0e47f531b0723b0b6fb0722",
  "7f0e37f5307f595b0b0bc920fb0722",
  "7f0e397bd097c35b0b6fc9210c8dc2",
  "977837f0e37f14998082b0787b0721",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e37f1487f595b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc9210c8dc2",
  "977837f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "977837f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd097c35b0b6fc920fb0722",
  "977837f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "977837f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "977837f0e37f14998082b0787b06bd",
  "7f07e7f0e47f149b0723b0787b0721",
  "7f0e27f0e47f531b0b0bb0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "977837f0e37f14998082b0723b06bd",
  "7f07e7f0e37f149b0723b0787b0721",
  "7f0e27f0e47f531b0723b0b6fb0722",
  "7f0e397bd07f595b0b0bc920fb0722",
  "977837f0e37f14898082b0723b02d5",
  "7ec967f0e37f14998082b0787b0721",
  "7f07e7f0e47f531b0723b0b6fb0722",
  "7f0e37f1487f595b0b0bb0b6fb0722",
  "7f0e37f0e37f14898082b0723b02d5",
  "7ec967f0e37f14998082b0787b0721",
  "7f07e7f0e47f531b0723b0b6fb0722",
  "7f0e37f1487f531b0b0bb0b6fb0722",
  "7f0e37f0e37f14898082b0723b02d5",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e37f1487f531b0b0bb0b6fb0722",
  "7f0e37f0e37f14898082b072297c35",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e37f0e37f14898082b072297c35",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e37f0e366aa89801eb072297c35",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f149b0723b0787b0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
  "7f0e37f0e366aa89801eb072297c35",
  "7ec967f0e37f14998082b0723b06bd",
  "7f07e7f0e47f149b0723b0787b0721",
  "7f0e27f0e47f531b0723b0b6fb0722",
  "7f0e37f0e366aa89801eb072297c35",
  "7ec967f0e37f14998082b0723b06bd",
  "7f07e7f0e37f14998083b0787b0721",
  "7f0e27f0e47f531b0723b0b6fb0722",
  "7f0e37f0e366aa89801eb072297c35",
  "7ec967f0e37f14898082b0723b02d5",
  "7f07e7f0e37f14998082b0787b0721",
  "7f07e7f0e47f531b0723b0b6fb0722",
  "7f0e36665b66aa89801e9808297c35",
  "665f67f0e37f14898082b0723b02d5",
  "7ec967f0e37f14998082b0787b0721",
  "7f07e7f0e47f531b0723b0b6fb0722",
  "7f0e36665b66a449801e9808297c35",
  "665f67f0e37f14898082b0723b02d5",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e36665b66a449801e9808297c35",
  "665f67f0e37f14898082b072297c35",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e26665b66a449801e9808297c35",
  "665f67f0e37f1489801eb072297c35",
  "7ec967f0e37f14998082b0787b06bd",
  "7f07e7f0e47f531b0723b0b6fb0721",
  "7f0e27f1487f531b0b0bb0b6fb0722",
];

export { solarTerm, sTermInfo };
