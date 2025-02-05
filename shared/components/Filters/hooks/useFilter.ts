// import { useRef, useState } from "react";
// import { useFilters, AllFilters } from "../store";

// export const useFilter = <T extends AllFilters>() => {
//   const { filters, setFilter, setType } = useFilters((state) => state);

//   const limit = useRef<number>(2);
//   const [showAll, setShopAll] = useState(false);

//   const handleShowAll = (groups) => {
//     setShopAll(!showAll);
//     limit.current = showAll ? 2 : groups.length;
//   };

//   const onHandleCheckbox = async (filter: keyof T, value: string) => {
//     setFilter({ filter: filter as keyof AllFilters, value });
//   };

//   return {
//     filters,
//     onHandleCheckbox,
//     showAll,
//     limit,
//     handleShowAll,
//     setType,
//   };
// };
