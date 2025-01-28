import { $Enums } from "@prisma/client";
export const getProductType = (type: string) => {
  const productTypeTranslate = {
    игрушка: $Enums.productTypeList.toys,
    корм: $Enums.productTypeList.food,
    ветпрепорат: $Enums.productTypeList.veterinaryDrugs,
    разное: $Enums.productTypeList.different,
  };

  const entry = Object.entries(productTypeTranslate).find(([key, value]) => value === type);
  return entry ? entry[0] : undefined;
};
