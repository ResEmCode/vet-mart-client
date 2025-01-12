// // pages/api/checkResetPsw.js
// import { prisma } from "@/prisma/prisma-client";

// export default async function checkResetPsw(req, res) {
//   const { linkToken } = req.body;

//   try {
//     const user = await prisma.user.findFirst({
//       where: {
//         resetPswLink: linkToken,
//       },
//     });

//     if (!user) {
//       return res.status(404).json({ success: false });
//     }

//     return res.status(200).json({ success: true });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ success: false });
//   }
// }

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { prisma } from "@/prisma/prisma-client";

export async function GET(req: NextRequest) {
  try {
    const code = req.nextUrl.searchParams.get("recovery");

    if (!code) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    const user = await prisma.user.findFirst({
      where: { resetPswLink: code },
    });

    if (!user) throw new Error("Неверный код подтверждения");

    // const decoded = jwt.verify(code, "test");

    // const user = await prisma.user.findFirst({ where: { email: decoded?.email } });

    // if (!user) throw new Error("Неверный код подтверждения");

    return NextResponse.redirect(new URL(`/?recovery=${code}`, req.url));
  } catch (error) {
    console.error(error);
    console.log("[VERIFY_GET] Server error", error);
  }
}
