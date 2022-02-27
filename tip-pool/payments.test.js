describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 15;
    });
  
    it('should add new payment on submitPaymentInfo()', function (){
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('15');
        expect(allPayments['payment1'].tipPercent).toEqual(15);
    });

    it('should create a new payment on createCurPayment()', function () {
        let testPayment = {
          billAmt: '100',
          tipAmt: '15',
          tipPercent: 15,
        }
    
        expect(createCurPayment()).toEqual(testPayment);
    });

    it('should update payment table on appendPaymentTable()', function () {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        appendPaymentTable(curPayment);
    
        let paymentTdList = document.querySelectorAll('#paymentTable tbody tr td');
    
        expect(paymentTdList.length).toEqual(3);
        expect(paymentTdList[0].innerText).toEqual('$100');
        expect(paymentTdList[1].innerText).toEqual('$15');
        expect(paymentTdList[2].innerText).toEqual('15%');
        // expect(paymentTdList[3].innerText).toEqual('X');
    });

    it('should update summary table on updateSummary()', function () {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
    
        let summaryTdList = document.querySelectorAll('#summaryTable tbody tr td');
    
        expect(summaryTdList.length).toEqual(3);
        expect(summaryTdList[0].innerText).toEqual('$100');
        expect(summaryTdList[1].innerText).toEqual('$15');
        expect(summaryTdList[2].innerText).toEqual('15%');
    });
  
    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        //summaryTds[0].innerHTML = '';
        //summaryTds[1].innerHTML = '';
        //summaryTds[2].innerHTML = '';
        //serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
});