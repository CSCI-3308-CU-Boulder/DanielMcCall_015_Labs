// Imports the server.js file to be tested.
let server = require("../server");
//Assertion (Test Driven Development) and Should, Expect(Behaviour driven development) library
let chai = require("chai");
// Chai HTTP provides an interface for live integration testing of the API's.
let chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp); 
const { expect } = chai;
var assert = chai.assert;


//Import complete


describe("Server!", () => {
      // Positive Test Cases
      it("Added two numbers successfully", done => {
      
        chai
        .request(server)
        .post("/add").send({num1: 6, num2: 4})
        .end((err, res) => {
            expect(res).to.have.status(201);
          expect(res.body.sum).to.equals(10);
          done();
        });
      });
      
      it("Divided two numbers successfully", done => {
      
            chai
            .request(server)
            .post("/divide").send({num1: 6, num2: 4})
            .end((err, res) => {
              expect(res).to.have.status(201);
              expect(res.body.quotient).to.equals(1.5);
              done();
            });
          });      

          //Negative test cases
          it("Failed to add two inputs", done => {
      
            chai
            .request(server)
            .post("/add").send({num1: 6, num2: "a"})
            .end((err, res) => {
              expect(res).to.have.status(404);
              done();
            });
          });
          
          it("Failed to divide two inputs", done => {
          
                chai
                .request(server)
                .post("/divide").send({num1: 6, num2: 0})
                .end((err, res) => {
                  expect(res).to.have.status(404);
                  done();
                });
              });      
});