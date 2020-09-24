class CustomerReservation {
  roomCapaicity = 30;
  customerCount = 10;

  registerCustomer() {
    return ++this.customerCount;
  }
  unRegisterCustomer() {
    return --this.customerCount;
  }
}

export default CustomerReservation;
