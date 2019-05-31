const formValidate = {
  id: /^[1-9]{1,}/,
  firstName: /^[a-zA-Z]+$/,
  lastName: /^[a-zA-Z]+$/,
  email: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
  address: /^([0-9]+)[.]([0-9]+)$/,
};

export default formValidate;
