import { Cloudflare } from "@cloudflare/ai"

export async function POST(request) {
  try {
    const { prompt } = await request.json()

    if (!prompt || typeof prompt !== "string") {
      return Response.json({ error: "Invalid prompt" }, { status: 400 })
    }

    const accountId = process.env.CLOUDFLARE_ACCOUNT_ID
    const apiToken = process.env.CLOUDFLARE_API_TOKEN

    if (!accountId || !apiToken) {
      return Response.json({ error: "Server configuration error" }, { status: 500 })
    }

    const client = new Cloudflare({
      accountId,
      apiToken,
    })

    const response = await client.post(
      `/accounts/${accountId}/ai/run/@cf/stabilityai/stable-diffusion-xl-base-1.0`,
      {
        inputs: {
          prompt,
        },
      },
    )

    if (!response.success || !response.result?.image?.[0]) {
      throw new Error("Failed to generate image")
    }

    const imageData = response.result.image[0]
    const base64Image = `data:image/png;base64,${imageData}`

    return Response.json({ image: base64Image })
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "Failed to generate image" },
      { status: 500 },
    )
  }
}