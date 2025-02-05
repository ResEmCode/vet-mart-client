import CryptoJS from "crypto-js";

export const decryptData = (data: any) => {
  if (data) {
    const bytes = CryptoJS.AES.decrypt(data, "your-secret-key");

    return bytes.toString(CryptoJS.enc.Utf8);
  }

  return null;
};
