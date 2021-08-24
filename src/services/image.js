import Axios from "axios";
const uploadImage = async (img) => {
  try {
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "smiley");
    data.append("cloud_name", "smiley-geek");

    const response = await Axios.post(
      process.env.REACT_APP_CLOUDINARY_URL,
      data
    );

    return response.data.secure_url;
  } catch (error) {
    return "error";
  }
};

export default uploadImage;
