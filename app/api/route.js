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

    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/@cf/stabilityai/stable-diffusion-xl-base-1.0`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      }
    )

    const data = await res.json()

    if (!data.success || !data.result?.image?.[0]) {
      throw new Error("Generation failed")
    }

    return Response.json({
      image: `data:image/png;base64,${data.result.image[0]}`,
    })
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "Failed to generate image" },
      { status: 500 }
    )
  }
}