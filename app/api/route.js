export async function POST(request) {
  try {
    const { prompt, width = 1024, height = 1024, steps = 25 } = await request.json()

    if (!prompt || typeof prompt !== "string") {
      return Response.json({ error: "Invalid prompt" }, { status: 400 })
    }

    const accountId = process.env.CLOUDFLARE_ACCOUNT_ID
    const apiToken = process.env.CLOUDFLARE_API_TOKEN

    if (!accountId || !apiToken) {
      return Response.json({ error: "Server configuration error" }, { status: 500 })
    }

    const formData = new FormData()
    formData.append("prompt", prompt)
    formData.append("width", width.toString())
    formData.append("height", height.toString())
    formData.append("steps", steps.toString())

    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/@cf/black-forest-labs/flux-2-klein-4b`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
        body: formData,
      }
    )

    if (!response.ok) {
      const text = await response.text()
      try {
        const data = JSON.parse(text)
        return Response.json(
          { error: data?.errors?.[0] || response.statusText },
          { status: response.status }
        )
      } catch {
        return Response.json(
          { error: response.statusText },
          { status: response.status }
        )
      }
    }

    const data = await response.json()

    if (!data?.result?.image) {
      return Response.json(
        { error: "Invalid image response" },
        { status: 500 }
      )
    }

    const image = `data:image/png;base64,${data.result.image}`

    return Response.json({ image })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to generate image"
    return Response.json({ error: message }, { status: 500 })
  }
}