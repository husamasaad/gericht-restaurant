import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'


export const client = sanityClient({
  projectId: '2uav2qwr',
  dataset: 'production',
  apiVersion: '2023-05-09',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)