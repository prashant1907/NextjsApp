import { notFound } from "next/navigation";
import { Product } from "@/app/types/product";
import ProductDetails from "@/app/components/productDetails";
import { Metadata } from "next";

async function getProduct(id: string): Promise<Product | null> {
  const res = await fetch(`https://fakestoreapi.in/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const data = await res.json();
  return data.product || null;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = await getProduct(params.id);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "No product information is available.",
    };
  }

  return {
    title: `${product.title} | Product Details`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  if (!product) return notFound();

  return <ProductDetails product={product} />;
}
