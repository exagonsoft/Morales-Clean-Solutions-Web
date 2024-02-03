import { FaRecycle, FaLeaf, FaTrashAlt, FaTree, FaDumpster } from 'react-icons/fa';

export const RecyclableList = [
  {
    category: "construction Debris",
    materials: ["Wood", "Concrete", "Bricks", "Drywall", "Roofing materials"],
  },
  {
    category: "householdWaste",
    materials: [
      "General household trash",
      "Furniture",
      "Appliances",
      "Electronics",
    ],
  },
  {
    category: "recyclables",
    materials: ["Paper", "Cardboard", "Plastic", "Glass", "Metal"],
  },
  {
    category: "hazardous Waste",
    materials: [
      "Chemicals",
      "Batteries",
      "Paints and solvents",
      "Electronic waste (e-waste)",
    ],
  },
  {
    category: "green Waste",
    materials: ["Yard waste", "Tree branches", "Grass clippings", "Leaves"],
  },
  {
    category: "industrial Materials",
    materials: ["Scrap metal", "Packaging materials", "Pallets"],
  },
  {
    category: "liquid Waste",
    materials: ["Sewage", "Sludge", "Liquid chemicals"],
  },
  {
    category: "bulk Materials",
    materials: ["Sand", "Gravel", "Soil"],
  },
  {
    category: "demolition Waste",
    materials: [
      "Demolition debris",
      "Concrete rubble",
      "Scrap metal from demolitions",
    ],
  },
  {
    category: "specialized Materials",
    materials: ["Auto parts", "Tires", "Appliances (white goods)"],
  },
  {
    category: "furniture",
    materials: ["Couches", "Mattresses", "Household items"],
  },
  {
    category: "medical Waste",
    materials: ["Sharps", "Biomedical waste"],
  },
];

export const Services = [
  {
    service: "Construction Debris Removal",
    description:
      "Our construction debris removal service ensures the efficient and thorough cleanup of construction sites. We handle diverse materials such as wood, concrete, bricks, drywall, and roofing materials, leaving your site clean, safe, and ready for the next phase of your project.",
  },
  {
    service: "Household Waste Collection",
    description:
      "Our household waste collection service is designed to provide reliable and convenient disposal solutions. From general trash to furniture, appliances, and electronics, we ensure the proper and environmentally friendly removal of items, maintaining a clean and healthy living environment for our clients.",
  },
  {
    service: "Recycling Services",
    description:
      "Embrace environmental sustainability with our comprehensive recycling services. We specialize in the responsible recycling of paper, cardboard, plastic, glass, and metal. By minimizing waste in landfills, we contribute to a greener future, promoting eco-friendly practices for a healthier planet.",
  },
  {
    service: "Hazardous Waste Disposal",
    description:
      "Ensure safe and compliant hazardous waste disposal with our specialized service. We manage the proper disposal of chemicals, batteries, paints, solvents, and electronic waste. Our commitment to environmental responsibility guarantees that hazardous materials are handled and disposed of with the utmost care and adherence to regulations.",
  },
  {
    service: "Green Waste Pickup",
    description:
      "Optimize your waste management with our efficient green waste pickup service. We handle yard waste, tree branches, grass clippings, and leaves, promoting sustainable practices in waste disposal. Our reliable services contribute to a cleaner and greener environment, enhancing the beauty of your surroundings.",
  },
  {
    service: "Industrial Materials Recycling",
    description:
      "Contribute to sustainable resource utilization with our industrial materials recycling service. From scrap metal to packaging materials and pallets, we specialize in responsible recycling practices. Partner with us to ensure that your industrial waste is recycled in an environmentally friendly manner, minimizing environmental impact.",
  },
  {
    service: "Liquid Waste Transport",
    description:
      "Trust our liquid waste transport service for safe and compliant disposal. We handle sewage, sludge, and liquid chemicals with precision and adherence to regulatory standards. Our commitment to environmental protection ensures that liquid waste is transported and disposed of responsibly, safeguarding our ecosystems and communities.",
  },
  {
    service: "Bulk Material Delivery",
    description:
      "Simplify your construction and landscaping projects with our bulk material delivery service. From sand and gravel to soil, we provide efficient and timely delivery, meeting your project's material needs. Count on us for reliable services that contribute to the success of your construction and landscaping endeavors.",
  },
  {
    service: "Demolition Waste Cleanup",
    description:
      "Ensure a clean and organized space after demolition projects with our demolition waste cleanup service. We efficiently handle demolition debris, concrete rubble, and scrap metal removal. Partner with us for reliable cleanup solutions that pave the way for the next stages of your project, from renovations to new constructions.",
  },
  {
    service: "Specialized Materials Hauling",
    description:
      "Address unique transportation needs with our specialized materials hauling service. Whether it's auto parts, tires, or appliances (white goods), we provide tailored hauling solutions. Trust us to handle and transport specialized materials securely and efficiently, ensuring their safe arrival at their destination.",
  },
  {
    service: "Furniture and Household Goods Removal",
    description:
      "Experience hassle-free furniture and household goods removal with our professional service. Whether you're decluttering or optimizing your space, we ensure the proper removal of furniture, mattresses, and household items. Choose our reliable service for a stress-free and organized living environment.",
  },
  {
    service: "Medical Waste Collection",
    description:
      "Ensure the secure collection and disposal of medical waste with our specialized service. From sharps to biomedical waste, we adhere to strict health and safety regulations, providing a reliable solution for medical waste management. Partner with us for compliant and secure medical waste collection services.",
  },
];

