const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
const server = require('../server')

chai.should();

describe('# Testing', function () {


  // Test the GET all items route
  describe('GET /',()=>{
    it("It should GET all the items",(done)=>{
      chai.request(server)
          .get("/")
          .end((err,res)=>{
          res.should.have.status(200)
          res.body.should.be.a('array')
          // res.body.length.should.be.eq(3)
          done()
          })
    })
  })

  //Test the wrong GET route
  describe('GET /item',()=>{
    it("It should not GET all the items",(done)=>{
      chai.request(server)
          .get("/item")
          .end((err,res)=>{
          res.should.have.status(404)
          done()
          })
    })
  })

  //Test the GET(by id) route
  describe('GET /by_id',()=>{
    it("It should GET a item by id",(done)=>{

      const itemId = '5eb006a416226f40e01f071f'

      chai.request(server)
          .get("/by_id/"+itemId)
          .end((err,res)=>{
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('name')
          res.body.should.have.property('created_timestamp')
          res.body.should.have.property('due_timestamp')
          res.body.should.have.property('completed')
          done()
          })
    })
  })


  //Test the POST route
  describe('POST /',()=>{
    it("It should POST a new item",(done)=>{
      
      const item = {
        name:"testing",
        created_timestamp: "2001-04-13",
        due_timestamp: "2002-04-13",
        completed: "True"
      }
      
      chai.request(server)
          .post("/")
          .send(item)
          .end((err,res)=>{
          res.should.have.status(201)
          res.body.should.be.a('object')
          // res.body.should.have.property('name')
          // res.body.should.have.property('created_timestamp').eq()
          // res.body.should.have.property('due_timestamp').eq("2001-04-13")
          // res.body.should.have.property('completed').eq('True')
          done()
          })
    })
  })

  //Test the PATCH route
  describe('PATCH /by_id',()=>{
    it("It should PATCH an existing item",(done)=>{
      
      const item = [{"propName":"name","value":"yash2"}]
      const itemId ='5eb006a416226f40e01f071f' 

      chai.request(server)
          .patch("/by_id/"+itemId)
          .send(item)
          .end((err,res)=>{
          res.should.have.status(200)
          res.body.should.be.a('object')
          // res.body.should.have.property('name')
          // res.body.should.have.property('created_timestamp')
          // res.body.should.have.property('due_timestamp')
          // res.body.should.have.property('completed')
          done()
          })
    })
  })


  //Test the DELETE route
  describe('DELETE /by_id',()=>{
    it("It should DELETE an existing item",(done)=>{
      
      const itemId ='5eb006a416226f40e01f071f' 

      chai.request(server)
          .delete("/by_id/"+itemId)
          .end((err,res)=>{
          res.should.have.status(200)
          res.body.should.be.a('object')
          done()
          })
    })
  })


})  
