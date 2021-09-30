describe('Register an User',() =>{
    beforeEach(() => {

        cy.visit('/');

        // cy.exec("php artisan migrate:refresh && php artisan db:seed");


    });
    context('Valid Credentials',()=>{

        it('Enter User Details',()=>{

            // cy.visit('http://laravel-cypress.test/');

            cy.contains('a','Register').click();

            cy.get('#name').type('Muhammad kamran khan');

            //cy.get('#name').type('kamran');

            cy.get('#email').type('muhammadkamrankhan2200@gmail.com');

            cy.get('#password').type('12340012');

            cy.get('#password_confirmation').type('12340012');

            cy.contains('button','Register').click();


        });



    });

    context('Password confirmation',()=> {

        it('Unmatched Password', () => {

            // cy.visit('http://laravel-cypress.test/');

            cy.contains('a', 'Register').click();

            cy.get('#name').type('Muhammad Kamran khan');

            //cy.get('#name').type('kamran');

            cy.get('#email').type('muhammadkamrankhan2200@gmail.com');

            cy.get('#password').type('12340012');

            cy.get('#password_confirmation').type('12340000');

            cy.contains('button', 'Register').click();

            cy.contains('The password confirmation does not match');

        });

        it('invalid Password Length',()=>{

            // cy.visit('http://laravel-cypress.test/');

            cy.contains('a','Register').click();

            cy.get('#name').type('Muhammad Kamran');

            //cy.get('#name').type('kamran');

            cy.get('#email').type('muhammadkamrankhan2200@gmail.com');

            cy.get('#password').type('12345');

            cy.get('#password_confirmation').type('12345');

            cy.contains('button','Register').click();

            cy.contains('The password must be at least 8 characters.');

        });

    });

    context('Email confirmation',()=> {

        it('Existing Email', () => {

            //cy.visit('http://laravel-cypress.test/');

            cy.contains('a', 'Register').click();

            cy.get('#name').type('Muhammad Kamran bhatti');

            cy.log('Enter Email');

            cy.get('#email').type('muhammadkamran2222@gmail.com');

            cy.get('#password').type('12345678');

            cy.get('#password_confirmation').type('12345678');

            cy.contains('button', 'Register').click();

            cy.contains('The email has already been taken.');

            cy.contains('a','Already registered').click();

            cy.get('#email').type('muhammadkamrankhan2223@gmail.com');

            cy.get('#password').type('12345677');

            cy.get('#remember_me').click();

            cy.contains('button', 'Log in').click();

            cy.wait(3000);

            //cy.get('.ml-1 div:first-child').click();

            //cy.contains('a','Log Out').click();

        });

        it('Invalid Email address', () => {

            // cy.visit('http://laravel-cypress.test/');

            cy.contains('a', 'Register').click();

            cy.get('#name').type('Muhammad Kamran khan');

            //cy.get('#name').type('kamran');

            cy.get('#email').type('muhammadkamran2');

            cy.get('#password').type('12345678');

            cy.get('#password_confirmation').type('12344444');

            cy.contains('button', 'Register').click();

            //cy.contains('Please include @ in email address');

        });

    });

});
