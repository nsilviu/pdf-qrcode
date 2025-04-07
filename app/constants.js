export const brands = [
  {
    name: "Volkswagen",
    logo: "/logos/volkswagen.png",
  },
  {
    name: "Skoda",
    logo: "/logos/skoda.png",
  },
  {
    name: "Seat",
    logo: "/logos/seat.png",
  },
  {
    name: "Cupra",
    logo: "/logos/cupra.png",
  },
  {
    name: "Audi",
    logo: "/logos/audi.png",
  },
];
export const carModels = [
  // {
  //   id: 1,
  //   model: "A3 Limuzina S Line 35 TFSI",
  //   image: "/cars/a3.png",
  // },

  // {
  //   id: 3,
  //   model: "Q6 e-tron",
  //   image: "/cars/q6.png",
  // },
  {
    id: 3,
    model: "Noul A5 35 TFSI",
    image: "/cars/a5.png",
    link: "/pdf/noul-a5.pdf",
  },
  {
    id: 4,
    model: "Q3 Advanced 35 TFSI",
    image: "/cars/q3-advanced.png",
    link: "/pdf/noul-a5.pdf",
  },

  // {
  //   id: 6,
  //   model: "Q5 Sportback Advanced 40 TDI quattro",
  //   image: "/cars/q5.png",
  // },
  {
    id: 7,
    model: "Q7 S Line 55 TFSI e quattro",
    image: "/cars/q7.png",
    link: "/pdf/noul-a5.pdf",
  },
  // {
  //   id: 9,
  //   model: "Q8 55 TFSI quattro",
  //   image: "/cars/q8.png",
  // },
];

export const sessions = [
  // {
  //   id: 1,
  //   name: "21 Octombrie 2024 - 27 Octombrie 2024",
  //   cars: [
  //     { image: "/cars/a3.png", model: "Audi A3" },
  //     { image: "/cars/q8.png", model: "Audi Q8" },
  //   ],
  // },
  // {
  //   id: 2,
  //   name: "28 Octombrie 2024 - 3 Noiembrie 2024",
  //   cars: [
  //     { image: "/cars/q3.png", model: "Audi Q3" },
  //     { image: "/cars/q8.png", model: "Audi Q8" },
  //   ],
  // },
  // {
  //   id: 3,
  //   name: "28 Octombrie 2024 - 3 Noiembrie 2024",
  //   cars: [
  //     { image: "/cars/a3.png", model: "Audi A3" },
  //     { image: "/cars/q3sb.png", model: "Audi Q5 Sportback" },
  //   ],
  // },
  {
    id: 2,
    name: "4 Noiembrie 2024 - 10 Noiembrie 2024",
    cars: [
      { image: "/cars/a3.png", model: "Audi A3" },
      { image: "/cars/q3.png", model: "Audi Q3" },
    ],
  },
  {
    id: 2,
    name: "11 Noiembrie 2024 - 17 Noiembrie 2024",
    cars: [
      { image: "/cars/a3.png", model: "Audi A3" },
      { image: "/cars/q3.png", model: "Audi Q3" },
    ],
  },
];

export const dealerships = [
  {
    name: "Porsche Bucuresti Nord",
    address: "Bd. Pipera 2, Voluntari, Ilfov",
    brands: ["Volkswagen", "Skoda", "Seat", "Cupra"],
  },
  {
    name: "Porsche Bucuresti Vest 1",
    address: "Sos. de centura 41, Chiajna, Jud. Ilfov",
    brands: ["Volkswagen", "Skoda", "Audi", "Seat", "Cupra"],
  },

  {
    name: "Porsche Pipera",
    address: "Bd. Pipera 1/X, Voluntari, Ilfov",
    brands: ["Audi"],
  },
  {
    name: "Porsche Timisoara",
    address: "Calea Lugojului 136, Ghiroda, Timis",
    brands: ["Volkswagen", "Audi", "Skoda", "Seat", "Cupra"],
  },
];

export const insurance = [
  {
    name: "porsche",
    logo: "/insurance/porsche.jpg",
  },
  {
    name: "Allianz Tiriac",
    logo: "/insurance/aliantz.jpg",
  },
  {
    name: "Asirom",
    logo: "/insurance/asirom.jpg",
  },
  {
    name: "Generali",
    logo: "/insurance/generali.jpg",
  },
  {
    name: "Gothaer",
    logo: "/insurance/gothaer.jpg",
  },
  {
    name: "Groupama",
    logo: "/insurance/groupama.jpg",
  },
  {
    name: "Omniasig",
    logo: "/insurance/omniasig.jpg",
  },

  {
    name: "grawe",
    logo: "/insurance/grawe.jpg",
  },
];

