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

    if (results.rate_limit_allowed === 0) {
      console.warn('⚠ Límite de peticiones de búsqueda alcanzado. Devuelvo arreglo vacío.');
      return [];
    }

    if (!results.resources || results.resources.length === 0) {
      console.warn('⚠ No se encontraron imágenes para el folder:', folderName);
      return [];
    }

    const images = results.resources.map((resource: { secure_url: string; public_id: string }) => {
      const promotionName = resource.public_id.replace(`${folderName}/`, '');

      const optimizedUrl = resource.secure_url.replace('/upload/', '/upload/f_auto,q_auto,w_3000,h_1688,c_fill/');

      return {
        src: optimizedUrl,
        alt: `Promoción de ${folderName} - ${promotionName}`,
        title: `Promoción ${promotionName}`,
      };
    });

    return images;
  } catch (error) {
    console.error('❌ Error al obtener imágenes desde Cloudinary:', error);
    return [];
  }
}
