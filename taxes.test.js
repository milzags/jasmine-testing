it ('should calculate low-bracket', function () { 
    expect(calculateTaxes(10000)).toEqual(1500);
    expect(calculateTaxes(20000)).toEqual(3000);
    expect(calculateTaxes(0)).toBe(0);
});

it ('should calculate high-bracket', function () {
    expect(calculateTaxes(31000)).toEqual(7750);
    expect(calculateTaxes(100000)).toEqual(25000);
});

it ('should remove duplicates from array', function (){
    expect(removeDupes([1,1,2,2,3,4])).toEqual([1,2,3,4]);
    expect(removeDupes('hello')).toBe('helo');
})

describe('submitForm() tests', () => {
    it ('saves input val to usernames array', () => {
        nameInput.value = 'yogabba';
        submitForm();
        expect(usernames.length).toBe(1);
        expect(usernames).toContain('yogabba');
    });
})
