const request = require('supertest');
const app = require('../server');

const id = Math.floor(Math.random() * (100000 - 50000) + 50000)

let new_id = ''

describe('test serve', ()=>{
    it('should list articles', async ()=>{
        const res = await request(app).get('/articles')

        expect(res.body).toHaveProperty('docs')
        expect(res.body.limit).toBe(10)
        expect(res.statusCode).toBe(200)
    })


    it('should store article', async ()=>{
        const res = await request(app).post('/articles').send({
            "id": id,
            "title": "Watch Neil deGrasse Tyson Deliver a Heartfelt Message to 'Birthday Buddy' NASA",
            "url": "https://www.space.com/42038-neil-tyson-birthday-nasa-video.html",
            "imageUrl": "https://img.purch.com/rc/360x240/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3OS84NDEvb3JpZ2luYWwvbmVpbC1kZWdyYXNzZS10eXNvbi5qcGc=",
            "newsSite": "Space.com",
            "summary": "",
            "publishedAt": "2018-10-04T22:00:00.000Z",
            "updatedAt": "2021-05-18T13:43:20.336Z",
            "featured": false,
            "launches": [],
            "events": []
        })
        new_id = res.body._id
        expect(res.statusCode).toBe(201)
        expect(res.body).toHaveProperty('_id')
    })

    it('should not allow storing duplicate article ID', async ()=>{
        const res = await request(app).post('/articles').send({
            "id": id,
            "title": "Watch Neil deGrasse Tyson Deliver a Heartfelt Message to 'Birthday Buddy' NASA",
            "url": "https://www.space.com/42038-neil-tyson-birthday-nasa-video.html",
            "imageUrl": "https://img.purch.com/rc/360x240/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3OS84NDEvb3JpZ2luYWwvbmVpbC1kZWdyYXNzZS10eXNvbi5qcGc=",
            "newsSite": "Space.com",
            "summary": "",
            "publishedAt": "2018-10-04T22:00:00.000Z",
            "updatedAt": "2021-05-18T13:43:20.336Z",
            "featured": false,
            "launches": [],
            "events": []
        })
        expect(res.statusCode).toBe(500)
        expect(res.body).toHaveProperty('message')
    })

    it('should show article', async ()=>{
        const res = await request(app).get(`/articles/${new_id}`)

        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty('title')
    })

    it('should show article invalid param id', async ()=>{
        const res = await request(app).get(`/articles/${new_id}3`)

        expect(res.statusCode).toBe(404)
        expect(res.body).toHaveProperty('message')
    })

    it('should update article attributes', async ()=>{
        const res = await request(app).put(`/articles/${new_id}`).send({
            "title": "Watch Neil deGrasse Tyson Deliver a Heartfelt Message to 'Birthday Buddy' NASA",
            "url": "https://www.space.com/42038-neil-tyson-birthday-nasa-video.html",
            "imageUrl": "https://img.purch.com/rc/360x240/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3OS84NDEvb3JpZ2luYWwvbmVpbC1kZWdyYXNzZS10eXNvbi5qcGc=",
            "newsSite": "Space.com",
            "summary": "",
            "publishedAt": "2018-10-04T22:00:00.000Z",
            "updatedAt": "2021-05-18T13:43:20.336Z",
            "featured": false,
            "launches": [],
            "events": []
        })
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty('_id')
    })

    it('should not update article attributes', async ()=>{
        const res = await request(app).put(`/articles/${new_id}32`).send({
            "title": "Watch Neil deGrasse Tyson Deliver a Heartfelt Message to 'Birthday Buddy' NASA",
            "url": "https://www.space.com/42038-neil-tyson-birthday-nasa-video.html",
            "imageUrl": "https://img.purch.com/rc/360x240/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3OS84NDEvb3JpZ2luYWwvbmVpbC1kZWdyYXNzZS10eXNvbi5qcGc=",
            "newsSite": "Space.com",
            "summary": "",
            "publishedAt": "2018-10-04T22:00:00.000Z",
            "updatedAt": "2021-05-18T13:43:20.336Z",
            "featured": false,
            "launches": [],
            "events": []
        })
        expect(res.statusCode).toBe(500)
        expect(res.body).toHaveProperty('message')
    })

    it('should delete article', async ()=>{
        const res = await request(app).delete(`/articles/${new_id}`)

        expect(res.statusCode).toBe(200)
        expect(res.body.sucess).toBe(true)
    })

    it('should not delete article, invalid param id', async ()=>{
        const res = await request(app).delete(`/articles/${new_id}34`)

        expect(res.statusCode).toBe(500)
        expect(res.body).toHaveProperty('message')
    })
})