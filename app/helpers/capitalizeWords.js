function capitalizeString(str) {
  // Asegurarse de que el parámetro sea una cadena
  if (typeof str !== 'string') {
    return '';
  }

  // Capitalizar la primera letra y combinarla con el resto de la cadena
  return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
}

export default function capitalizeWords(str) {
  if (typeof str !== 'string') {
    return '';
  }

  return str.split(' ').map(word => capitalizeString(word)).join(' ');
}