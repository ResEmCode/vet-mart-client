// import { useChangeData } from "@/app/(root)/profile/personal-data/hooks/useChangeData";
// import { InputLabel } from "@/shared/ui/custom";
// import { Button } from "@/shared/ui/shadcn";
// import React from "react";

// export const ProfilePhone = () => {
//   const { phone, open } = useChangeData();
//   return (
//     <form onSubmit={phone.handleSubmit((data) => console.log(data))}>
//       <InputLabel
//         variant={open ? "none" : "default"}
//         text="Номер телефона"
//         disabled={open}
//         error={phone.formState.errors.phone?.message}
//         {...phone.register("phone")}
//       />
//       <Button>Подтвердить</Button>
//     </form>
//   );
// };
