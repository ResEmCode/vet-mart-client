import { transporter } from ".";

export const sendResetPsw = async (to: string, code: string) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: "Vet Market - 📋 Смена пароля",
    text: "",
    html: `
        <div>
            <p>Для сброса пароля перейдите по ссылке:</p>
            <a href="http://localhost:3000/api/auth/recovery-psw?code=${code}">Сменить пароль</a>
        </div>
    `,
  });
};
