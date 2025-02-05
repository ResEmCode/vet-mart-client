import { Console } from "console";
import CryptoJS from "crypto-js";

// const data = {
//   message: "Hello, world!",
// };

// // Шифрование данных
// // const encryptedData

// const formData = new FormData();
// formData.append("data", encryptedData);

// axios
//   .post("/api/encrypt", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   })
//   .then((response) => {
//     console.log("Response:", response.data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

export const encryptData = (data: any) => {
  return CryptoJS.AES.encrypt(data.toString(), "your-secret-key").toString();
};
