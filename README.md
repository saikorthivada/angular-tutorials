  <script src="https://checkout.razorpay.com/v1/checkout.js"></script>

declare var Razorpay: any;

var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/FApqk3D.jpeg',
      currency: 'INR', // your 3 letter currency code
      key: 'rzp_test_ykpIQCXJbWgyQi', // your Key Id from Razorpay dashboard
      amount: 30000, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'Sai',
      prefill: {
        email: 'sai@gmail.com',
        contact: '9988998899',
        name: 'Sai kumar'
      },
      theme: {
        color: '#f37254'
      },
      notes: {
        address: 'Home Address'
      },
      modal: {
        ondismiss:  () => {
          console.log('dismissed')
        }
      }
    };

    var successCallback = (payment_id: any) => {
      console.log('payment_id: ' + payment_id);
    };

    var cancelCallback = (error: any) => {
      alert(error.description + ' (Error ' + error.code + ')');
    };

    Razorpay.open(options, successCallback, cancelCallback);
# AngularTutorials

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
