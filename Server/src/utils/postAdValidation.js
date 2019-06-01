const postAdValidate = {
  id: /^[1-9]{1,}/,
  email: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
  manufacturer: /^[a-zA-Z]+$/,
  model: /^([a-zA-Z0-9 _-]+)$/,
  price: /^[0-9]+$/,
  state: /^[a-zA-Z]+$/,
  status: /^[a-zA-Z]+$/,
  priceOffered: /^[0-9]+$/,
};

export default postAdValidate;
