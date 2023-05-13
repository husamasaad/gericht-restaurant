import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
  projectId: '2uav2qwr',
  dataset: 'production',
  apiVersion: '2023-05-09',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)