import cloudinary from "./cloudinary.util";

const uploadImage = async (file: { path: string }): Promise<string> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file.path, (error: Error, result: any) => {
      if (result) {
        resolve(result.secure_url);
      } else {
        reject(error);
      }
    });
  });
};

const uploadImages = async (files: { path: string }[]): Promise<string[]> => {
  const uploadPromises = files.map(
    (file) =>
      new Promise<string>((resolve, reject) => {
        cloudinary.uploader.upload(file.path, (error: Error, result: any) => {
          if (result) {
            resolve(result.secure_url);
          } else {
            reject(error);
          }
        });
      })
  );

  return Promise.all(uploadPromises);
};

const uploadPDF = async (file: { path: string }): Promise<string> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      file.path,
      { resource_type: "raw", folder: "pdfs" },
      (error: Error, result: any) => {
        if (result) {
          resolve(result.secure_url);
        } else {
          reject(error);
        }
      }
    );
  });
};

export { uploadImage, uploadImages, uploadPDF };
