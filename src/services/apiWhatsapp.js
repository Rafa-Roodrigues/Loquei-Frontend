export function apiWhatsapp(userId, userName, number, adId, adTitle) {
  //https://api.whatsapp.com/send?phone=number&text=sua%20mensagem

  const message = window.encodeURIComponent(`Olá sou o *${userName}* usuário da plataforma *Loquei*, meu ID é ${userId}.\nMe interessei no seu anúncio *"${adTitle}"* 😁\nNúmero do anúncio: ${adId}.`);

  const url = `https://api.whatsapp.com/send?phone=55${number}&text=${message}`;

  return url;
}