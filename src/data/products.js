const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const categories = [
  {
    id: "building",
    name: "Building Materials",
    description: "Cement, blocks, and structural essentials.",
    image: asset("products/building-cement.jpg")
  },
  {
    id: "steel",
    name: "Steel and Metal",
    description: "Reinforcement bars, steel plates, tubes, and wire products.",
    image: asset("products/steel-rebar.jpg")
  },
  {
    id: "plumbing",
    name: "Plumbing Supplies",
    description: "Pipes, fittings, pumps, and storage tanks.",
    image: asset("products/plumbing-pvc-pipes.jpg")
  },
  {
    id: "electrical",
    name: "Electrical Supplies",
    description: "Cables, switches, fans, and water heaters.",
    image: asset("products/electrical-switch.jpg")
  },
  {
    id: "roofing",
    name: "Roofing Materials",
    description: "Roof sheets, insulation, and accessories.",
    image: asset("products/roofing-mabati.jpg")
  },
  {
    id: "bathroom",
    name: "Bathroom Products",
    description: "Basins, toilets, showers, and mixers.",
    image: asset("products/bathroom-basin.jpg")
  },
  {
    id: "ironmongery",
    name: "Ironmongery",
    description: "Locks, hinges, handles, screws, and bolts.",
    image: asset("products/ironmongery-lock.jpg")
  },
  {
    id: "tiles",
    name: "Tiles and Finishes",
    description: "Floor, wall, and outdoor tiles with accessories.",
    image: asset("products/tiles-ceramic.jpg")
  },
  {
    id: "household",
    name: "Household Hardware",
    description: "Kitchenware, cabinets, mirrors, and furniture.",
    image: asset("products/household-kitchen.jpg")
  }
];

export const fallbackProductImage = asset("products/default-hardware.svg");

export const getCategoryName = (categoryId) =>
  categories.find((category) => category.id === categoryId)?.name || "Hardware";

