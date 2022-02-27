
it('should calculate the monthly rate correctly', function () {
  let initValues  = { amount: 25000, years: 5, rate: 3.5 };
  expect(calculateMonthlyPayment(initValues)).toEqual('454.79');
  initValues  = { amount: 10000, years: 10, rate: 5 };
  expect(calculateMonthlyPayment(initValues)).toEqual('106.07');
});

it("should return a result with 2 decimal places", function() {
  let initValues  = { amount: 15000, years: 8, rate: 5 };
  expect(calculateMonthlyPayment(initValues)).toEqual('189.90');
  initValues  = { amount: 20000, years: 5, rate: 1.9 };
  expect(calculateMonthlyPayment(initValues)).toEqual('349.68');
});

it("should a monthly payment very high", function() {
  let initValues  = { amount: 10000, years: 10, rate: 5 };
  expect(calculateMonthlyPayment(initValues)).toBeGreaterThan('105');
});