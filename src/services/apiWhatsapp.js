export function apiWhatsapp(userName, number, adTitle) {
  const message = `Olá sou o ${userName}, usuário da plataforma Loquei.\nMe interessei no seu anúncio "${adTitle}"`;

  return `https://api.whatsapp.com/send?phone=55${number}&text=${message}`;
}