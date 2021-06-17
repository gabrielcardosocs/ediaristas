export const ValidationService = {
  cep(cep = ""): Boolean {
    return cep.replace(/\D/g, "").length === 8;
  },
};
