import { useState } from "react";
import { Heart, Star } from "lucide-react";

const PetDetailPage = () => {
  // Dummy images
  const images = [
    "https://placedog.net/600/400?id=1",
    "https://placedog.net/600/400?id=2",
    "https://placedog.net/600/400?id=3",
    "https://placedog.net/600/400?id=4",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left: Image Carousel */}
      <div>
        <div className="border rounded-lg relative">
          <img
            src={selectedImage}
            alt="Pet"
            className="w-full h-[400px] object-cover rounded-lg"
          />
          <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow">
            <Heart className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        {/* Thumbnail Images */}
        <div className="flex gap-3 mt-4">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumbnail ${idx}`}
              className={`w-20 h-20 object-cover border rounded-md cursor-pointer ${
                selectedImage === img ? "border-black" : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Right: Pet Info */}
      <div>
        <h2 className="text-2xl font-bold">
          Susi <span className="text-gray-500">(Labrador)</span>
        </h2>
        <p className="text-green-600 font-semibold mt-1">✔ Vaccinated</p>

        {/* Price */}
        <div className="flex items-center mt-2 space-x-2">
          <span className="text-2xl font-bold text-gray-900">₹10,000</span>
          <span className="line-through text-gray-500">₹20,000</span>
          <span className="text-green-600 font-medium">50% off</span>
        </div>

        {/* Offers */}
        <ul className="text-sm text-gray-600 mt-3 list-disc ml-6 space-y-1">
          <li>Bank Offer: Cashback up to ₹5000</li>
          <li>Special Price: Get extra ₹1979 off</li>
          <li>EMI Available</li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <button className="px-6 py-2 bg-gray-900 text-white rounded">
            Add to Cart
          </button>
          <button className="px-6 py-2 bg-yellow-500 text-white rounded">
            Buy Now
          </button>
          <button className="px-6 py-2 border border-green-600 text-green-600 rounded">
            Contact Seller
          </button>
        </div>

        {/* Color & Age */}
        <div className="mt-6">
          <h3 className="font-semibold">Color:</h3>
          <div className="flex gap-3 mt-2">
            <span className="px-3 py-1 border rounded">Beige</span>
            <span className="px-3 py-1 border rounded">Black</span>
            <span className="px-3 py-1 border rounded">Brown</span>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold">Age:</h3>
          <p className="text-sm text-gray-600">2 years</p>
        </div>

        {/* Seller Info */}
        <div className="mt-6 border p-4 rounded-md">
          <h3 className="font-semibold">Seller</h3>
          <p className="text-sm text-gray-600">Pet Shop Aquarium, Kollam</p>
          <p className="text-green-600 font-medium">✔ Verified Seller</p>
        </div>

        {/* Highlights */}
        <div className="mt-6">
          <h3 className="font-semibold text-lg mb-2">Highlights</h3>
          <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
            <li>Age: 2 years</li>
            <li>Gender: Female</li>
            <li>Location: Kollam</li>
          </ul>
        </div>
      </div>

      {/* Ratings & Reviews */}
      <div className="lg:col-span-2 mt-10">
        <h3 className="font-semibold text-xl mb-4">Ratings & Reviews</h3>

        {/* Rating Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-3xl font-bold">4.5★</p>
            <p className="text-sm text-gray-600">
              60,652 ratings & 3,492 reviews
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span>5★</span>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div className="bg-green-500 h-2 rounded w-[70%]"></div>
              </div>
              <span>34,607</span>
            </div>
            <div className="flex items-center gap-2">
              <span>4★</span>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div className="bg-green-500 h-2 rounded w-[20%]"></div>
              </div>
              <span>14,501</span>
            </div>
            <div className="flex items-center gap-2">
              <span>3★</span>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div className="bg-yellow-400 h-2 rounded w-[7%]"></div>
              </div>
              <span>5,212</span>
            </div>
            <div className="flex items-center gap-2">
              <span>2★</span>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div className="bg-orange-400 h-2 rounded w-[2%]"></div>
              </div>
              <span>1,072</span>
            </div>
            <div className="flex items-center gap-2">
              <span>1★</span>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div className="bg-red-500 h-2 rounded w-[1%]"></div>
              </div>
              <span>975</span>
            </div>
          </div>
          <div>
            <h4 className="font-semibold">Sub Ratings</h4>
            <div className="flex justify-between mt-1 text-sm">
              <span>Health Condition</span> <span>4.8</span>
            </div>
            <div className="flex justify-between mt-1 text-sm">
              <span>Breed Authenticity</span> <span>4.7</span>
            </div>
            <div className="flex justify-between mt-1 text-sm">
              <span>Seller Communication</span> <span>4.5</span>
            </div>
            <div className="flex justify-between mt-1 text-sm">
              <span>Viewing Experience</span> <span>4.8</span>
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="mt-6 space-y-6">
          <div className="border p-4 rounded-md">
            <p className="font-semibold">⭐ Very nice character</p>
            <p className="text-sm text-gray-600">
              Her behaviour is too nice and easy to handle.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Rohan Singh • Certified Buyer • 10 months ago
            </p>
          </div>
          <div className="border p-4 rounded-md">
            <p className="font-semibold">⭐ Excellent training</p>
            <p className="text-sm text-gray-600">Her training was well given.</p>
            <p className="text-xs text-gray-500 mt-1">
              Saran Singh • Certified Buyer • 5 months ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetailPage;
