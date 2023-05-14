import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
  projectId: '2uav2qwr',
  dataset: 'production',
  apiVersion: '2023-05-09',
  useCdn: false,
  token: 'skFoFL8bHcgwcHHDFRh0rbsatIJMHuGP3XIWnWMECAZ2hwmHUugQrnwXsdUqkzCiJbNEfSc4nr6xfffaq5CrqHGg36LG0ibPquhivDw9ul4k1IyfotLje8rDhVAtCKw1xBm6sCMKMBZ7OhdHR1TwuQjyqomVNSbnavkKnkAQwzjuzAGBh2R3'
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)