export const Slogans = [
  {
    fraise1: "Keep Clean",
    icon: <FaRecycle />,
    fraise2: "Keep Green",
    slogan: "We recycle over the 60% of the things we haul.",
  },
  {
    fraise1: "Clean Streets",
    icon: <FaTrashAlt />,
    fraise2: "Healthy Planet",
    slogan: "Helping communities thrive with our waste management solutions.",
  },
  {
    fraise1: "Embrace Green",
    icon: <FaLeaf />,
    fraise2: "Live Clean",
    slogan: "Promoting a sustainable future through responsible waste disposal.",
  },
  {
    fraise1: "Plant Trees",
    icon: <FaTree />,
    fraise2: "Reduce Waste",
    slogan: "Every action counts! Join us in the mission to reduce waste and plant trees.",
  },
  {
    fraise1: "Dump Smart",
    icon: <FaDumpster />,
    fraise2: "Live Smart",
    slogan: "Smart waste disposal for a smarter and cleaner living environment.",
  },
];

export const packagedWastePlan = {
  name: "Basic Plan",
  includes: [
    "Collection of packaged waste",
    "Transportation of packaged waste",
    "Safe loading and unloading",
    "Basic classification",
  ],
  lacks: [
    "Collection of blurred waste",
    "Transportation of blurred waste",
    "Transportation of hazardous waste",
    "Collection of hazardous waste",
    "Advanced classification",
    "Specialized handling",
  ],
};

export const blurredWastePlan = {
  name: "Premium Plan",
  includes: [
    "Collection of packaged waste",
    "Collection of blurred waste",
    "Transportation of packaged waste",
    "Transportation of blurred waste",
    "Safe loading and unloading",
    "Advanced classification",
  ],
  lacks: [
    "Collection of hazardous waste",
    "Transportation of hazardous waste",
    "Specialized handling of blurred waste",
  ],
};

export const hazardousWastePlan = {
  name: "Complete Plan",
  includes: [
    "Collection of packaged waste",
    "Collection of blurred waste",
    "Collection of hazardous waste",
    "Transportation of packaged waste",
    "Transportation of blurred waste",
    "Transportation of hazardous waste",
    "Safe loading and unloading",
    "Specialized classification",
    "Specialized handling of hazardous waste",
  ],
  lacks: [],
};

