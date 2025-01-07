import { transporter } from ".";

export const sendVerificationMail = async (to: string, code: string) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: "Vet Market - 📋 Активация аккаунта",
    text: "",
    html: `
        <div>
            <p>Код потдтверждения: ${code}</p>
            <a href="http://localhost:3000/api/auth/verify?code=${code}">Подтвердить регестрацию</a>
        </div>
    `,
  });
};
