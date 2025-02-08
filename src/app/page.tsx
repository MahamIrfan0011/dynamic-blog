import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar"
import { sanityClient } from "@/sanity/lib/client";

async function getRecipes() {
  return await sanityClient.fetch(
    `*[_type == "recipe"]{
      title, 
      slug, 
      "imageUrl": image.asset->url  
    }`
  );
}

export default async function RecipesPage() {
  const recipes = await getRecipes();

  return (
    <>
    <Navbar />
    <div className="grid grid-cols-3 gap-6 p-8">
     
      {recipes.map((recipe: any) => (
        <Link key={recipe.slug.current} href={`/recipe/${recipe.slug.current}`}>
          <div className="border rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 transition min-h-[400px] flex flex-col justify-between">
            <Image
              src={recipe.imageUrl || "/placeholder.jpg"}
              alt={recipe.title}
              width={400}
              height={400}
              className="rounded-md object-cover h-[200px] w-full"
            />
            <h2 className="text-xl font-bold mt-2 text-center">{recipe.title}</h2>
          </div>
        </Link>
      ))}
    </div>
    </>
  );
}
