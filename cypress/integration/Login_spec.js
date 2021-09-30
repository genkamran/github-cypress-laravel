describe('Login Page',()=>{
    beforeEach(()=>{

        cy.visit('/');

        //cy.exec("php artisan migrate:refresh && php artisan db:seed");

        cy.contains('a', 'Log in').click();

    });
    context('Enter User Credentials',()=>{

        context('Valid Credentials',()=> {

            it('Happy Path', () => {

                // cy.get('.underline').click();

                cy.get('#email').type('muhammadkamrankhan2200@gmail.com');

                cy.get('#password').type('12340012');

                cy.get('#remember_me').click();

                cy.contains('button', 'Log in').click();

                cy.contains('Dashboard');


            });
        });


        context('Invalid Credentials',()=> {

            it('valid Email & Invalid password', () => {


                cy.get('#email').type('muhammadkamranbhatti2211@gmail.com');

                cy.get('#password').type('12341234');

                cy.contains('button', 'Log in').click();

                cy.contains('These credentials do not match our record');


                cy.get('*[class="underline text-sm text-gray-600 hover:text-gray-900"]').click();

                cy.get('#email').type('muhammadusman2211@gmail.com');

                cy.get('*[class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"]').click();


                //cy.contains("Connection");


            });

            it('Invalid Email & valid password', () => {


                cy.get('#email').type('muhammadkamran190@gmail.com');

                cy.get('#password').type('12340012');

                cy.contains('button', 'Log in').click();

                cy.contains("These credentials do not match our record");


            });


            it('Invalid Email address', () => {


                cy.get('#email').type('muhammadkamran2');

                cy.get('#password').type('12345678');

                cy.contains('button', 'Log in').click();

                //cy.assertRedirect('/');

                //cy.on('window:alert', 'Please include');

            });



        });

    });





});






