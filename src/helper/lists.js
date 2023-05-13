// filter - type - by - class - valueValue

const FILTER_PROCESSOR_BY_MANUFACTURER_ALL =
  "filter-processor-by-manufacturer-all";
const FILTER_PROCESSOR_BY_MANUFACTURER_INTEL =
  "filter-processor-by-manufacturer-intel";
const FILTER_PROCESSOR_BY_MANUFACTURER_AMD =
  "filter-processor-by-manufacturer-amd";

export const processorByManufacturer = [
  {
    name: "Todos",
    id: FILTER_PROCESSOR_BY_MANUFACTURER_ALL,
  },
  {
    name: "Intel",
    id: FILTER_PROCESSOR_BY_MANUFACTURER_INTEL,
  },
  {
    name: "AMD",
    id: FILTER_PROCESSOR_BY_MANUFACTURER_AMD,
  },
];

const FILTER_PROCESSOR_BY_SOCKET_AM1 = "filter-processor-by-socket-am1";
const FILTER_PROCESSOR_BY_SOCKET_AM3 = "filter-processor-by-socket-am3";
const FILTER_PROCESSOR_BY_SOCKET_AM4 = "filter-processor-by-socket-am4";
const FILTER_PROCESSOR_BY_SOCKET_LGA1700 = "filter-processor-by-socket-lga1700";

export const processorBySocket = [
  {
    name: "AM1",
    id: FILTER_PROCESSOR_BY_SOCKET_AM1,
  },
  {
    name: "AM3+",
    id: FILTER_PROCESSOR_BY_SOCKET_AM3,
  },
  {
    name: "AM4",
    id: FILTER_PROCESSOR_BY_SOCKET_AM4,
  },
  {
    name: "LGA 1700",
    id: FILTER_PROCESSOR_BY_SOCKET_LGA1700,
  },
];
