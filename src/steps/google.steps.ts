import { Given, Then, When } from '@cucumber/cucumber';
Given('Navigate To Google Homepage', function () {
  console.log('Given');
});

When('Enter A Search Keyword', function () {
  console.log('Then');
});

Then('Hit The Enter Button', function () {
  console.log('Then');
});

Then('Print The Result Count', function () {
  console.log('Then');
});