export const products = [
  {
    id: "cement-01",
    name: "Premium Cement (50kg)",
    categoryId: "building",
    description: "High-strength cement ideal for residential and commercial builds.",
    image: asset("products/building-cement.jpg")
  },
  {
    id: "blocks-01",
    name: "Concrete Blocks",
    categoryId: "building",
    description: "Uniform blocks for structural walls and partitions.",
    image: asset("products/building-cement.jpg")
  },
  {
    id: "rebars-01",
    name: "Reinforcement Steel Bars",
    categoryId: "steel",
    description: "High-tensile steel bars for reinforced concrete.",
    image: asset("products/steel-rebar.jpg")
  },
  {
    id: "steel-plates-01",
    name: "Steel Plates",
    categoryId: "steel",
    description: "Precision cut steel plates for fabrication works.",
    image: asset("products/steel-rebar.jpg")
  },
  {
    id: "tubes-01",
    name: "Steel Tubes",
    categoryId: "steel",
    description: "Round and square tubes for structural support.",
    image: asset("products/steel-rebar.jpg")
  },
  {
    id: "wire-01",
    name: "Wire Products",
    categoryId: "steel",
    description: "Binding wire and mesh for reinforcement.",
    image: asset("products/steel-rebar.jpg")
  },
  {
    id: "pipes-01",
    name: "PVC Pipes",
    categoryId: "plumbing",
    description: "Durable pipes for residential and commercial plumbing.",
    image: asset("products/plumbing-pvc-pipes.jpg")
  },
  {
    id: "fittings-01",
    name: "Pipe Fittings",
    categoryId: "plumbing",
    description: "Reliable fittings for leak-free connections.",
    image: asset("products/plumbing-pvc-pipes.jpg")
  },
  {
    id: "pumps-01",
    name: "Water Pumps",
    categoryId: "plumbing",
    description: "Self-priming pumps for domestic and industrial use.",
    image: asset("products/plumbing-pvc-pipes.jpg")
  },
  {
    id: "tanks-01",
    name: "Storage Tanks",
    categoryId: "plumbing",
    description: "High-capacity tanks for reliable water storage.",
    image: asset("products/plumbing-pvc-pipes.jpg")
  },
  {
    id: "fans-01",
    name: "Ceiling Fans",
    categoryId: "electrical",
    description: "Energy-efficient fans for cooling and airflow.",
    image: asset("products/electrical-switch.jpg")
  },
  {
    id: "switches-01",
    name: "Switches and Sockets",
    categoryId: "electrical",
    description: "Quality switches for safe electrical installations.",
    image: asset("products/electrical-switch.jpg")
  },
  {
    id: "cables-01",
    name: "Electrical Cables",
    categoryId: "electrical",
    description: "Copper cables for resilient power distribution.",
    image: asset("products/electrical-switch.jpg")
  },
  {
    id: "heaters-01",
    name: "Water Heaters",
    categoryId: "electrical",
    description: "Reliable heaters for homes and hospitality projects.",
    image: asset("products/electrical-switch.jpg")
  },
  {
    id: "roof-01",
    name: "Roofing Sheets",
    categoryId: "roofing",
    description: "Weather-resistant sheets with premium coating.",
    image: asset("products/roofing-sheets.png")
  },
  {
    id: "insulation-01",
    name: "Insulation Rolls",
    categoryId: "roofing",
    description: "Thermal insulation for efficient buildings.",
    image: asset("products/roofing-mabati.jpg")
  },
  {
    id: "roof-accessories-01",
    name: "Roof Accessories",
    categoryId: "roofing",
    description: "Nails, flashing, and trims for perfect finishing.",
    image: asset("products/roofing-mabati.jpg")
  },
  {
    id: "basins-01",
    name: "Designer Basins",
    categoryId: "bathroom",
    description: "Modern basins for residential and commercial spaces.",
    image: asset("products/bathroom-basin.jpg")
  },
  {
    id: "toilets-01",
    name: "Close Coupled Toilets",
    categoryId: "bathroom",
    description: "Water-efficient WC systems.",
    image: asset("products/bathroom-basin.jpg")
  },
  {
    id: "showers-01",
    name: "Rain Showers",
    categoryId: "bathroom",
    description: "Luxury shower sets with premium finishes.",
    image: asset("products/bathroom-basin.jpg")
  },
  {
    id: "mixers-01",
    name: "Basin Mixers",
    categoryId: "bathroom",
    description: "Single lever mixers for elegant bathrooms.",
    image: asset("products/bathroom-basin.jpg")
  },
  {
    id: "locks-01",
    name: "Security Locks",
    categoryId: "ironmongery",
    description: "Heavy-duty locks for residential and commercial doors.",
    image: asset("products/ironmongery-lock.jpg")
  },
  {
    id: "hinges-01",
    name: "Hinges and Knobs",
    categoryId: "ironmongery",
    description: "Corrosion-resistant hinges and handles.",
    image: asset("products/ironmongery-lock.jpg")
  },
  {
    id: "screws-01",
    name: "Screws and Bolts",
    categoryId: "ironmongery",
    description: "Assorted fasteners for construction works.",
    image: asset("products/ironmongery-tools.jpg")
  },
  {
    id: "tiles-floor-01",
    name: "Floor Tiles",
    categoryId: "tiles",
    description: "Durable tiles for high-traffic areas.",
    image: asset("products/tiles-ceramic.jpg")
  },
  {
    id: "tiles-wall-01",
    name: "Wall Tiles",
    categoryId: "tiles",
    description: "Elegant wall tiles with modern textures.",
    image: asset("products/tiles-ceramic.jpg")
  },
  {
    id: "tiles-outdoor-01",
    name: "Outdoor Tiles",
    categoryId: "tiles",
    description: "Slip-resistant tiles for patios and gardens.",
    image: asset("products/tiles-ceramic.jpg")
  },
  {
    id: "kitchenware-01",
    name: "Kitchenware Set",
    categoryId: "household",
    description: "Premium kitchen essentials for modern homes.",
    image: asset("products/household-kitchen.jpg")
  },
  {
    id: "cabinets-01",
    name: "Storage Cabinets",
    categoryId: "household",
    description: "Stylish cabinets for organized living.",
    image: asset("products/household-kitchen.jpg")
  },
  {
    id: "mirrors-01",
    name: "Decor Mirrors",
    categoryId: "household",
    description: "Modern mirrors to elevate interior spaces.",
    image: asset("products/household-kitchen.jpg")
  },
  {
    id: "furniture-01",
    name: "Indoor Furniture",
    categoryId: "household",
    description: "Well-crafted furniture pieces for comfort.",
    image: asset("products/household-kitchen.jpg")
  }
].map((product) => ({
  ...product,
  category: getCategoryName(product.categoryId)
}));
