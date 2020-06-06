const cities = [
  {
    name: "An Giang",
    lat: "10.38639",
    lng: "105.43518",
  },
  {
    name: "Bà Rịa – Vũng Tàu",
    lat: "10.49629",
    lng: "107.16841",
  },
  {
    name: "Bắc Giang",
    lat: "21.27307",
    lng: "106.1946",
  },
  {
    name: "Bắc Kạn",
    lat: "22.14701",
    lng: "105.83481",
  },
  {
    name: "Bạc Liêu",
    lat: "9.29414",
    lng: "105.72776",
  },
  {
    name: "Bắc Ninh",
    lat: "21.18608",
    lng: "106.07631",
  },
  {
    name: "Bến Tre",
    lat: "10.24147",
    lng: "106.37585",
  },
  {
    name: "Bình Định",
    lat: "13.77648",
    lng: "109.22367",
  },
  {
    name: "Bình Dương",
    lat: "10.9804",
    lng: "106.6519",
  },
  {
    name: "Bình Phước",
    lat: "11.64711",
    lng: "106.60586",
  },
  {
    name: "Bình Thuận",
    lat: "10.92889",
    lng: "108.10208",
  },
  {
    name: "Cà Mau",
    lat: "9.17682",
    lng: "105.15242",
  },
  {
    name: "Cần Thơ",
    lat: "10.03711",
    lng: "105.78825",
  },
  {
    name: "Cao Bằng",
    lat: "22.66568",
    lng: "106.25786",
  },
  {
    name: "Đà Nẵng",
    lat: "16.06778",
    lng: "108.22083",
  },
  {
    name: "Đắk Lắk",
    lat: "12.66747",
    lng: "108.03775",
  },
  {
    name: "Đắc Nông",
    lat: "12.00423",
    lng: "107.69074",
  },
  {
    name: "Điện Biên",
    lat: "21.38602",
    lng: "103.02301",
  },
  {
    name: "Đồng Nai",
    lat: "10.94469",
    lng: "106.82432",
  },
  {
    name: "Đồng Tháp",
    lat: "10.29085",
    lng: "105.75635",
  },
  {
    name: "Gia Lai",
    lat: "13.98333",
    lng: "108",
  },
  {
    name: "Hà Giang",
    lat: "22.82333",
    lng: "104.98357",
  },
  {
    name: "Hà Nam",
    lat: "20.54531",
    lng: "105.91221",
  },
  {
    name: "Hà Nội",
    lat: "21.0245",
    lng: "105.84117",
  },
  {
    name: "Hà Tĩnh",
    lat: "18.34282",
    lng: "105.90569",
  },
  {
    name: "Hải Dương",
    lat: "20.94099",
    lng: "106.33302",
  },
  {
    name: "Hải Phòng",
    lat: "20.72779",
    lng: "107.04819",
  },
  {
    name: "Hậu Giang",
    lat: "9.78449",
    lng: "105.47012",
  },
  {
    name: "Hòa Bình",
    lat: "20.81717",
    lng: "105.33759",
  },
  {
    name: "Hưng Yên",
    lat: "20.64637",
    lng: "106.05112",
  },
  {
    name: "Khánh Hòa",
    lat: "12.24507",
    lng: "109.19432",
  },
  {
    name: "Kiên Giang",
    lat: "10.01245",
    lng: "105.08091",
  },
  {
    name: "Kon Tum",
    lat: "14.35451",
    lng: "108.00759",
  },
  {
    name: "Lai Châu",
    lat: "22.39644",
    lng: "103.45824",
  },
  {
    name: "Lâm Đồng",
    lat: "11.54798",
    lng: "107.80772",
  },
  {
    name: "Lạng Sơn",
    lat: "21.85264",
    lng: "106.76101",
  },
  {
    name: "Lào Cai",
    lat: "22.48556",
    lng: "103.97066",
  },
  {
    name: "Long An",
    lat: "10.53589",
    lng: "106.41366",
  },
  {
    name: "Nam Định",
    lat: "20.43389",
    lng: "106.17729",
  },
  {
    name: "Nghệ An",
    lat: "18.67337",
    lng: "105.69232",
  },
  {
    name: "Ninh Bình",
    lat: "20.25809",
    lng: "105.97965",
  },
  {
    name: "Ninh Thuận",
    lat: "11.56432",
    lng: "108.98858",
  },
  {
    name: "Phú Thọ",
    lat: "21.32274",
    lng: "105.40198",
  },
  {
    name: "Phú Yên",
    lat: "13.09546",
    lng: "109.32094",
  },
  {
    name: "Quảng Bình",
    lat: "17.46885",
    lng: "106.62226",
  },
  {
    name: "Quảng Nam",
    lat: "15.57364",
    lng: "108.47403",
  },
  {
    name: "Quảng Ngãi",
    lat: "15.12047",
    lng: "108.79232",
  },
  {
    name: "Quảng Ninh",
    lat: "20.95045",
    lng: "107.07336",
  },
  {
    name: "Quảng Trị",
    lat: "16.81625",
    lng: "107.10031",
  },
  {
    name: "Sóc Trăng",
    lat: "9.59995",
    lng: "105.97193",
  },
  {
    name: "Sơn La",
    lat: "21.3256",
    lng: "103.91882",
  },
  {
    name: "Tây Ninh",
    lat: "11.31004",
    lng: "106.09828",
  },
  {
    name: "Thái Bình",
    lat: "20.45",
    lng: "106.34002",
  },
  {
    name: "Thái Nguyên",
    lat: "21.59422",
    lng: "105.84817",
  },
  {
    name: "Thanh Hóa",
    lat: "19.8",
    lng: "105.76667",
  },
  {
    name: "Thừa Thiên Huế",
    lat: "16.4619",
    lng: "107.59546",
  },
  {
    name: "Tiền Giang",
    lat: "10.36004",
    lng: "106.35996",
  },
  {
    name: "TP Hồ Chí Minh",
    lat: "10.82302",
    lng: "106.62965",
  },
  {
    name: "Trà Vinh",
    lat: "9.94719",
    lng: "106.34225",
  },
  {
    name: "Tuyên Quang",
    lat: "21.82356",
    lng: "105.21424",
  },
  {
    name: "Vĩnh Long",
    lat: "10.25369",
    lng: "105.9722",
  },
  {
    name: "Vĩnh Phúc",
    lat: "21.30891",
    lng: "105.60489",
  },
  {
    name: "Yên Bái",
    lat: "21.72288",
    lng: "104.9113",
  },
];
