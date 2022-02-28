describe("Helpers test (with setup and tear-down)", function() {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 15;
    submitPaymentInfo();
  });
  
  it('should sum all tips amount on submitServerInfo()', function (){
    expect(sumPaymentTotal('tipAmt')).toEqual(15);
     
    billAmtInput.value = 150;
    tipAmtInput.value = 25;
    submitPaymentInfo();
    expect(sumPaymentTotal('tipAmt')).toEqual(40);
  });

  it('should sum all bill amount on submitServerInfo()', function (){
    expect(sumPaymentTotal('billAmt')).toEqual(100);
     
    billAmtInput.value = 150;
    tipAmtInput.value = 25;
    submitPaymentInfo();
    expect(sumPaymentTotal('billAmt')).toEqual(250);
  });

  it('should tip percent of a single amount on calculateTipPercent()', function () {
    expect(calculateTipPercent(100, 25)).toEqual(25);
    expect(calculateTipPercent(150, 15)).toEqual(10);
  });

  it('should generate a new td with values on appendTd()', function () {
    let newTr = document.createElement('tr');
 
    appendTd(newTr, 'test value');
    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('test value');
  });
  
  afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    allPayments = {};
    paymentId = 0;
  });
});