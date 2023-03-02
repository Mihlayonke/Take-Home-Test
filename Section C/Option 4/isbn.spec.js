import { ISBN } from './isbn13';

describe('Process ISBN:', () => {
  
  test('Check whether 9780316066525 is Valid or Invalid', () => {
    expect(new ISBN().process('9780316066525')).toEqual('Valid');
  });
  
  test('Check whether 9783866155237 is Valid or Invalid', () => {
    expect(new ISBN().process('9783866155237')).toEqual('Valid');
  });
  
  test('Check whether 9780345453747 is Valid or Invalid', () => {
    expect(new ISBN().process('9780345453747')).toEqual('Valid');
  });
  
  test('Check whether 031606652X is Valid or Invalid', () => {
    expect(new ISBN().process('031606652X')).toEqual('Invalid');
  });
  
  test('Check whether 9783876155237 is Valid or Invalid', () => {
    expect(new ISBN().process('9783876155237')).toEqual('Invalid');
  });
  
  test('Check whether 0345453747 is Valid or Invalid', () => {
    expect(new ISBN().process('0345453747')).toEqual('Invalid');
  });
  
  test('Convert a valid 0316066524 (ISBN-10) to 9780316066525 (ISBN-13)', () => {
    expect(new ISBN().process('0316066524')).toEqual('9780316066525');
  });
  
  test('Convert a valid 3866155239 (ISBN-10) to 9783866155237 (ISBN-13)', () => {
    expect(new ISBN().process('3866155239')).toEqual('9783866155237');
  });
  
  test('Convert a valid 817450494X (ISBN-10) to 9788174504944 (ISBN-13)', () => {
    expect(new ISBN().process('817450494X')).toEqual('9788174504944');
  });
 
});