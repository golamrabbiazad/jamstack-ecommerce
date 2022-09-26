import { v4 as uuid } from "uuid"

let inventory = [
  {
    categories: ["cloths"],
    name: "WROGN Mens Bomber Jacket",
    price: "3759",
    image: "/products/wrogn-mens-bomber-jacket.png",
    description:
      "Green solid bomber, has a mock collar, 4 pockets ,has a zip closure, long sleeves, straight hemline, without lining",
    brand: "Myntra",
    currentInventory: 4,
  },
  {
    categories: ["home appliances"],
    name: "HITACHI REFRIGERATOR (R-H330PUC7) (BBK) 230L",
    price: "68000.00",
    image: "/products/hitachi-refrigerator-r-h330puc7-bbk-230l.png",
    description:
      "Hitachi Refrigerator R-H350P7PBK (BBK) line of Hitachi can be a perfect choice for you and your family. This wonderfully designed refrigerator of 290 liters capacity is fully equipped with various healthy features to help store your food without any health hazards. Hitachi’s innovative convertible compartment lets you switch between the vegetable and dairy/meat modes cooling depending on where you locate the compartment in the refrigerator. So you can customize your refrigerator as desired to match your lifestyle and needs. Also features a Big Vegetable Compartment, Movable Twist Ice Tray, and Nano Titanium Filter. And it’s easy to move and set it place.",
    brand: "Hitachi",
    currentInventory: 6,
  },
  {
    categories: ["smart phones"],
    name: "Apple iPhone 14 Pro",
    price: "168000.00",
    image: "/products/apple-iphone-14-pro.png",
    description:
      "A magical new way to interact with iPhone. Groundbreaking safety features designed to save lives. An innovative 48MP camera for mind-blowing detail. All powered by the ultimate smartphone chip.",
    brand: "Apple",
    currentInventory: 23,
  },
  {
    categories: ["office equipments"],
    name: "Epson 003 Full Set Ink Bottle",
    price: "2750.00",
    image: "/products/epson-003-full-set-ink-bottle.png",
    description:
      "Page Yield - Black 4500 Pages, Cyan 7500 Pages, Magenta 7500 Pages, Yellow 7500 Pages",
    brand: "Epson",
    currentInventory: 41,
  },
  {
    categories: ["automobiles"],
    name: "Range Rover SV Autobiography Dynamic Black",
    price: "49481714.00",
    image: "/products/range-rover-sv-autobiography-dynamic-black.png",
    description:
      "The Range Rover is a stunner and knows it — this latest version of the iconic SUV is built to impress. It has a strong engine and refined driving dynamics that eliminate unpleasantness for those in the cabin. There are also numerous splashy features and a spacious interior. There is no ignoring the price, however, and cargo space is limited. Still, its sheer style and presence will seal the deal for many people.",
    brand: "Range Rover",
    currentInventory: 9,
  },
  {
    categories: ["smart phones", "new arrivals"],
    name: "Nothing Phone (1)",
    price: "118000.00",
    image: "/products/nothing-phone-1.png",
    description:
      "Less distractions. More soul. Just pure instinct, formed as a machine. Told through beautiful symbols. Deeper interactions. And brave simplicity. Phone (1) can bring us back. To us.",
    brand: "Nothing",
    currentInventory: 25,
  },
  {
    categories: ["cloths", "new arrivals"],
    name: "Black Floral Linen Blend Banarasi Saree",
    price: "1250",
    image: "/products/black-floral-linen-blend-banarasi-saree.png",
    description:
      "The saree comes with an unstitched blouse piece. The blouse worn by the model might be for modelling purpose only. Check the image of the blouse piece to understand how the actual blouse piece looks like.",
    brand: "Myntra",
    currentInventory: 50,
  },
]

inventory.map((i) => {
  i.id = uuid()
  return i
})

export default inventory
