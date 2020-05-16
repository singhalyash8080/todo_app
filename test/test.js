const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
const server = require('../server')

chai.should();

describe('# Testing', function () {

  // Test the GET all items route
  describe('GET /item/',()=>{
    it("It should GET all the items",(done)=>{
      chai.request(server)
          .get("/item/")
          .end((err,res)=>{
          res.should.have.status(200)
          res.body.should.be.a('array')
          // res.body.length.should.be.eq(3)
          done()
          })
    })
  })

  //Test the GET(by id) route
  describe('GET /item/by_id',()=>{
    it("It should GET a item by id",(done)=>{

      const itemId = '5eb93cd99a8a2c4a0000c12e'

      chai.request(server)
          .get("/item/by_id/"+itemId)
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
  describe('POST /item/',()=>{
    it("It should POST a new item",(done)=>{
      
      const item = {
        name:"testing",
        created_timestamp: "2001-04-13",
        due_timestamp: "2002-04-13",
        completed: "True"
      }
      
      chai.request(server)
          .post("/item/")
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
  describe('PATCH /item/by_id',()=>{
    it("It should PATCH an existing item",(done)=>{
      
      const item = [{"propName":"name","value":"patch"}]
      const itemId ='5eb93cdd9a8a2c4a0000c12f' 

      chai.request(server)
          .patch("/item/by_id/"+itemId)
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
  describe('DELETE /item/by_id',()=>{
    it("It should DELETE an existing item",(done)=>{
      
      const itemId ='5eb93ce29a8a2c4a0000c130' 

      chai.request(server)
          .delete("/item/by_id/"+itemId)
          .end((err,res)=>{
          res.should.have.status(200)
          res.body.should.be.a('object')
          done()
          })
    })
  })

  //Test the DELETE all route
  describe('DELETE /item/all',()=>{
    it("It should DELETE all existing items",(done)=>{ 

      chai.request(server)
          .delete("/item/all")
          .end((err,res)=>{
          // res.should.have.status(200)
          // res.body.should.be.a('object')
          // res.body.length.should.be.eq(0)
          done()
          })
    })
  })


})  
