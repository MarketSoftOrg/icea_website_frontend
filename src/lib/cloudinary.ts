import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export interface CloudinaryImage {
  src: string;
  alt: string;
  title: string;
}

export async function getImagesFromFolder(folderName: string): Promise<CloudinaryImage[]> {
  try {
    const results = await cloudinary.search
      .expression(`folder:${folderName}`)
      .sort_by('public_id', 'asc')
      .max_results(15)
      .execute();

    // The free tier of cloudinary search API has a limit of 1000 requests per hour.
    // If we hit the limit, we should handle it gracefully.
    if (results.rate_limit_allowed === 0) {
      console.warn('Cloudinary search rate limit reached. Returning empty array.');
      return [];
    }

    return results.resources.map((resource: { secure_url: string; public_id: string }) => {
      const promotionName = resource.public_id.replace(`${folderName}/`, '');
      return {
        src: resource.secure_url,
        alt: `Promoción de ${folderName} - ${promotionName}`,
        title: `Promoción ${promotionName}`,
      };
    });
  } catch (error) {
    console.error('Error fetching images from Cloudinary:', error);
    return [];
  }
}
