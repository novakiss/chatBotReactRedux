//Test for AsynchronousCode
 function fetchData (callback) {
    return callback;
 }

test('test Callback function' , () => {
    function callback(data) {
        console.log('test console');
        expect(data).toBe('peanut butter');
        i++;
    }
    fetchData(callback);
});
let i=0;

//Liefert false zurück

test('the data is peanut butter', done => {
    function callback(data) {
        console.log(i);
        expect(data).toBe('peanut butter');
        done();
        i++;
    }
    fetchData(callback);
});