export const contactOptions = [
  { value: "Telefon", label: "Telefon" },
  { value: "Email", label: "Email" },
  { value: "WhatsApp", label: "WhatsApp" },
];

export const logoAmiabila = (
  <svg
    width="236"
    height="44"
    viewBox="0 0 236 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="header_logo__Zc04F"
  >
    <path
      d="M15.595 43.6482C12.0164 43.6482 7.83258 40.6817 6.48403 39.6484C-1.16652 33.7885 -1.01522 27.5887 1.68846 23.7355C2.08316 23.1355 7.06292 15.6824 14.5095 8.68923L15.9568 7.33594L18.2986 9.8892L17.9368 11.0092C14.9766 20.1889 19.3643 23.7888 21.2589 25.3288C26.6465 19.1823 29.7843 18.8023 32.8235 20.1422L33.0406 20.2356C34.0734 20.6756 34.8233 21.7689 35.0996 23.2488C35.3298 24.5021 35.6785 28.982 30.4422 34.0685C26.1926 38.1951 20.2984 42.3749 17.3053 43.3883C16.7593 43.5616 16.187 43.6482 15.595 43.6482ZM13.0163 15.8624C8.11545 21.2022 4.99734 25.9154 4.95787 25.9754L4.9184 26.0287C3.89876 27.4754 2.24103 31.3819 8.86537 36.4551C11.2862 38.3084 14.7266 40.035 16.0489 39.5884C18.2197 38.855 23.6665 35.0952 27.7056 31.1753C31.4684 27.522 31.396 24.5488 31.1658 23.7688C30.2185 23.3555 28.6134 22.8355 23.9099 28.322C22.7127 29.7153 20.476 29.822 18.9236 28.5553L18.7986 28.4553C17.1211 27.082 12.6545 23.4488 13.0163 15.8624ZM31.5013 23.9088C31.5078 23.9155 31.521 23.9155 31.5276 23.9221L31.5013 23.9088Z"
      fill="#000000"
    ></path>
    <path
      d="M39.0472 43.5943C37.7118 43.5943 36.383 43.2543 35.1857 42.5677C33.2188 41.4477 31.3506 39.8277 28.989 37.7678C28.2851 37.1612 27.5418 36.5145 26.7392 35.8279L26.6208 35.7145L24.7723 33.8546L26.3511 32.4413C26.8182 32.0213 27.2786 31.5946 27.7194 31.1613C31.4822 27.5081 31.4098 24.5348 31.1796 23.7549C30.2323 23.3415 28.6272 22.8216 23.9237 28.3081C22.7265 29.7014 20.4898 29.808 18.9374 28.5414L18.7532 28.4081C16.7863 26.8148 10.9184 22.0749 13.8655 10.9152L13.0695 10.0486L14.6023 8.60863C17.7401 5.67538 20.8845 3.23545 23.9566 1.3555C24.0487 1.2955 24.1539 1.2355 24.2658 1.1755C25.713 0.428859 27.4497 0.422192 28.91 1.16217C29.0285 1.22217 29.1403 1.28883 29.239 1.34883C41.6193 8.92862 50.9013 22.8216 51.4999 23.7282C52.4866 25.1482 55.2166 30.0747 50.5 36.0079L50.2369 36.2945C49.6251 36.8678 44.1848 41.9477 42.5666 42.7543C41.4483 43.3143 40.251 43.5943 39.0472 43.5943ZM30.6007 33.9079C30.9296 34.1946 31.2453 34.4679 31.5545 34.7346C33.7517 36.6412 35.4883 38.1545 37.1197 39.0811C38.2578 39.7277 39.6327 39.7611 40.8036 39.1744C41.5206 38.7878 44.9019 35.8345 47.474 33.4279C50.2237 29.9214 49.1514 27.2881 48.2634 26.0281L48.2239 25.9748C48.1318 25.8348 38.9354 11.9552 27.1602 4.76207L27.0813 4.7154C26.7853 4.56874 26.3774 4.56874 26.0485 4.74207C23.3909 6.36869 20.6806 8.4353 17.9638 10.9086L17.944 10.9819C15.0825 20.3416 19.3715 23.8082 21.2069 25.2882L21.2529 25.3282C26.6405 19.1817 29.7784 18.8017 32.8176 20.1416L33.0346 20.235C34.0674 20.675 34.8174 21.7683 35.0936 23.2482C35.3305 24.4815 35.6725 28.8881 30.6007 33.9079ZM31.5019 23.9082C31.5085 23.9149 31.5216 23.9149 31.5282 23.9215L31.5019 23.9082Z"
      fill="#000000"
    ></path>
    <g clipPath="url(#clip0_2_2106)">
      <path
        d="M132.826 16.8103C134.275 18.3583 135.002 20.5236 135.002 23.3158V34.4213C135.002 34.9749 134.553 35.4256 134.002 35.4256H130.699C130.148 35.4256 129.699 34.9749 129.699 34.4213V24.4377C129.699 21.1065 128.406 19.4458 125.821 19.4458C124.435 19.4458 123.377 19.9357 122.64 20.9106C121.904 21.8854 121.533 23.2669 121.533 25.05V34.4262C121.533 34.9798 121.084 35.4305 120.533 35.4305H117.191C116.64 35.4305 116.191 34.9798 116.191 34.4262V24.4377C116.191 21.1065 114.923 19.4458 112.391 19.4458C110.967 19.4458 109.884 19.9504 109.133 20.9595C108.381 21.9687 108.006 23.3844 108.006 25.2068V34.4262C108.006 34.9798 107.557 35.4305 107.006 35.4305H103.723C103.171 35.4305 102.723 34.9798 102.723 34.4262V16.0657C102.723 15.5121 103.171 15.0614 103.723 15.0614H107.006C107.557 15.0614 108.006 15.5121 108.006 16.0657V17.4765C109.533 15.4827 111.542 14.4883 114.035 14.4883C116.791 14.4883 118.821 15.5121 120.123 17.5549C121.728 15.5121 124.011 14.4883 126.977 14.4883C129.426 14.4932 131.377 15.2672 132.826 16.8103Z"
        fill="#000000"
      ></path>
      <path
        d="M139.133 11.2897C138.518 10.6871 138.211 9.94741 138.211 9.07053C138.211 8.20345 138.518 7.47843 139.133 6.89058C139.748 6.30273 140.494 6.00391 141.372 6.00391C142.255 6.00391 143.001 6.29783 143.616 6.89058C144.231 7.47843 144.538 8.20835 144.538 9.07053C144.538 9.9621 144.231 10.7067 143.616 11.3044C143.001 11.902 142.255 12.2008 141.372 12.2008C140.494 12.191 139.748 11.8922 139.133 11.2897ZM139.645 15.0617H142.967C143.518 15.0617 143.967 15.5124 143.967 16.066V34.4216C143.967 34.9752 143.518 35.4259 142.967 35.4259H139.645C139.094 35.4259 138.645 34.9752 138.645 34.4216V16.066C138.645 15.5124 139.094 15.0617 139.645 15.0617Z"
        fill="#000000"
      ></path>
      <path
        d="M149.515 32.9135C147.588 30.856 146.627 28.2988 146.627 25.2469C146.627 22.1558 147.588 19.5888 149.515 17.551C151.442 15.5131 153.817 14.4941 156.652 14.4941C159.432 14.4941 161.603 15.5033 163.174 17.5216V16.0715C163.174 15.518 163.623 15.0673 164.174 15.0673H167.515C168.067 15.0673 168.515 15.518 168.515 16.0715V34.4272C168.515 34.9807 168.067 35.4314 167.515 35.4314H164.174C163.623 35.4314 163.174 34.9807 163.174 34.4272V32.938C161.608 34.9807 159.432 36.0046 156.652 36.0046C153.817 35.9997 151.437 34.9709 149.515 32.9135ZM161.681 29.5333C162.788 28.3919 163.345 26.9517 163.345 25.2077C163.345 23.4932 162.788 22.0676 161.681 20.9409C160.574 19.8142 159.203 19.2508 157.569 19.2508C155.91 19.2508 154.549 19.8093 153.476 20.9213C152.408 22.0333 151.871 23.4638 151.871 25.2077C151.871 26.9762 152.408 28.4262 153.476 29.5529C154.544 30.6796 155.91 31.243 157.569 31.243C159.203 31.243 160.574 30.6747 161.681 29.5333Z"
        fill="#000000"
      ></path>
      <path
        d="M191.179 17.5511C193.092 19.589 194.048 22.156 194.048 25.2471C194.048 28.299 193.087 30.8562 191.16 32.9136C189.277 34.927 186.608 36.0538 183.857 35.9999C181.199 35.9509 179.077 34.927 177.486 32.9332V34.4225C177.486 34.976 177.037 35.4267 176.486 35.4267H173.203C172.652 35.4267 172.203 34.976 172.203 34.4225V7.04331C172.203 6.48975 172.652 6.03906 173.203 6.03906H176.486C177.037 6.03906 177.486 6.48975 177.486 7.04331V17.5169C179.091 15.4986 181.286 14.4894 184.062 14.4894C186.896 14.4943 189.267 15.5133 191.179 17.5511ZM187.238 29.5531C188.306 28.4264 188.843 26.9764 188.843 25.2079C188.843 23.4639 188.306 22.0384 187.238 20.9215C186.169 19.8095 184.804 19.251 183.145 19.251C181.516 19.251 180.145 19.8144 179.033 20.9411C177.925 22.0678 177.369 23.4884 177.369 25.2079C177.369 26.9519 177.925 28.3921 179.033 29.5335C180.14 30.6749 181.511 31.2432 183.145 31.2432C184.804 31.2432 186.165 30.6798 187.238 29.5531Z"
        fill="#000000"
      ></path>
      <path
        d="M197.49 11.2897C196.876 10.6871 196.568 9.94741 196.568 9.07053C196.568 8.20345 196.876 7.47843 197.49 6.89058C198.105 6.30273 198.851 6.00391 199.729 6.00391C200.612 6.00391 201.359 6.29783 201.973 6.89058C202.588 7.47843 202.895 8.20835 202.895 9.07053C202.895 9.9621 202.588 10.7067 201.973 11.3044C201.359 11.902 200.612 12.2008 199.729 12.2008C198.851 12.191 198.105 11.8922 197.49 11.2897ZM198.003 15.0617H201.325C201.876 15.0617 202.325 15.5124 202.325 16.066V34.4216C202.325 34.9752 201.876 35.4259 201.325 35.4259H198.003C197.451 35.4259 197.003 34.9752 197.003 34.4216V16.066C197.003 15.5124 197.451 15.0617 198.003 15.0617Z"
        fill="#000000"
      ></path>
      <path
        d="M207.238 6.03906H210.521C211.073 6.03906 211.521 6.48975 211.521 7.04331V34.4225C211.521 34.976 211.073 35.4267 210.521 35.4267H207.238C206.687 35.4267 206.238 34.976 206.238 34.4225V7.04331C206.233 6.48975 206.682 6.03906 207.238 6.03906Z"
        fill="#000000"
      ></path>
      <path
        d="M216.999 32.9135C215.072 30.856 214.111 28.2988 214.111 25.2469C214.111 22.1558 215.072 19.5888 216.999 17.551C218.926 15.5131 221.302 14.4941 224.136 14.4941C226.917 14.4941 229.087 15.5033 230.658 17.5216V16.0715C230.658 15.518 231.107 15.0673 231.658 15.0673H235C235.551 15.0673 236 15.518 236 16.0715V34.4272C236 34.9807 235.551 35.4314 235 35.4314H231.658C231.107 35.4314 230.658 34.9807 230.658 34.4272V32.938C229.092 34.9807 226.917 36.0046 224.136 36.0046C221.307 35.9997 218.926 34.9709 216.999 32.9135ZM229.17 29.5333C230.278 28.3919 230.834 26.9517 230.834 25.2077C230.834 23.4932 230.278 22.0676 229.17 20.9409C228.063 19.8142 226.692 19.2508 225.058 19.2508C223.399 19.2508 222.038 19.8093 220.965 20.9213C219.897 22.0333 219.36 23.4638 219.36 25.2077C219.36 26.9762 219.897 28.4262 220.965 29.5529C222.034 30.6796 223.399 31.243 225.058 31.243C226.687 31.243 228.058 30.6747 229.17 29.5333Z"
        fill="#000000"
      ></path>
      <path
        d="M92.8405 29.0583H79.6791L77.6254 34.447C77.401 35.0397 76.8302 35.4316 76.2009 35.4316H73.5277C72.4594 35.4316 71.7179 34.3539 72.1033 33.3496L82.0157 7.35193C82.3182 6.56323 83.0743 6.03906 83.9182 6.03906H88.572C89.416 6.03906 90.1721 6.55833 90.4697 7.35193L100.416 33.3496C100.802 34.3539 100.06 35.4316 98.9919 35.4316H96.2893C95.6552 35.4316 95.0844 35.0348 94.86 34.4372L92.8405 29.0583ZM90.9233 23.9734L86.2305 11.5502L81.5572 23.9734H90.9233Z"
        fill="#000000"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_2_2106">
        <rect
          width="164"
          height="30"
          fill="current"
          transform="translate(72 6)"
        ></rect>
      </clipPath>
    </defs>
  </svg>
);
