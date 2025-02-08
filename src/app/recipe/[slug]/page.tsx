import { sanityClient } from "@/sanity/lib/client";
import Image from "next/image";
import { FaClock, FaListUl } from "react-icons/fa"; // ⏳ Icons added

async function getRecipe(slug: string) {
  return await sanityClient.fetch(
    `*[_type == "recipe" && slug.current == $slug][0]{
      title, 
      ingredients, 
      instructions, 
      cookingTime,
      "imageUrl": image.asset->url
    }`,
    { slug }
  );
}

export default async function RecipePage({ params }: { params: { slug: string } }) {
  const recipe = await getRecipe(params.slug);

  if (!recipe) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10 text-red-500">
        Recipe Not Found 🚫
      </h1>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* 🖼️ Image Section */}
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-md">
        <Image
          src={recipe.imageUrl || "/placeholder.jpg"}
          alt={recipe.title}
          fill
          quality={100}
          placeholder="empty"
          className="object-cover"
        />
      </div>

      {/* 📝 Recipe Details */}
      <h1 className="text-4xl font-bold mt-4 text-gray-800">{recipe.title}</h1>

      {/* 🕒 Cooking Time */}
      <div className="flex items-center text-gray-600 mt-2">
        <FaClock className="mr-2 text-lg text-blue-500" />
        <p className="text-lg font-medium">{recipe.cookingTime} minutes</p>
      </div>

      {/* 🥦 Ingredients List */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold flex items-center">
          <FaListUl className="mr-2 text-green-500" /> Ingredients
        </h2>
        <ul className="list-disc list-inside mt-2 space-y-1 text-lg text-gray-700">
          {recipe.ingredients.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* 🍳 Instructions */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Instructions</h2>
        <div className="mt-2 space-y-3 text-lg text-gray-700">
          {recipe.instructions.map((step: any, index: number) => (
            <p key={index} className="border-l-4 border-blue-500 pl-4">{`${index + 1}. ${step.children[0].text}`}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

