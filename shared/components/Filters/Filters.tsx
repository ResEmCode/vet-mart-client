"use client";

import { useEffect, useState } from "react";

import { usePathname, useRouter } from "next/navigation";
import { getFilters } from "@/shared/api/requests";
import qs from "qs";
import { useFilters } from "./store";
import { CheckboxGroup } from "@/shared/ui/custom";

import styles from "./Filters.module.css";
import { Button, Checkbox } from "@/shared/ui/shadcn";
import { FILTERS } from "./constants";
import { useProducts } from "@/shared/store";

type MyAny = any;

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

  const [data, setData] = useState<FilterGroup[] | MyAny>([]);
  const setProducts = useProducts((state) => state.setProducts);

  const { filters, setFilters } = useFilters();

  console.log(data, "data");
  useEffect(() => {
    if (params) {
      (async () => {
        try {
          const paramsString = new URLSearchParams(params);
          const response = await getFilters({ params: { query: paramsString.toString() } });
          setData(response.data);
          const testQuery = qs.parse(params, { parseArrays: true, comma: true, arrayLimit: 0 });
          Object.keys(testQuery).forEach((key) => {
            if (!Array.isArray(testQuery[key])) {
              testQuery[key] = [testQuery[key]] as MyAny;
            }
          });
          setFilters(testQuery);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [params]);

  useEffect(() => {
    if (filters) {
      try {
        const filtersStr = new URLSearchParams(filters);

        fetch(`http://localhost:3000/api/products?${filtersStr}`)
          .then((res) => res.json())
          .then((data) => setProducts(data));
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [filters]);

  const changeHandle = (label: string, group: string) => {
    if ((filters as MyAny)[group]?.length > 0) {
      const newFilters = (filters as MyAny)[group].find((item: MyAny) => item.toLowerCase() === label.toLowerCase());

      if (newFilters) {
        const filtersWithoutLabel = (filters as MyAny)[group].filter((item: MyAny) => item.toLowerCase() !== label.toLowerCase());

        const newFilterObj = { ...filters, [group]: [...filtersWithoutLabel] };
        const queryString = qs.stringify(newFilterObj, { arrayFormat: "comma" });
        router.replace(pathname + "?" + queryString);

        return null;
      }

      const newFilterObj = { ...filters, [group]: [...(filters as MyAny)[group], label] };
      const queryString = qs.stringify(newFilterObj, { arrayFormat: "comma" });
      router.replace(pathname + "?" + queryString);
      return null;
    }

    const newFilterObj = { ...filters, [group]: [label] };
    const queryString = qs.stringify(newFilterObj, { arrayFormat: "comma" });
    router.replace(pathname + "?" + queryString);
  };

  return (
    <div className={styles.filters}>
      {data?.groups?.map(({ filterGroup }: MyAny) => (
        <CheckboxGroup title={filterGroup.title} key={filterGroup.id}>
          {filterGroup.values.map(({ filterValue }: MyAny) => (
            <CheckboxGroup.Item title={filterValue.label} key={filterValue.id}>
              <Checkbox
                checked={
                  (filters as MyAny)[filterGroup.titleEn as MyAny]
                    ? (filters as MyAny)[filterGroup.titleEn as MyAny].some((item: MyAny) => item.toLowerCase() === filterValue.label.toLowerCase())
                    : false
                }
                onClick={() => changeHandle(filterValue.label, filterGroup.titleEn)}
              />
            </CheckboxGroup.Item>
          ))}
        </CheckboxGroup>
      ))}
      {data?.groups?.length > 2 && (
        <div className="text-primary">
          <Button>Скрыть</Button>
        </div>
      )}
    </div>
  );
};
