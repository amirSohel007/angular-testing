import CustomerReservation from './cutomer-reservation';

describe('CustomerReservation class testing', () => {
  let customerService: CustomerReservation;

  beforeEach(() => {
    customerService = new CustomerReservation();
  });

  afterEach(() => {
    customerService = null;
  });

  it('Should run register customer method', () => {
    customerService = new CustomerReservation();
    let increaseCount = customerService.registerCustomer();
    expect(increaseCount).toEqual(11);
  });

  it('Should run register customer method', () => {
    customerService = new CustomerReservation();
    let increaseCount = customerService.unRegisterCustomer();
    expect(increaseCount).toEqual(9);
  });
});
