import { Button } from "@/components/ui/button"

async function getStrapiData(path: string) {
  const baseUrl = "http://localhost:1337"
  try {
    const response = await fetch(baseUrl + path)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export default async function Home() {
  const strapiData = await getStrapiData("/api/home-page")
  console.log('Strapi Data:', strapiData)

  return (
    <main className="container mx-auto py-6">
      <Button>Learn more</Button>
    </main>
  );
}
