import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
export async function cloudinaryUploadVideo() {
  const data = await cloudinary.v2.uploader
    .upload('shagrol.mp4', {
      folder: '',
      resource_type: 'video',
    })
    .then(console.log);
}
