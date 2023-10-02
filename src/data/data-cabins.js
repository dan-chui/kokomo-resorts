import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/`;

export const cabins = [
  {
    name: "001",
    maxCapacity: 2,
    regularPrice: 250,
    discount: 0,
    image: imageUrl + "cabin-standard.webp",
    description:
      "Built directly on the white sand beach, the elegant Luxury Beach Front Bungalows offer a unique panoramic view on the island and the protected turquoise lagoon. Each bungalow can accommodate up to a king size bed and additional single bed, and is equipped with: air conditioning, ceiling fan, telephone, free Wi-Fi, satellite LCD TV, safe, minibar, tea and coffee service, iron and ironing board, walk-in closet, bathroom with rain shower, hairdryer and separate toilets.",
  },
  {
    name: "002",
    maxCapacity: 2,
    regularPrice: 350,
    discount: 25,
    image: imageUrl + "cabin-standard.webp",
    description:
      "Built directly on the white sand beach, the elegant Luxury Beach Front Bungalows offer a unique panoramic view on the island and the protected turquoise lagoon. Each bungalow can accommodate up to a king size bed and additional single bed, and is equipped with: air conditioning, ceiling fan, telephone, free Wi-Fi, satellite LCD TV, safe, minibar, tea and coffee service, iron and ironing board, walk-in closet, bathroom with rain shower, hairdryer and separate toilets.",
  },
  {
    name: "003",
    maxCapacity: 4,
    regularPrice: 300,
    discount: 0,
    image: imageUrl + "cabin-standard.webp",
    description:
      "Experience luxury family living in our medium-sized bungalow. Perfect for families of up to 4 people, this bungalow offers a comfortable and inviting space with all modern amenities. Each bungalow can accommodate up to 2 king size beds and an additional single bed, and is equipped with: air conditioning, ceiling fan, telephone, free Wi-Fi, satellite LCD TV, safe, minibar, tea and coffee service, iron and ironing board, walk-in closet, bathroom with rain shower, hairdryer and separate toilets.",
  },
  {
    name: "004",
    maxCapacity: 4,
    regularPrice: 500,
    discount: 50,
    image: imageUrl + "cabin-standard.webp",
    description:
      "Experience luxury family living in our medium-sized bungalow. Perfect for families of up to 4 people, this bungalow offers a comfortable and inviting space with all modern amenities. Each bungalow can accommodate up to 2 king size beds and an additional single bed, and is equipped with: air conditioning, ceiling fan, telephone, free Wi-Fi, satellite LCD TV, safe, minibar, tea and coffee service, iron and ironing board, walk-in closet, bathroom with rain shower, hairdryer and separate toilets.",
  },
  {
    name: "005",
    maxCapacity: 6,
    regularPrice: 350,
    discount: 0,
    image: imageUrl + "cabin-standard.webp",
    description:
      "Experience luxury family living in our medium-sized bungalow. Perfect for families or groups of up to 6 people, this bungalow offers a comfortable and inviting space with all modern amenities. Each bungalow can accommodate up to 3 double size beds and an additional single bed, and is equipped with: air conditioning, ceiling fan, telephone, free Wi-Fi, satellite LCD TV, safe, minibar, tea and coffee service, iron and ironing board, walk-in closet, bathroom with rain shower, hairdryer and separate toilets.",
  },
  {
    name: "006",
    maxCapacity: 6,
    regularPrice: 800,
    discount: 100,
    image: imageUrl + "cabin-standard.webp",
    description:
      "Experience luxury family living in our medium-sized bungalow. Perfect for families or groups of up to 6 people, this bungalow offers a comfortable and inviting space with all modern amenities. Each bungalow can accommodate up to 3 double size beds and an additional single bed, and is equipped with: air conditioning, ceiling fan, telephone, free Wi-Fi, satellite LCD TV, safe, minibar, tea and coffee service, iron and ironing board, walk-in closet, bathroom with rain shower, hairdryer and separate toilets.",
  },
  {
    name: "007",
    maxCapacity: 8,
    regularPrice: 1000,
    discount: 100,
    image: imageUrl + "cabin-deluxe.webp",
    description:
      "Experience luxury family living in our large-sized bungalow. Perfect for families or groups of up to 8 people, this bungalow offers a comfortable and inviting space with all modern amenities. Each bungalow can accommodate up to 3 queen size beds and an additional single bed, and is equipped with: air conditioning, ceiling fan, telephone, free Wi-Fi, satellite LCD TV, safe, minibar, tea and coffee service, iron and ironing board, walk-in closet, bathroom with rain shower, hairdryer and separate toilets.",
  },
  {
    name: "008",
    maxCapacity: 10,
    regularPrice: 1400,
    discount: 0,
    image: imageUrl + "cabin-deluxe.webp",
    description:
      "Indulge in the epitome of opulence and grandeur with your large group or multiple families in our Premier Cabin. This cabin offers a lavish retreat that caters to all your needs and desires. The cabin features an opulent design and boasts of high-end finishes, intricate details and the finest quality materials throughout. The Premier Cabin can accommodate up to 4 queen size beds and an additional single bed, and is equipped with: air conditioning, ceiling fan, telephone, free Wi-Fi, satellite LCD TV, safe, minibar, tea and coffee service, iron and ironing board, walk-in closet, bathroom with rain shower, hairdryer and separate toilets.",
  },
];
