describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add a row element and pass to appendTd on updateServerTable()', function(){
    submitServerInfo();

    const serversTdList = document.querySelectorAll('#serverTable tbody tr td');
    expect(serversTdList.length).toEqual(2);
    expect(serversTdList[0].innerText).toEqual('Alice');
    expect(serversTdList[1].innerText).toEqual('$0.00');
    // expect(serversTdList[2].innerText).toEqual('X');
  });

  afterEach(function() {
    // teardown logic
    serverId = 0;
    allServers = {};
    //serverTbody.innerHTML = '';
  });
});