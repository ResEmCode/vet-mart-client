"use client";

import { useEffect, useState } from "react";

import { usePathname, useRouter } from "next/navigation";
import { getFilters } from "@/shared/api/requests";
import qs from "qs";
import { useFilters } from "./store";

export interface DataFilterGroup {
  title: string;
  checkboxes: string[];
}

interface FilterGroup {
  title: string;
  checkboxes: string[];
}

export const Filters = ({ params }: { params: any }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [data, setData] = useState<FilterGroup[]>([]);
  const [filtersParams, setFiltersParams] = useState({});

  const { filters, setFilters } = useFilters();

  useEffect(() => {
    if (params) {
      (async () => {
        try {
          const paramsString = new URLSearchParams(params);
          const response = await getFilters({ params: { query: paramsString.toString() } });
          setData(response.data);
          const testQuery = qs.parse(params, { parseArrays: true, comma: true });
          setFilters(testQuery);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [params]);

  // useEffect(() => {
  //   const testQuery = qs.stringify(filters, { arrayFormat: "comma" });
  //   router.replace(pathname + "?" + testQuery);
  // });

  // useEffect(() => {
  //   const testQuery = qs.parse(params, { parseArrays: true, comma: true });
  //   setFiltersParams(testQuery);
  // }, [params]);
  console.log(filters);

  return (
    // <div className={styles.filters}>
    //   {data?.groups?.map(({ filterGroup }, index) => (
    //     <CheckboxGroup title={filterGroup.title} key={filterGroup.id}>
    //       {filterGroup.values.map(({ filterValue }) => (
    //         <CheckboxGroup.Item title={filterValue.label} key={filterValue.id}>
    //           <Checkbox checked={filters[FILTERS[filterGroup.title]]?.includes(filterValue.label)} />
    //           {filters[FILTERS[filterGroup.title]]?.some((brand) => brand.toLowerCase() === filterValue.label)}
    //           {filters && filters}
    //         </CheckboxGroup.Item>
    //       ))}
    //     </CheckboxGroup>
    //   ))}
    <div>1</div>
    //   {data?.groups?.length > 2 && (
    //     <div className="text-primary">
    //       <Button>Скрыть</Button>
    //     </div>
    //   )}
    // </div>
  );
};
