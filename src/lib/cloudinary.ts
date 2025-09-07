import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  format: string;
  width: number;
  height: number;
}

interface ImageData {
  src: string;
  alt: string;
  text?: string;
  isCloudinary: boolean;
  width?: number;
  height?: number;
}

export interface CloudinaryImage {
  src: string;
  alt: string;
  title: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  unit: string;
  oldPrice?: number;
  backendName: string;
  promoLabel?: string;
  imageUrl?: string;
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

export async function getCloudinaryImages(
  folderName: string = 'productos',
): Promise<Record<string, CloudinaryResource>> {
  try {
    const { resources } = await cloudinary.search
      .expression(`folder:${folderName}`)
      .sort_by('public_id', 'asc')
      .max_results(500)
      .execute();

    const imageMap: Record<string, CloudinaryResource> = {};

    resources?.forEach((resource: CloudinaryResource) => {
      const publicIdName = resource.public_id.split('/').pop() || '';
      imageMap[publicIdName] = resource;
    });

    return imageMap;
  } catch (error) {
    console.error('Error fetching Cloudinary images:', error);
    return {};
  }
}

export async function getProductsWithImages(
  products: Product[],
  logoData: { src: string; alt: string; text?: string },
  folderName: string = 'productos',
): Promise<(Product & { imageData: ImageData })[]> {
  const cloudinaryImages = await getCloudinaryImages(folderName);

  return products.map((product: Product) => {
    const cloudinaryImage = cloudinaryImages[product.backendName];

    let imageData: ImageData;

    if (cloudinaryImage) {
      const optimizedUrl = cloudinaryImage.secure_url.replace('/upload/', '/upload/f_auto,q_auto,w_800,h_800,c_fill/');

      imageData = {
        src: optimizedUrl,
        alt: product.title,
        isCloudinary: true,
        width: cloudinaryImage.width,
        height: cloudinaryImage.height,
      };
    } else {
      imageData = {
        src: logoData.src,
        alt: product.title,
        text: `Imagen no disponible para: ${product.title}`,
        isCloudinary: false,
      };
    }

    return {
      ...product,
      imageData,
    };
  });
}
